import React, { useState } from "react";
import { MdOutlineClose, MdDriveFolderUpload } from "react-icons/md";
import { api } from "../api/Api";
import "../style/add-file.css";

export default function AddFileModal({ onFileUploaded, onClose, activeConversation }) {
  const [isUploading, setIsUploading] = useState(false); 
  const [error, setError] = useState(null);

 const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !activeConversation) return;

    setIsUploading(true);
    setError(null);

    try {
        const data = await api.uploadDocument(file);
        const documentId = data?.document?._id; 
        
        if (!documentId) {
            throw new Error("ID do documento não recebido da API. Verifique a resposta do servidor.");
        }
        alert(`Arquivo "${file.name}" enviado com sucesso!`);

        if (onFileUploaded && documentId) {
            onFileUploaded(documentId);
        }
        onClose(); 
    } catch (err) {
        console.error("Erro no upload do arquivo:", err);
        setError(err.message || "Erro ao enviar arquivo.");
    } finally {
        setIsUploading(false);
    }
};

  return (
    <div className="modal-overlay">
      <div className="modal add-file-modal modal-animate">
        <div className="modal-header">
          <h3>Adicionar Arquivo</h3>
          {/* add de arquivo  */}
          <button className="close-modal-btn" onClick={onClose} disabled={isUploading}><MdOutlineClose /></button>
        </div>
        <div className="modal-content">
          {/* mensagem erro*/}
          {error && <p className="error-message">{error}</p>}
          <label className={`file-upload-label ${isUploading ? "disabled" : ""}`}>
            <MdDriveFolderUpload className="upload-icon" />
            {/* seleção de arquivo */}
            <span>{isUploading ? "Processando..." : "Escolher Arquivo"}</span>
            <input type="file" onChange={handleFileChange} disabled={isUploading} style={{ display: "none" }} />
          </label>
        </div>
      </div>
    </div>
  );
}