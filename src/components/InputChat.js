import React, { useState } from "react";
import { FiSend, FiPlus } from "react-icons/fi";
import { api } from "../api/Api";
import "../style/chat.css";


export default function InputChat({ activeConversation, onOpenAddFileModal, onMessageSent, attachedDocumentId, setAttachedDocumentId }) {
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const sendMessage = async () => {

        const userPrompt = message.trim();
        if (!activeConversation || (!userPrompt && !attachedDocumentId) || isSending) return;

        setIsSending(true);
        setMessage("");
        onMessageSent?.({
            sender: "user",
            content: userPrompt,
            id: crypto.randomUUID(),
        });

        try {
            const conversationId = activeConversation?._id || activeConversation?.id;

            const data = await api.sendMessage(userPrompt, conversationId, attachedDocumentId);
          
            setAttachedDocumentId(null);

            onMessageSent?.({
                sender: "bot",
                content: data?.message_content || data?.content || data?.mensagem || "Resposta da IA não recebida.",
                id: crypto.randomUUID(),
                generated_document_id: data?.document_id,
            });

        } catch (err) {
            console.error("Erro ao enviar mensagem:", err);
            
            const errorMessage = attachedDocumentId 
                ? "Erro de conexão/servidor. O anexo foi mantido. Tente novamente." 
                : "Erro de conexão ou servidor. Tente novamente.";

            onMessageSent?.({ 
                sender: "bot", 
                content: errorMessage, 
                id: crypto.randomUUID() 
            });
        } finally {
            setIsSending(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); 
            sendMessage();
        }
    };

    const placeholderText = attachedDocumentId
        ? `Documento anexado (${attachedDocumentId.substring(0, 4)}...). Digite sua instrução...`
        : (isSending ? "Aguardando resposta..." : "Digite sua mensagem...");
        
    return (
        
        <div className={`chat-input ${attachedDocumentId ? 'has-attachment' : ''}`}> 
            <button 
                className="add-file-btn" 
                onClick={onOpenAddFileModal} 
                disabled={isSending}
            >
                {/* btn add file */}
                <FiPlus className={attachedDocumentId ? 'attached-icon' : ''} />
            </button>
        
            <input
                type="text"
                placeholder={placeholderText}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isSending}
            />
            
            <button 
                className="send-btn" 
                onClick={sendMessage} 
               
                disabled={isSending || (!message.trim() && !attachedDocumentId)}
            >
                <FiSend />
            </button>
            
        </div>
    );
}