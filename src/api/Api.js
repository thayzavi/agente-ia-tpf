const API_BASE_URL = "https://agente-ia-squad42.onrender.com";

// Função para pegar token do localStorage
const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token não encontrado. Faça login novamente.");
  return token;
};

// Função para tratar respostas HTTP
const handleResponse = async (res) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erro ${res.status}: ${text || res.statusText}`);
  }
  try {
    return res.json();
  } catch {
    return null;
  }
};

// Função auxiliar para requisições com token
const fetchWithToken = async (url, options = {}) => {
  const token = getToken();
  const headers = { Authorization: `Bearer ${token}`, ...(options.headers || {}) };
  const res = await fetch(url, { ...options, headers });
  return handleResponse(res);
};

export const api = {


  /** ===================== AUTENTICAÇÃO ===================== */
  login: async (email, password) => {
    if (!email || !password) throw new Error("Email e senha são obrigatórios.");
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await handleResponse(res);

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
    } else {
      throw new Error("Token não retornado pelo servidor.");
    }

    return data;
  },

  getProfile: async () => {
    return fetchWithToken(`${API_BASE_URL}/api/auth/profile`);
  },


  /** ===================== CONVERSAS ===================== */


  getConversations: async () => {
    return fetchWithToken(`${API_BASE_URL}/api/chat/conversations`);
  },

  getConversationHistory: async (conversationId) => {
    if (!conversationId) throw new Error("ID da conversa é obrigatório.");
    return fetchWithToken(`${API_BASE_URL}/api/chat/conversations/${conversationId}`);
  },

  renameConversation: async (conversationId, newTitle) => {
    if (!conversationId || !newTitle) throw new Error("ID e título são obrigatórios");

    const url = `${API_BASE_URL}/api/chat/conversations/${conversationId}/rename`;

    return fetchWithToken(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ new_title: newTitle }),
    });
  },

  deleteConversation: async (conversationId) => {
    if (!conversationId) throw new Error("ID da conversa obrigatório");
    return fetchWithToken(`${API_BASE_URL}/api/chat/conversations/${conversationId}`, {
      method: "DELETE",
    });
  },

  /** ===================== MENSAGENS ===================== */

  sendMessage: async (
    prompt,
    conversationId = null,
    attachedDocumentId = null // Adicionado para suportar o anexo
  ) => {
    if (!prompt) throw new Error("Mensagem não pode ser vazia.");
    const url = `${API_BASE_URL}/api/chat/conversations`;

    const requestBody = {
      prompt: prompt,
    };
    if (conversationId) {
      requestBody.conversation_id = conversationId;
    }
    if (attachedDocumentId) {
      requestBody.input_document_id = attachedDocumentId;
    }

    const data = await fetchWithToken(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    return data;
  },
  /** ===================== DOCUMENTOS ===================== */
  uploadDocument: async (file) => {
    if (!file) throw new Error("Arquivo não selecionado.");
    const formData = new FormData();
    formData.append("file", file);
    return fetchWithToken(`${API_BASE_URL}/api/documents/upload`, {
      method: "POST",
      body: formData,
    });
  },

  downloadFile: async (gridfsFileId) => {
    if (!gridfsFileId) throw new Error("ID do arquivo é obrigatório.");
    const token = getToken();
    const res = await fetch(`${API_BASE_URL}/files/${gridfsFileId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Falha ao baixar arquivo.");
    return res.blob();
  },
};
