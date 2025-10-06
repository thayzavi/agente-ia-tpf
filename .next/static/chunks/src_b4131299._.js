(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/api/Api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
const API_BASE_URL = "https://agente-ia-squad42.onrender.com";
// Função para pegar token do localStorage. Estava com problemas para autenticar
const getToken = ()=>{
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado. Faça login novamente.");
    return token;
};
// Função para tratar respostas HTTP
const handleResponse = async (res)=>{
    if (!res.ok) {
        const text = await res.text();
        throw new Error("Erro ".concat(res.status, ": ").concat(text || res.statusText));
    }
    try {
        return res.json();
    } catch (e) {
        return null;
    }
};
// Função auxiliar para requisições com token
const fetchWithToken = async function(url) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const token = getToken();
    const headers = {
        Authorization: "Bearer ".concat(token),
        ...options.headers || {}
    };
    const res = await fetch(url, {
        ...options,
        headers
    });
    return handleResponse(res);
};
const api = {
    /** Login */ login: async (email, password)=>{
        if (!email || !password) throw new Error("Email e senha são obrigatórios.");
        const res = await fetch("".concat(API_BASE_URL, "/api/auth/login"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await handleResponse(res);
        if (data.access_token) {
            localStorage.setItem("token", data.access_token);
        } else {
            throw new Error("Token não retornado pelo servidor.");
        }
        return data;
    },
    /** Registro */ register: async (name, email, password)=>{
        if (!name || !email || !password) {
            throw new Error("Nome completo, email e senha são obrigatórios.");
        }
        const res = await fetch("".concat(API_BASE_URL, "/api/auth/register"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        return handleResponse(res);
    },
    /** Logout */ logout: ()=>{
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
    },
    /*informações do user*/ getProfile: async ()=>{
        return fetchWithToken("".concat(API_BASE_URL, "/api/auth/profile"));
    },
    /** rota das conversas*/ getConversations: async ()=>{
        return fetchWithToken("".concat(API_BASE_URL, "/api/chat/conversations"));
    },
    getConversationHistory: async (conversationId)=>{
        if (!conversationId) throw new Error("ID da conversa é obrigatório.");
        return fetchWithToken("".concat(API_BASE_URL, "/api/chat/conversations/").concat(conversationId));
    },
    renameConversation: async (conversationId, newTitle)=>{
        if (!conversationId || !newTitle) throw new Error("ID e título são obrigatórios");
        const url = "".concat(API_BASE_URL, "/api/chat/conversations/").concat(conversationId, "/rename");
        return fetchWithToken(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                new_title: newTitle
            })
        });
    },
    deleteConversation: async (conversationId)=>{
        if (!conversationId) throw new Error("ID da conversa obrigatório");
        return fetchWithToken("".concat(API_BASE_URL, "/api/chat/conversations/").concat(conversationId), {
            method: "DELETE"
        });
    },
    /** Fiz uma logica para enviar a mensagem o documento e o template */ sendMessage: async function(prompt) {
        let conversationId = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, attachedDocumentId = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, templateId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
        if (!prompt) throw new Error("Mensagem não pode ser vazia.");
        const url = "".concat(API_BASE_URL, "/api/chat/conversations");
        const requestBody = {
            prompt: prompt
        };
        if (conversationId) {
            requestBody.conversation_id = conversationId;
        }
        if (attachedDocumentId) {
            requestBody.input_document_id = attachedDocumentId;
        }
        if (templateId) {
            requestBody.template_id = templateId;
        }
        const data = await fetchWithToken(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        return data;
    },
    /**para lista os templates disponiveis **/ getTemplates: async ()=>{
        return fetchWithToken("".concat(API_BASE_URL, "/api/templates"));
    },
    /** rotas dos documentos */ uploadDocument: async (file)=>{
        if (!file) throw new Error("Arquivo não selecionado.");
        const formData = new FormData();
        formData.append("file", file);
        return fetchWithToken("".concat(API_BASE_URL, "/api/documents/upload"), {
            method: "POST",
            body: formData
        });
    },
    getDocuments: async ()=>{
        return fetchWithToken("".concat(API_BASE_URL, "/api/documents"));
    },
    getDocumentMetadata: async (gridfsFileId)=>{
        if (!gridfsFileId) throw new Error("ID do arquivo é obrigatório.");
        const token = getToken();
        const res = await fetch("".concat(API_BASE_URL, "/api/files/").concat(gridfsFileId), {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!res.ok) {
            const status = res.status;
            let errorText = "Erro HTTP: ".concat(status, ".");
            throw new Error("Falha ao baixar arquivo. ".concat(errorText));
        }
        return res.blob();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/auth/register/form/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/layout/AuthLayout.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../../../components/ui/Input.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/AuthButton.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/AuthSubtitle.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Form() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Limpar erro específico quando o usuário começar a digitar
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ""
                }));
        }
    }
    function validateForm() {
        const newErrors = {};
        // Validar nome
        if (!formData.name.trim()) {
            newErrors.name = "Nome completo é obrigatório";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Nome deve ter pelo menos 2 caracteres";
        }
        // Validar email
        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Formato de email inválido";
            }
        }
        // Validar senha
        if (!formData.password) {
            newErrors.password = "Senha é obrigatória";
        } else if (formData.password.length < 6) {
            newErrors.password = "Senha deve ter pelo menos 6 caracteres";
        }
        // Validar confirmação de senha
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirmação de senha é obrigatória";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Senhas não coincidem";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        setErrors({});
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].register(formData.name, formData.email, formData.password);
            router.push("/auth/register/success");
        } catch (error) {
            console.error("Erro no registro:", error);
            // Verificar se é erro de email já em uso
            if (error.message.includes("409") || error.message.includes("já está em uso")) {
                setErrors({
                    email: "Este email já está em uso. Tente outro email ou faça login."
                });
            } else {
                setErrors({
                    submit: error.message || "Erro ao criar conta. Tente novamente."
                });
            }
        } finally{
            setIsLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthLayout, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthSubtitle, {
                children: "Crie sua conta aqui"
            }, void 0, false, {
                fileName: "[project]/src/app/auth/register/form/page.js",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "w-full flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                name: "Nome",
                                type: "text",
                                placeholder: "Digite seu nome completo",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                    className: "text-black/25",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/register/form/page.js",
                                    lineNumber: 120,
                                    columnNumber: 19
                                }, void 0),
                                value: formData.name,
                                onChange: (e)=>handleInputChange({
                                        ...e,
                                        target: {
                                            ...e.target,
                                            name: "name"
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                name: "E-mail",
                                type: "email",
                                placeholder: "Digite o seu email",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                    className: "text-black/25",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/register/form/page.js",
                                    lineNumber: 139,
                                    columnNumber: 19
                                }, void 0),
                                value: formData.email,
                                onChange: (e)=>handleInputChange({
                                        ...e,
                                        target: {
                                            ...e.target,
                                            name: "email"
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                name: "Senha",
                                placeholder: "Digite sua senha",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLock"], {
                                    className: "text-black/25",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/register/form/page.js",
                                    lineNumber: 157,
                                    columnNumber: 19
                                }, void 0),
                                showPasswordToggle: true,
                                value: formData.password,
                                onChange: (e)=>handleInputChange({
                                        ...e,
                                        target: {
                                            ...e.target,
                                            name: "password"
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.password
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                name: "Confirmar senha",
                                placeholder: "Confirme sua senha",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLock"], {
                                    className: "text-black/25",
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/auth/register/form/page.js",
                                    lineNumber: 176,
                                    columnNumber: 19
                                }, void 0),
                                showPasswordToggle: true,
                                value: formData.confirmPassword,
                                onChange: (e)=>handleInputChange({
                                        ...e,
                                        target: {
                                            ...e.target,
                                            name: "confirmPassword"
                                        }
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-sm mt-1",
                                children: errors.confirmPassword
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/register/form/page.js",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    errors.submit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded",
                        children: errors.submit
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthButton, {
                        type: "submit",
                        disabled: isLoading,
                        children: isLoading ? "Cadastrando..." : "Cadastrar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/register/form/page.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm text-center mt-6",
                children: [
                    "Já possui conta?",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/auth/login",
                        className: "text-gray-600 hover:text-gray-800",
                        children: "Faça seu login aqui"
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/register/form/page.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/auth/register/form/page.js",
                lineNumber: 205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/auth/register/form/page.js",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(Form, "BrZAHbaN8TAHw+PEALDnMR3/ly0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Form;
var _c;
__turbopack_context__.k.register(_c, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b4131299._.js.map