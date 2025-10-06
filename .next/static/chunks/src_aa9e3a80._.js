(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SidebarItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SidebarItem(param) {
    let { conversation, onRename, onDelete, onSelect, isActive } = param;
    _s();
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // referência do botão "⋮"
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // referência do dropdown (portal)
    const openMenu = (e)=>{
        e.stopPropagation();
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.top + window.scrollY,
                left: rect.right + 12
            });
        }
        setShowMenu(true);
    };
    const closeMenu = ()=>setShowMenu(false);
    const toggleMenu = (e)=>{
        e.stopPropagation();
        if (showMenu) closeMenu();
        else openMenu(e);
    };
    const handleRename = (e)=>{
        e.stopPropagation();
        // opcional: console.log para debug
        // console.log("clicou renomear", conversation);
        onRename === null || onRename === void 0 ? void 0 : onRename(conversation);
        closeMenu();
    };
    const handleDelete = (e)=>{
        e.stopPropagation();
        // console.log("clicou excluir", conversation);
        onDelete === null || onDelete === void 0 ? void 0 : onDelete(conversation);
        closeMenu();
    };
    // Fecha ao clicar fora OU tocar (considera menuRef + buttonRef)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarItem.useEffect": ()=>{
            const handleClickOutside = {
                "SidebarItem.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    // se não está nem no botão nem no menu, fechar
                    if (buttonRef.current && !buttonRef.current.contains(target) && menuRef.current && !menuRef.current.contains(target)) {
                        setShowMenu(false);
                    }
                }
            }["SidebarItem.useEffect.handleClickOutside"];
            const handleEscape = {
                "SidebarItem.useEffect.handleEscape": (e)=>{
                    if (e.key === "Escape") setShowMenu(false);
                }
            }["SidebarItem.useEffect.handleEscape"];
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
            return ({
                "SidebarItem.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("touchstart", handleClickOutside);
                    document.removeEventListener("keydown", handleEscape);
                }
            })["SidebarItem.useEffect"];
        }
    }["SidebarItem.useEffect"], []);
    // Atualiza posição se a janela rolar ou redimensionar enquanto o menu está aberto
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarItem.useEffect": ()=>{
            if (!showMenu) return;
            const updatePos = {
                "SidebarItem.useEffect.updatePos": ()=>{
                    if (!buttonRef.current) return;
                    const rect = buttonRef.current.getBoundingClientRect();
                    setPosition({
                        top: rect.top + window.scrollY,
                        left: rect.right + 12
                    });
                }
            }["SidebarItem.useEffect.updatePos"];
            window.addEventListener("scroll", updatePos, {
                passive: true
            });
            window.addEventListener("resize", updatePos);
            return ({
                "SidebarItem.useEffect": ()=>{
                    window.removeEventListener("scroll", updatePos);
                    window.removeEventListener("resize", updatePos);
                }
            })["SidebarItem.useEffect"];
        }
    }["SidebarItem.useEffect"], [
        showMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sidebar-item ".concat(isActive ? "active" : ""),
                onClick: ()=>onSelect === null || onSelect === void 0 ? void 0 : onSelect(conversation),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sidebar-text",
                        children: conversation.title || "Chat sem nome"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SidebarItem.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dots-menu",
                        ref: buttonRef,
                        onClick: toggleMenu,
                        role: "button",
                        "aria-haspopup": "menu",
                        "aria-expanded": showMenu,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "dots",
                            children: "⋮"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SidebarItem.js",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SidebarItem.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SidebarItem.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "floating-dropdown",
                ref: menuRef,
                style: {
                    position: "absolute",
                    top: "".concat(position.top, "px"),
                    left: "".concat(position.left, "px"),
                    zIndex: 99999
                },
                role: "menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        onClick: handleRename,
                        role: "menuitem",
                        tabIndex: 0,
                        onKeyDown: (e)=>(e.key === "Enter" || e.key === " ") && handleRename(e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                className: "icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SidebarItem.js",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this),
                            " Renomear"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SidebarItem.js",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        onClick: handleDelete,
                        role: "menuitem",
                        tabIndex: 0,
                        onKeyDown: (e)=>(e.key === "Enter" || e.key === " ") && handleDelete(e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                className: "icon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SidebarItem.js",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this),
                            " Excluir"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SidebarItem.js",
                        lineNumber: 148,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SidebarItem.js",
                lineNumber: 127,
                columnNumber: 11
            }, this), document.body)
        ]
    }, void 0, true);
}
_s(SidebarItem, "lOtA19A3vkcg/fBOrzXdBLbpo08=");
_c = SidebarItem;
var _c;
__turbopack_context__.k.register(_c, "SidebarItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Modal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function Modal(param) {
    let { type, chatTitle, onClose, onConfirm } = param;
    _s();
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(chatTitle || "");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isRename = type === "renomear";
    const isDelete = type === "excluir";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            var _inputRef_current;
            if (isRename) (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            const handleEsc = {
                "Modal.useEffect.handleEsc": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["Modal.useEffect.handleEsc"];
            document.addEventListener("keydown", handleEsc);
            return ({
                "Modal.useEffect": ()=>document.removeEventListener("keydown", handleEsc)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isRename,
        onClose
    ]);
    const handleConfirm = ()=>{
        if (isRename && !newTitle.trim()) return;
        onConfirm(isRename ? newTitle.trim() : undefined);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal modal-animate",
            role: "dialog",
            "aria-modal": "true",
            children: [
                isDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        'Deseja realmente excluir o chat "',
                        chatTitle,
                        '" ? Essa ação é irreversível e as mensagens desse chat serão apagadas'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.js",
                    lineNumber: 28,
                    columnNumber: 22
                }, this),
                isRename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Renomear chat:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.js",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            type: "text",
                            value: newTitle,
                            onChange: (e)=>setNewTitle(e.target.value),
                            onKeyPress: (e)=>e.key === "Enter" && handleConfirm(),
                            maxLength: 50
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.js",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "cancelar",
                            onClick: onClose,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "confirm",
                            onClick: ()=>onConfirm(isRename ? newTitle.trim() : undefined),
                            children: isDelete ? "Confirmar Exclusão" : "Salvar Novo Nome"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.js",
                            lineNumber: 45,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Modal.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Modal.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Modal.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Modal, "273Tne3OF4wc4+TbraEnert/jf8=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/DocumentLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
/Area para baixar /;
function DocumentLink(param) {
    let { documentId } = param;
    _s();
    const [gridfsId, setGridfsId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Documento Gerado");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentLink.useEffect": ()=>{
            const fetchFileMetadata = {
                "DocumentLink.useEffect.fetchFileMetadata": async ()=>{
                    if (!documentId) return;
                    try {
                        const metadata = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getDocumentMetadata(documentId);
                        setGridfsId(metadata.gridfs_file_id);
                        setFileName(metadata.filename || "Documento Gerado");
                    } catch (error) {
                        console.error("Erro ao buscar metadados do arquivo:", error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["DocumentLink.useEffect.fetchFileMetadata"];
            fetchFileMetadata();
        }
    }["DocumentLink.useEffect"], [
        documentId
    ]);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: "Carregando link do documento..."
        }, void 0, false, {
            fileName: "[project]/src/components/DocumentLink.js",
            lineNumber: 29,
            columnNumber: 16
        }, this);
    }
    if (!gridfsId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: "Link de download indisponível."
        }, void 0, false, {
            fileName: "[project]/src/components/DocumentLink.js",
            lineNumber: 33,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].API_BASE_URL, "/api/files/").concat(gridfsId),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "document-download-link",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {}, void 0, false, {
                fileName: "[project]/src/components/DocumentLink.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            " Baixar: ",
            fileName
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DocumentLink.js",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(DocumentLink, "JgM6MBhYPbEhySwP2Da9IuGUFnQ=");
_c = DocumentLink;
var _c;
__turbopack_context__.k.register(_c, "DocumentLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddFileModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddFileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function AddFileModal(param) {
    let { onFileUploaded, onClose, activeConversation } = param;
    _s();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddFileModal.useEffect": ()=>{
            if (currentStep === 2) {
                loadTemplates();
            }
        }
    }["AddFileModal.useEffect"], [
        currentStep
    ]);
    const loadTemplates = async ()=>{
        try {
            setIsLoading(true);
            const templatesData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getTemplates();
            setTemplates(templatesData || []);
        } catch (err) {
            console.error("Erro ao carregar templates:", err);
            setError("Erro ao carregar templates. Tente novamente.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleFileUpload = async (file)=>{
        if (!file || !activeConversation) {
            setError("Selecione um arquivo e verifique a conversa ativa.");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            var _data_document;
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].uploadDocument(file);
            const documentId = (data === null || data === void 0 ? void 0 : (_data_document = data.document) === null || _data_document === void 0 ? void 0 : _data_document._id) || (data === null || data === void 0 ? void 0 : data._id);
            if (!documentId) {
                throw new Error("ID do documento não recebido da API.");
            }
            setUploadedFile({
                id: documentId,
                name: file.name,
                file: file
            });
            // Avançar para seleção de template
            setCurrentStep(2);
        } catch (err) {
            console.error("Erro no upload do arquivo:", err);
            setError(err.message || "Erro ao enviar arquivo.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };
    const handleTemplateSelect = async (template)=>{
        if (!uploadedFile) return;
        try {
            // Aqui você envia tanto o documento quanto o template 
            const processingData = {
                documentId: uploadedFile.id,
                templateId: template._id,
                fileName: uploadedFile.name,
                templateName: template.name
            };
            console.log("Processando:", processingData);
            // Chama a função de callback com ambos os IDs
            if (onFileUploaded) {
                onFileUploaded(uploadedFile.id, uploadedFile.name, template._id);
            }
            onClose();
        } catch (err) {
            console.error("Erro ao processar:", err);
            setError("Erro ao selecionar template.");
        }
    };
    const goBackToUpload = ()=>{
        setCurrentStep(1);
        setUploadedFile(null);
        setSelectedTemplate(null);
        setError(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal add-file-modal modal-animate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: currentStep === 1 ? "Enviar Arquivo" : "Selecionar Template"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close-modal-btn",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineClose"], {}, void 0, false, {
                                fileName: "[project]/src/components/AddFileModal.js",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddFileModal.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-steps",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "step-indicator",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "step ".concat(currentStep >= 1 ? 'active' : ''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddFileModal.js",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    "Upload"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AddFileModal.js",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "step-connector"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddFileModal.js",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "step ".concat(currentStep >= 2 ? 'active' : ''),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddFileModal.js",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    "Template"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AddFileModal.js",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddFileModal.js",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AddFileModal.js",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "error-message",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this),
                        currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "upload-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-description",
                                    children: "Faça upload do arquivo que você deseja processar (DOC, DOCX, XLSX, etc.)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "file-upload-label ".concat(isLoading ? "disabled" : ""),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDriveFolderUpload"], {
                                            className: "upload-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isLoading ? "Enviando..." : "Escolher Arquivo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            onChange: handleFileChange,
                                            disabled: isLoading,
                                            style: {
                                                display: "none"
                                            },
                                            accept: ".doc,.docx,.xlsx,.xls,.pdf,.txt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "supported-formats",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Formatos suportados: DOC, DOCX, XLSX, XLS, PDF, TXT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddFileModal.js",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        currentStep === 2 && uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "templates-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "uploaded-file-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDescription"], {
                                            className: "file-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "file-details",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "file-name",
                                                    children: uploadedFile.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddFileModal.js",
                                                    lineNumber: 168,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "file-status",
                                                    children: "✓ Arquivo enviado com sucesso"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddFileModal.js",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "change-file-btn",
                                            onClick: goBackToUpload,
                                            children: "Alterar"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-description",
                                    children: "Selecione um template para processar o arquivo:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loading-templates",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Carregando templates..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddFileModal.js",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "templates-list",
                                    children: [
                                        templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "template_name ".concat((selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate._id) === template._id ? "selected" : ""),
                                                onClick: ()=>handleTemplateSelect(template),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDescription"], {
                                                        className: "template-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddFileModal.js",
                                                        lineNumber: 192,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "template-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "template-name",
                                                                children: template.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AddFileModal.js",
                                                                lineNumber: 194,
                                                                columnNumber: 25
                                                            }, this),
                                                            template.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "template-description",
                                                                children: template.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AddFileModal.js",
                                                                lineNumber: 198,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AddFileModal.js",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, template._id, true, {
                                                fileName: "[project]/src/components/AddFileModal.js",
                                                lineNumber: 187,
                                                columnNumber: 21
                                            }, this)),
                                        templates.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "no-templates",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDescription"], {
                                                    className: "no-templates-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddFileModal.js",
                                                    lineNumber: 208,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Nenhum template disponível"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddFileModal.js",
                                                    lineNumber: 209,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "Entre em contato com o administrador para adicionar templates."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AddFileModal.js",
                                                    lineNumber: 210,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 207,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddFileModal.js",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AddFileModal.js",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AddFileModal.js",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(AddFileModal, "Qamcnfcgm/go2S+BHxGj/4Arw6A=");
_c = AddFileModal;
var _c;
__turbopack_context__.k.register(_c, "AddFileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MenuPerfil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPerfil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
function MenuPerfil(param) {
    let { onLogout, userEmail } = param;
    const handleLogout = ()=>{
        if (typeof onLogout === "function") onLogout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "profile-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: userEmail
                }, void 0, false, {
                    fileName: "[project]/src/components/MenuPerfil.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MenuPerfil.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "profile-option",
                onClick: handleLogout,
                type: "button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Sair"
                }, void 0, false, {
                    fileName: "[project]/src/components/MenuPerfil.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MenuPerfil.js",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MenuPerfil.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = MenuPerfil;
var _c;
__turbopack_context__.k.register(_c, "MenuPerfil");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/File.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/FileAttachment.js
__turbopack_context__.s([
    "default",
    ()=>FileAttachment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
;
;
;
;
function FileAttachment(param) {
    let { documentId, fileName, onRemove, showRemove = true } = param;
    const handleRemove = (e)=>{
        e.stopPropagation();
        onRemove === null || onRemove === void 0 ? void 0 : onRemove();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "file",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "file-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDescription"], {
                        className: "file-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/File.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "file-name",
                        title: fileName,
                        children: fileName || "Documento ".concat(documentId === null || documentId === void 0 ? void 0 : documentId.substring(0, 8))
                    }, void 0, false, {
                        fileName: "[project]/src/components/File.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/File.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            showRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "remove-file-btn",
                onClick: handleRemove,
                title: "Remover arquivo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdClose"], {}, void 0, false, {
                    fileName: "[project]/src/components/File.js",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/File.js",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/File.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = FileAttachment;
var _c;
__turbopack_context__.k.register(_c, "FileAttachment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InputChat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Aqui onde funciona boa parte da logica, enivar a mensagem, o arqui e o template
__turbopack_context__.s([
    "default",
    ()=>InputChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$File$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/File.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function InputChat(param) {
    let { activeConversation, onOpenAddFileModal, onMessageSent, attachedDocumentId, setAttachedDocumentId, attachedFileName, setAttachedFileName, attachedTemplateId, setAttachedTemplateId } = param;
    _s();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sendMessage = async ()=>{
        const userPrompt = message.trim();
        if (!activeConversation || !userPrompt && !attachedDocumentId || isSending) return;
        setIsSending(true);
        try {
            // Enviar mensagem do usuário com template se houver
            onMessageSent === null || onMessageSent === void 0 ? void 0 : onMessageSent({
                sender: "user",
                content: userPrompt || "Processar arquivo com template",
                id: crypto.randomUUID(),
                attachedDocumentId: attachedDocumentId,
                attachedFileName: attachedFileName,
                templateId: attachedTemplateId
            });
            const conversationId = (activeConversation === null || activeConversation === void 0 ? void 0 : activeConversation._id) || (activeConversation === null || activeConversation === void 0 ? void 0 : activeConversation.id);
            // Enviar para API com templateId
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sendMessage(userPrompt || "Processar este arquivo com o template selecionado", conversationId, attachedDocumentId, attachedTemplateId);
            // Limpar anexos após envio
            setAttachedDocumentId(null);
            setAttachedFileName(null);
            setAttachedTemplateId(null);
            onMessageSent === null || onMessageSent === void 0 ? void 0 : onMessageSent({
                sender: "bot",
                content: (data === null || data === void 0 ? void 0 : data.message_content) || (data === null || data === void 0 ? void 0 : data.content) || "Tudo pronto! Clique na conversa no histórico à esquerda para ver a resposta completa.",
                id: crypto.randomUUID(),
                generated_document_id: data === null || data === void 0 ? void 0 : data.document_id
            });
        } catch (err) {
            console.error("Erro ao enviar mensagem:", err);
            const errorMessage = "Erro de conexão ou servidor. Tente novamente.";
            onMessageSent === null || onMessageSent === void 0 ? void 0 : onMessageSent({
                sender: "bot",
                content: errorMessage,
                id: crypto.randomUUID()
            });
        } finally{
            setIsSending(false);
            setMessage("");
        }
    };
    const handleRemoveAttachment = ()=>{
        setAttachedDocumentId(null);
        setAttachedFileName(null);
        setAttachedTemplateId(null);
    };
    const handleRemoveTemplateOnly = ()=>{
        setAttachedTemplateId(null);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const getPlaceholderText = ()=>{
        if (attachedDocumentId && attachedTemplateId) return "Digite instruções para processar o arquivo com o template...";
        if (attachedDocumentId) return "Digite suas instruções para o documento...";
        if (isSending) return "Aguardando resposta...";
        return "Digite sua mensagem...";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-input-container",
        children: [
            (attachedDocumentId || attachedTemplateId) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "attachment-preview",
                children: [
                    attachedDocumentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$File$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        documentId: attachedDocumentId,
                        fileName: attachedFileName,
                        onRemove: handleRemoveAttachment
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this),
                    attachedTemplateId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "template-attachment",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "file-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "file-icon",
                                        children: "📄"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InputChat.js",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "file-name",
                                        children: "Template selecionado"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InputChat.js",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InputChat.js",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "remove-file-btn",
                                onClick: attachedDocumentId ? handleRemoveTemplateOnly : handleRemoveAttachment,
                                title: "Remover template",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InputChat.js",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InputChat.js",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "chat-input ".concat(attachedDocumentId || attachedTemplateId ? 'has-attachment' : ''),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "add-file-btn",
                        onClick: onOpenAddFileModal,
                        disabled: isSending,
                        title: "Anexar arquivo e template",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
                            className: attachedDocumentId ? 'attached-icon' : ''
                        }, void 0, false, {
                            fileName: "[project]/src/components/InputChat.js",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: getPlaceholderText(),
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        onKeyDown: handleKeyDown,
                        disabled: isSending
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "send-btn",
                        onClick: sendMessage,
                        disabled: isSending || !message.trim() && !attachedDocumentId,
                        title: "Enviar mensagem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSend"], {}, void 0, false, {
                            fileName: "[project]/src/components/InputChat.js",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InputChat.js",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InputChat.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(InputChat, "Rbq0xRWH7iSAh0981AAkFEsJaWw=");
_c = InputChat;
var _c;
__turbopack_context__.k.register(_c, "InputChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/chat/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidebarItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SidebarItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocumentLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DocumentLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddFileModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddFileModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuPerfil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MenuPerfil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InputChat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InputChat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
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
;
;
function ChatPage() {
    _s();
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeConversation, setActiveConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "Carregando...",
        email: "carregando@email.com"
    });
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMenuPerfil, setShowMenuPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddFileModal, setShowAddFileModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados para gerenciar os anexos
    const [attachedDocumentId, setAttachedDocumentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attachedFileName, setAttachedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attachedTemplateId, setAttachedTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // ← ESTADO ADICIONADO
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Carrega conversas e usuário ao abrir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            const load = {
                "ChatPage.useEffect.load": async ()=>{
                    try {
                        const token = localStorage.getItem("token");
                        if (!token) return;
                        const [convData, userData] = await Promise.all([
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getConversations(),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getProfile()
                        ]);
                        setConversations(convData);
                        setUser({
                            name: userData.name,
                            email: userData.email
                        });
                        if (convData.length) selectConversation(convData[0]);
                        else {
                            const newConvData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sendMessage("Olá, TPF-AI!");
                            setConversations({
                                "ChatPage.useEffect.load": (prev)=>[
                                        newConvData.conversation,
                                        ...prev
                                    ]
                            }["ChatPage.useEffect.load"]);
                            selectConversation(newConvData.conversation);
                        }
                    } catch (err) {
                        console.error("Erro ao carregar chat:", err.message);
                    }
                }
            }["ChatPage.useEffect.load"];
            load();
        }
    }["ChatPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatPage.useEffect": ()=>{
            if (chatContainerRef.current) chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }["ChatPage.useEffect"], [
        messages
    ]);
    // Função para selecionar uma conversa
    const selectConversation = async (conversation)=>{
        setActiveConversation(conversation);
        setAttachedDocumentId(null);
        setAttachedFileName(null);
        setAttachedTemplateId(null);
        try {
            const history = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getConversationHistory(conversation._id || conversation.id);
            setMessages(history || []);
        } catch (e) {
            setMessages([]);
        }
    };
    // Funções de renomear e excluir
    const handleRenameConversation = async (conversationId, newTitle)=>{
        if (!conversationId || !newTitle) return alert("Título obrigatório");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].renameConversation(conversationId, newTitle);
            setConversations((prev)=>prev.map((c)=>c._id === conversationId ? {
                        ...c,
                        title: newTitle
                    } : c));
            closeModal();
        } catch (err) {
            alert("Erro ao renomear: " + err.message);
        }
    };
    const handleDeleteConversation = async (conversationId)=>{
        if (!conversationId) return alert("ID da conversa não encontrado");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteConversation(conversationId);
            const newConversations = conversations.filter((c)=>c._id !== conversationId);
            setConversations(newConversations);
            if (activeConversation && activeConversation._id === conversationId) {
                selectConversation(newConversations[0] || null);
            }
            closeModal();
        } catch (err) {
            alert("Erro ao excluir: " + err.message);
        }
    };
    const handleNewMessage = (msg)=>setMessages((prev)=>[
                ...prev,
                msg
            ]);
    const closeModal = ()=>setModal(null);
    const onLogout = ()=>window.location.href = "/auth/login";
    const handleFileUploaded = (documentId, fileName, templateId)=>{
        setAttachedDocumentId(documentId);
        setAttachedFileName(fileName);
        setAttachedTemplateId(templateId);
        setShowAddFileModal(false);
        alert('Arquivo "'.concat(fileName, '" e template selecionado! Digite suas instruções.'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "logo",
                        children: [
                            "TPF",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "-AI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 125,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "new-chat",
                        onClick: async ()=>{
                            try {
                                setActiveConversation(null);
                                setMessages([]);
                                setAttachedDocumentId(null);
                                setAttachedFileName(null);
                                setAttachedTemplateId(null);
                                const apiResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].sendMessage("Novo chat iniciado");
                                if (!apiResponse || !apiResponse.conversation_id) {
                                    throw new Error("API não retornou o ID da nova conversa.");
                                }
                                const newConvList = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getConversations();
                                const newConversation = newConvList.find((c)=>c._id === apiResponse.conversation_id) || newConvList[0];
                                if (!newConversation) {
                                    throw new Error("Falha ao recuperar os dados da nova conversa.");
                                }
                                setConversations(newConvList);
                                selectConversation(newConversation);
                            } catch (err) {
                                console.error("Erro ao criar novo chat:", err.message);
                            }
                        },
                        children: "+ Novo Chat"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Histórico"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-list",
                        children: conversations.filter((conv)=>conv && conv._id).map((conv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidebarItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                conversation: conv,
                                onRename: (conversation)=>setModal({
                                        type: "renomear",
                                        chat: conversation
                                    }),
                                onDelete: (conversation)=>setModal({
                                        type: "excluir",
                                        chat: conversation
                                    }),
                                onSelect: selectConversation,
                                isActive: activeConversation && activeConversation._id === conv._id
                            }, conv._id, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-profile",
                        onClick: ()=>setShowMenuPerfil(!showMenuPerfil),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-icon-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                                    size: 32,
                                    color: "#000000ff"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.js",
                                    lineNumber: 181,
                                    columnNumber: 48
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            showMenuPerfil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuPerfil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onLogout: onLogout,
                                userEmail: user.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 183,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chat/page.js",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "chat-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-messages",
                        ref: chatContainerRef,
                        children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "message-bubble ".concat(msg.role === "user" || msg.sender === "user" ? "user" : "bot"),
                                children: [
                                    msg.content,
                                    msg.document_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocumentLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        documentId: msg.document_id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chat/page.js",
                                        lineNumber: 198,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, msg._id || msg.id, true, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 189,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InputChat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        activeConversation: activeConversation,
                        onMessageSent: handleNewMessage,
                        onOpenAddFileModal: ()=>setShowAddFileModal(true),
                        attachedDocumentId: attachedDocumentId,
                        setAttachedDocumentId: setAttachedDocumentId,
                        attachedFileName: attachedFileName,
                        setAttachedFileName: setAttachedFileName,
                        attachedTemplateId: attachedTemplateId,
                        setAttachedTemplateId: setAttachedTemplateId
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chat/page.js",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            modal && modal.chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: modal.type,
                chatTitle: modal.chat.title,
                onClose: closeModal,
                onConfirm: modal.type === "renomear" ? (newTitle)=>handleRenameConversation(modal.chat._id, newTitle) : ()=>handleDeleteConversation(modal.chat._id)
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.js",
                lineNumber: 218,
                columnNumber: 9
            }, this),
            showAddFileModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddFileModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowAddFileModal(false),
                activeConversation: activeConversation,
                onFileUploaded: handleFileUploaded
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.js",
                lineNumber: 231,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/chat/page.js",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(ChatPage, "SQ6GzjinsqZ8q8JZIZnAyC3bZ6k=");
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_aa9e3a80._.js.map