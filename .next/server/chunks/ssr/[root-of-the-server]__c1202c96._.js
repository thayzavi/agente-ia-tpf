module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/SidebarItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function SidebarItem({ conversation, onRename, onDelete, onSelect, isActive }) {
    const [showMenu, setShowMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // referência do botão "⋮"
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // referência do dropdown (portal)
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
        onRename?.(conversation);
        closeMenu();
    };
    const handleDelete = (e)=>{
        e.stopPropagation();
        // console.log("clicou excluir", conversation);
        onDelete?.(conversation);
        closeMenu();
    };
    // Fecha ao clicar fora OU tocar (considera menuRef + buttonRef)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (e)=>{
            const target = e.target;
            // se não está nem no botão nem no menu, fechar
            if (buttonRef.current && !buttonRef.current.contains(target) && menuRef.current && !menuRef.current.contains(target)) {
                setShowMenu(false);
            }
        };
        const handleEscape = (e)=>{
            if (e.key === "Escape") setShowMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);
    // Atualiza posição se a janela rolar ou redimensionar enquanto o menu está aberto
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showMenu) return;
        const updatePos = ()=>{
            if (!buttonRef.current) return;
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.top + window.scrollY,
                left: rect.right + 12
            });
        };
        window.addEventListener("scroll", updatePos, {
            passive: true
        });
        window.addEventListener("resize", updatePos);
        return ()=>{
            window.removeEventListener("scroll", updatePos);
            window.removeEventListener("resize", updatePos);
        };
    }, [
        showMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sidebar-item ${isActive ? "active" : ""}`,
                onClick: ()=>onSelect?.(conversation),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sidebar-text",
                        children: conversation.title || "Chat sem nome"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SidebarItem.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dots-menu",
                        ref: buttonRef,
                        onClick: toggleMenu,
                        role: "button",
                        "aria-haspopup": "menu",
                        "aria-expanded": showMenu,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            showMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "floating-dropdown",
                ref: menuRef,
                style: {
                    position: "absolute",
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    zIndex: 99999
                },
                role: "menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        onClick: handleRename,
                        role: "menuitem",
                        tabIndex: 0,
                        onKeyDown: (e)=>(e.key === "Enter" || e.key === " ") && handleRename(e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiEdit"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        onClick: handleDelete,
                        role: "menuitem",
                        tabIndex: 0,
                        onKeyDown: (e)=>(e.key === "Enter" || e.key === " ") && handleDelete(e),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiTrash2"], {
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
}),
"[project]/src/components/Modal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function Modal({ type, chatTitle, onClose, onConfirm }) {
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(chatTitle || "");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isRename = type === "renomear";
    const isDelete = type === "excluir";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isRename) inputRef.current?.focus();
        const handleEsc = (e)=>{
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        return ()=>document.removeEventListener("keydown", handleEsc);
    }, [
        isRename,
        onClose
    ]);
    const handleConfirm = ()=>{
        if (isRename && !newTitle.trim()) return;
        onConfirm(isRename ? newTitle.trim() : undefined);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal modal-animate",
            role: "dialog",
            "aria-modal": "true",
            children: [
                isDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                isRename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Renomear chat:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.js",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "cancelar",
                            onClick: onClose,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Modal.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/DocumentLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocumentLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function DocumentLink({ documentId, filename }) {
    const handleDownload = async ()=>{
        try {
            const blob = await api.getDocumentFile(documentId);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            // Use o nome original do arquivo ou um fallback
            a.download = filename || `documento_${documentId}.docx`;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleDownload,
        className: "document-download-btn",
        style: {
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
            marginTop: "8px"
        },
        children: "📄 Baixar documento"
    }, void 0, false, {
        fileName: "[project]/src/components/DocumentLink.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/api/Api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        throw new Error(`Erro ${res.status}: ${text || res.statusText}`);
    }
    try {
        return res.json();
    } catch  {
        return null;
    }
};
// Função auxiliar para requisições com token
const fetchWithToken = async (url, options = {})=>{
    const token = getToken();
    const headers = {
        Authorization: `Bearer ${token}`,
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
        const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
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
        const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
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
        return fetchWithToken(`${API_BASE_URL}/api/auth/profile`);
    },
    /** rota das conversas*/ getConversations: async ()=>{
        return fetchWithToken(`${API_BASE_URL}/api/chat/conversations`);
    },
    getConversationHistory: async (conversationId)=>{
        if (!conversationId) throw new Error("ID da conversa é obrigatório.");
        return fetchWithToken(`${API_BASE_URL}/api/chat/conversations/${conversationId}`);
    },
    renameConversation: async (conversationId, newTitle)=>{
        if (!conversationId || !newTitle) throw new Error("ID e título são obrigatórios");
        const url = `${API_BASE_URL}/api/chat/conversations/${conversationId}/rename`;
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
        return fetchWithToken(`${API_BASE_URL}/api/chat/conversations/${conversationId}`, {
            method: "DELETE"
        });
    },
    /** Fiz uma logica para enviar a mensagem o documento*/ sendMessage: async (prompt, conversationId = null, attachedDocumentId = null)=>{
        if (!prompt) throw new Error("Mensagem não pode ser vazia.");
        const url = `${API_BASE_URL}/api/chat/conversations`;
        const requestBody = {
            prompt: prompt
        };
        if (conversationId) {
            requestBody.conversation_id = conversationId;
        }
        if (attachedDocumentId) {
            requestBody.input_document_id = attachedDocumentId;
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
    /** rotas dos documentos */ uploadDocument: async (file)=>{
        if (!file) throw new Error("Arquivo não selecionado.");
        const formData = new FormData();
        formData.append("file", file);
        return fetchWithToken(`${API_BASE_URL}/api/documents/upload`, {
            method: "POST",
            body: formData
        });
    },
    getDocumentFile: async (gridfsFileId)=>{
        if (!gridfsFileId) throw new Error("ID do arquivo é obrigatório.");
        const token = getToken();
        const res = await fetch(`${API_BASE_URL}/api/files/${gridfsFileId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!res.ok) {
            const status = res.status;
            throw new Error(`Falha ao baixar arquivo. Erro HTTP: ${status}`);
        }
        return res.blob();
    }
};
}),
"[project]/src/components/AddFileModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddFileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-ssr] (ecmascript)");
;
;
;
;
;
function AddFileModal({ onFileUploaded, onClose, activeConversation }) {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileUpload = async (file)=>{
        if (!file || !activeConversation) {
            setError("Selecione um arquivo e verifique a conversa ativa.");
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].uploadDocument(file);
            const documentId = data?.document?._id || data?._id;
            if (!documentId) {
                throw new Error("ID do documento não recebido da API.");
            }
            setUploadedFile({
                id: documentId,
                name: file.name,
                file: file
            });
            // Chama a função de callback com o ID e nome do arquivo
            if (onFileUploaded) {
                onFileUploaded(documentId, file.name);
            }
            onClose();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal add-file-modal modal-animate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Enviar Arquivo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close-modal-btn",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdOutlineClose"], {}, void 0, false, {
                                fileName: "[project]/src/components/AddFileModal.js",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddFileModal.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "error-message",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        !uploadedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "upload-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "modal-description",
                                    children: "Faça upload do arquivo que você deseja enviar (DOC, DOCX, XLSX, etc.)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `file-upload-label ${isLoading ? "disabled" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdDriveFolderUpload"], {
                                            className: "upload-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isLoading ? "Enviando..." : "Escolher Arquivo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            onChange: handleFileChange,
                                            disabled: isLoading,
                                            style: {
                                                display: "none"
                                            },
                                            accept: ".doc,.docx,.xlsx,.xls,.pdf,.txt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "supported-formats",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Formatos suportados: DOC, DOCX, XLSX, XLS, PDF, TXT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Prompt para melhor resposta : Use o “TEMPLATE_TPF.docx” e preencha cada campo com informações completas e detalhadas."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "uploaded-file-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdDescription"], {
                                    className: "file-icon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "file-details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "file-name",
                                            children: uploadedFile.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "file-status",
                                            children: "✓ Arquivo enviado com sucesso"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AddFileModal.js",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AddFileModal.js",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AddFileModal.js",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AddFileModal.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AddFileModal.js",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AddFileModal.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MenuPerfil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPerfil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function MenuPerfil({ onLogout, userEmail }) {
    const handleLogout = ()=>{
        if (typeof onLogout === "function") onLogout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "profile-menu",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "profile-info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "profile-option",
                onClick: handleLogout,
                type: "button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/File.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/FileAttachment.js
__turbopack_context__.s([
    "default",
    ()=>FileAttachment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
function FileAttachment({ documentId, fileName, onRemove, showRemove = true }) {
    const handleRemove = (e)=>{
        e.stopPropagation();
        onRemove?.();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "file",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "file-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdDescription"], {
                        className: "file-icon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/File.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "file-name",
                        title: fileName,
                        children: fileName || `Documento ${documentId?.substring(0, 8)}`
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
            showRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "remove-file-btn",
                onClick: handleRemove,
                title: "Remover arquivo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdClose"], {}, void 0, false, {
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
}),
"[project]/src/components/InputChat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Aqui onde funciona boa parte da lógica: enviar a mensagem e o arquivo
__turbopack_context__.s([
    "default",
    ()=>InputChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$File$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/File.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function InputChat({ activeConversation, onOpenAddFileModal, onMessageSent, attachedDocumentId, setAttachedDocumentId, attachedFileName, setAttachedFileName }) {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sendMessage = async ()=>{
        const userPrompt = message.trim();
        if (!activeConversation || !userPrompt && !attachedDocumentId || isSending) return;
        setIsSending(true);
        try {
            // Enviar mensagem do usuário
            onMessageSent?.({
                sender: "user",
                content: userPrompt || "Processar arquivo",
                id: crypto.randomUUID(),
                attachedDocumentId,
                attachedFileName
            });
            const conversationId = activeConversation?._id || activeConversation?.id;
            // Enviar para API
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].sendMessage(userPrompt || "Processar este arquivo", conversationId, attachedDocumentId);
            // Limpar anexos após envio
            setAttachedDocumentId(null);
            setAttachedFileName(null);
            // Mensagem de resposta do bot
            onMessageSent?.({
                sender: "bot",
                content: data?.message_content || data?.content || "Tudo pronto! Clique na conversa no histórico à esquerda para ver a resposta completa.",
                id: crypto.randomUUID(),
                generated_document_id: data?.document_id
            });
        } catch (err) {
            console.error("Erro ao enviar mensagem:", err);
            onMessageSent?.({
                sender: "bot",
                content: "Erro de conexão ou servidor. Tente novamente.",
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
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };
    const getPlaceholderText = ()=>{
        if (attachedDocumentId) return "Digite suas instruções para o documento...";
        if (isSending) return "Aguardando resposta...";
        return "Digite sua mensagem...";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-input-container",
        children: [
            attachedDocumentId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "attachment-preview",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$File$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    documentId: attachedDocumentId,
                    fileName: attachedFileName,
                    onRemove: handleRemoveAttachment
                }, void 0, false, {
                    fileName: "[project]/src/components/InputChat.js",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/InputChat.js",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `chat-input ${attachedDocumentId ? "has-attachment" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "add-file-btn",
                        onClick: onOpenAddFileModal,
                        disabled: isSending,
                        title: "Anexar arquivo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiPlus"], {
                            className: attachedDocumentId ? "attached-icon" : ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/InputChat.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: getPlaceholderText(),
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        onKeyDown: handleKeyDown,
                        disabled: isSending
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "send-btn",
                        onClick: sendMessage,
                        disabled: isSending || !message.trim() && !attachedDocumentId,
                        title: "Enviar mensagem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSend"], {}, void 0, false, {
                            fileName: "[project]/src/components/InputChat.js",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InputChat.js",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InputChat.js",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InputChat.js",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/chat/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidebarItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SidebarItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Modal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocumentLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DocumentLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddFileModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddFileModal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuPerfil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MenuPerfil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InputChat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InputChat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/Api.js [app-ssr] (ecmascript)");
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
;
function ChatPage() {
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeConversation, setActiveConversation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "Carregando...",
        email: "carregando@email.com"
    });
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showMenuPerfil, setShowMenuPerfil] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddFileModal, setShowAddFileModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados para gerenciar os anexos
    const [attachedDocumentId, setAttachedDocumentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [attachedFileName, setAttachedFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const chatContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Carrega conversas e usuário ao abrir
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const load = async ()=>{
            try {
                const token = localStorage.getItem("token");
                if (!token) return;
                const [convData, userData] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getConversations(),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getProfile()
                ]);
                setConversations(convData);
                setUser({
                    name: userData.name,
                    email: userData.email
                });
                if (convData.length) selectConversation(convData[0]);
                else {
                    const newConvData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].sendMessage("Olá, TPF-AI!");
                    setConversations((prev)=>[
                            newConvData.conversation,
                            ...prev
                        ]);
                    selectConversation(newConvData.conversation);
                }
            } catch (err) {
                console.error("Erro ao carregar chat:", err.message);
            }
        };
        load();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (chatContainerRef.current) chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [
        messages
    ]);
    // Função para selecionar uma conversa
    const selectConversation = async (conversation)=>{
        setActiveConversation(conversation);
        setAttachedDocumentId(null);
        setAttachedFileName(null);
        try {
            const history = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getConversationHistory(conversation._id || conversation.id);
            setMessages(history || []);
        } catch  {
            setMessages([]);
        }
    };
    // Funções de renomear e excluir
    const handleRenameConversation = async (conversationId, newTitle)=>{
        if (!conversationId || !newTitle) return alert("Título obrigatório");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].renameConversation(conversationId, newTitle);
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].deleteConversation(conversationId);
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
    const handleFileUploaded = (documentId, fileName)=>{
        setAttachedDocumentId(documentId);
        setAttachedFileName(fileName);
        setShowAddFileModal(false);
        alert(`Arquivo "${fileName}" anexado! Digite suas instruções.`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chat-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "logo",
                        children: [
                            "TPF",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "-AI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 125,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "new-chat",
                        onClick: async ()=>{
                            try {
                                setActiveConversation(null);
                                setMessages([]);
                                setAttachedDocumentId(null);
                                setAttachedFileName(null);
                                const apiResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].sendMessage("Novo chat iniciado");
                                if (!apiResponse || !apiResponse.conversation_id) {
                                    throw new Error("API não retornou o ID da nova conversa.");
                                }
                                const newConvList = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$Api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].getConversations();
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
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        children: "Histórico"
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-list",
                        children: conversations.filter((conv)=>conv && conv._id).map((conv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SidebarItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "user-profile",
                        onClick: ()=>setShowMenuPerfil(!showMenuPerfil),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-icon-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserCircle"], {
                                    size: 32,
                                    color: "#000000ff"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/chat/page.js",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            showMenuPerfil && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuPerfil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                onLogout: onLogout,
                                userEmail: user.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 185,
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
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "chat-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "chat-messages",
                        ref: chatContainerRef,
                        children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `message-bubble ${msg.role === "user" || msg.sender === "user" ? "user" : "bot"}`,
                                children: [
                                    msg.content,
                                    msg.document_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DocumentLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        documentId: msg.document_id
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/chat/page.js",
                                        lineNumber: 200,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, msg._id || msg.id, true, {
                                fileName: "[project]/src/app/chat/page.js",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InputChat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        activeConversation: activeConversation,
                        onMessageSent: handleNewMessage,
                        onOpenAddFileModal: ()=>setShowAddFileModal(true),
                        attachedDocumentId: attachedDocumentId,
                        setAttachedDocumentId: setAttachedDocumentId,
                        attachedFileName: attachedFileName,
                        setAttachedFileName: setAttachedFileName
                    }, void 0, false, {
                        fileName: "[project]/src/app/chat/page.js",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/chat/page.js",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            modal && modal.chat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                type: modal.type,
                chatTitle: modal.chat.title,
                onClose: closeModal,
                onConfirm: modal.type === "renomear" ? (newTitle)=>handleRenameConversation(modal.chat._id, newTitle) : ()=>handleDeleteConversation(modal.chat._id)
            }, void 0, false, {
                fileName: "[project]/src/app/chat/page.js",
                lineNumber: 218,
                columnNumber: 9
            }, this),
            showAddFileModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddFileModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c1202c96._.js.map