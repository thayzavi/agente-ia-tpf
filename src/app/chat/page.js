"use client";
import React, { useState, useEffect, useRef } from "react";
import SidebarItem from "../../components/SidebarItem";
import Modal from "../../components/Modal";
import AddFileModal from "../../components/AddFileModal";
import MenuPerfil from "../../components/MenuPerfil";
import InputChat from "../../components/InputChat";
import { FaUserCircle } from "react-icons/fa";
import { api } from "../../api/Api";
import "../../style/chat.css";

export default function ChatPage() {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({ name: "Carregando...", email: "carregando@email.com" });
  const [modal, setModal] = useState(null);
  const [showMenuPerfil, setShowMenuPerfil] = useState(false);
  const [showAddFileModal, setShowAddFileModal] = useState(false);

  //  Para gerenciar o ID do documento anexado
  const [attachedDocumentId, setAttachedDocumentId] = useState(null);

  const chatContainerRef = useRef(null);

  // Carrega conversas e usuário ao abrir
  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const [convData, userData] = await Promise.all([
          api.getConversations(),
          api.getProfile(),
        ]);

        setConversations(convData);
        setUser({ name: userData.name, email: userData.email });

        if (convData.length) selectConversation(convData[0]);
        else {
          const newConvData = await api.sendMessage("Olá, TPF-AI!");
          setConversations(prev => [newConvData.conversation, ...prev]);
          selectConversation(newConvData.conversation);
        }
      } catch (err) {
        console.error("Erro ao carregar chat:", err.message);
      }
    };
    load();
  }, []);

 
  useEffect(() => {
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const selectConversation = async (conversation) => {
    setActiveConversation(conversation);
    setAttachedDocumentId(null);
    try {
      const history = await api.getConversationHistory(conversation._id || conversation.id);
      setMessages(history || []);
    } catch {
      setMessages([]);
    }
  };

  // Funções de renomear e excluir
  const handleRenameConversation = async (conversationId, newTitle) => {
    if (!conversationId || !newTitle) return alert("Título obrigatório");

    try {
      await api.renameConversation(conversationId, newTitle);
      setConversations(prev =>
        prev.map(c => (c._id === conversationId ? { ...c, title: newTitle } : c))
      );
      closeModal();
    } catch (err) {
      alert("Erro ao renomear: " + err.message);
    }
  };

  const handleDeleteConversation = async (conversationId) => {
    if (!conversationId) return alert("ID da conversa não encontrado");

    try {
      await api.deleteConversation(conversationId);
      const newConversations = conversations.filter(c => c._id !== conversationId);
      setConversations(newConversations);

      if (activeConversation && activeConversation._id === conversationId) {
        selectConversation(newConversations[0] || null);
      }
      closeModal();
    } catch (err) {
      alert("Erro ao excluir: " + err.message);
    }
  };


  const handleNewMessage = (msg) => setMessages(prev => [...prev, msg]);
  const closeModal = () => setModal(null);
  const onLogout = () => (window.location.href = "/auth/login");

  const handleFileUploaded = (documentId) => {
    setAttachedDocumentId(documentId);
    setShowAddFileModal(false);
    alert(`Documento anexado! Digite sua instrução e envie.`);
  };

  return (
    <div className="chat-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">TPF<span>-AI</span></h1>
        <button
          className="new-chat"
          onClick={async () => {
            try {
              const newConvData = await api.sendMessage("Novo chat iniciado!");
              setConversations(prev => [newConvData.conversation, ...prev]);
              selectConversation(newConvData.conversation);
            } catch (err) {
              console.error("Erro ao criar novo chat:", err.message);
            }
          }}
        >
          + Novo Chat
        </button>

        <h4>Histórico</h4>
        <div className="chat-list">
          {conversations.map((conv) => (
            <SidebarItem
              key={conv._id}
              conversation={conv}
              onRename={(conversation) =>
                setModal({ type: "renomear", chat: conversation })
              }
              onDelete={(conversation) =>
                setModal({ type: "excluir", chat: conversation })
              }
              onSelect={selectConversation}
              isActive={activeConversation?._id === conv._id}
            />
          ))}
        </div>


        <div className="user-profile" onClick={() => setShowMenuPerfil(!showMenuPerfil)}>
          <div className="user-icon-container"><FaUserCircle size={32} color="#000000ff" /></div>
          <span>{user.name}</span>
          {showMenuPerfil && <MenuPerfil onLogout={onLogout} userEmail={user.email} />}
        </div>
      </aside>

      {/* Chat principal */}
      <main className="chat-main">
        <div className="chat-messages" ref={chatContainerRef}>
          {messages.map(msg => (
            <div key={msg._id || msg.id} className={`message-bubble ${msg.role === "user" ? "user" : "bot"}`}>
              {msg.content}
              {msg.generated_document_id && (
             <DocumentLink documentId={msg.generated_document_id} /> 
        )}
            </div>
          ))}

        </div>

        <InputChat
          activeConversation={activeConversation}
          onMessageSent={handleNewMessage}
          onOpenAddFileModal={() => setShowAddFileModal(true)}
          attachedDocumentId={attachedDocumentId}
          setAttachedDocumentId={setAttachedDocumentId}
        />
      </main>

      {/* Modais */}
      {modal && modal.chat && (
        <Modal
          type={modal.type}
          chatTitle={modal.chat.title}
          onClose={closeModal}
          onConfirm={
            modal.type === "renomear"
              ? (newTitle) => handleRenameConversation(modal.chat._id, newTitle)
              : () => handleDeleteConversation(modal.chat._id)
          }
        />
      )}

      {showAddFileModal && (
        <AddFileModal
          onClose={() => setShowAddFileModal(false)}
          activeConversation={activeConversation}
          
          onFileUploaded={handleFileUploaded}
        />
      )}
    </div>
  );
}