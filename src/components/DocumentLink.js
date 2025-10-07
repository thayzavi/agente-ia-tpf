import React from "react";
import { api } from "../api/Api";

export default function DocumentLink({ documentId }) {
  const handleDownload = async () => {
    try {
      const blob = await api.getDocumentFile(documentId);

     
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      a.download = `documento_${documentId}.pdf`;

      document.body.appendChild(a);
      a.click();

      // Limpeza
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao baixar arquivo:", err);
      alert("Erro ao tentar baixar o arquivo. Tente novamente.");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="document-download-btn"
      style={{
        background: "none",
        border: "none",
        color: "#007bff",
        cursor: "pointer",
        textDecoration: "underline",
        marginTop: "8px",
      }}
    >
      📄 Baixar documento
    </button>
  );
}
