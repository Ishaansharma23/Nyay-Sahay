(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Nyay-Sahay/frontend/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Nyay-Sahay/frontend/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:12:9",
        "data-orchids-name": "DropdownMenuPrimitive.Root",
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:19:4",
        "data-orchids-name": "DropdownMenuPrimitive.Portal",
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:27:4",
        "data-orchids-name": "DropdownMenuPrimitive.Trigger",
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent(param) {
    let { className, sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:40:4",
        "data-orchids-name": "DropdownMenuPrimitive.Portal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-orchids-id": "src/components/ui/dropdown-menu.tsx:41:6",
            "data-orchids-name": "DropdownMenuPrimitive.Content",
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:58:4",
        "data-orchids-name": "DropdownMenuPrimitive.Group",
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem(param) {
    let { className, inset, variant = "default", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:72:4",
        "data-orchids-name": "DropdownMenuPrimitive.Item",
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem(param) {
    let { className, children, checked, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:92:4",
        "data-orchids-name": "DropdownMenuPrimitive.CheckboxItem",
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-orchids-id": "src/components/ui/dropdown-menu.tsx:101:6",
                "data-orchids-name": "span",
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    "data-orchids-id": "src/components/ui/dropdown-menu.tsx:102:8",
                    "data-orchids-name": "DropdownMenuPrimitive.ItemIndicator",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:103:10",
                        "data-orchids-name": "CheckIcon",
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:115:4",
        "data-orchids-name": "DropdownMenuPrimitive.RadioGroup",
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:128:4",
        "data-orchids-name": "DropdownMenuPrimitive.RadioItem",
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-orchids-id": "src/components/ui/dropdown-menu.tsx:136:6",
                "data-orchids-name": "span",
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    "data-orchids-id": "src/components/ui/dropdown-menu.tsx:137:8",
                    "data-orchids-name": "DropdownMenuPrimitive.ItemIndicator",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:138:10",
                        "data-orchids-name": "CircleIcon",
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel(param) {
    let { className, inset, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:154:4",
        "data-orchids-name": "DropdownMenuPrimitive.Label",
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:171:4",
        "data-orchids-name": "DropdownMenuPrimitive.Separator",
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:184:4",
        "data-orchids-name": "span",
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:198:9",
        "data-orchids-name": "DropdownMenuPrimitive.Sub",
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger(param) {
    let { className, inset, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:210:4",
        "data-orchids-name": "DropdownMenuPrimitive.SubTrigger",
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                "data-orchids-id": "src/components/ui/dropdown-menu.tsx:220:6",
                "data-orchids-name": "ChevronRightIcon",
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-orchids-id": "src/components/ui/dropdown-menu.tsx:230:4",
        "data-orchids-name": "DropdownMenuPrimitive.SubContent",
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sheet(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:10:9",
        "data-orchids-name": "SheetPrimitive.Root",
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:16:9",
        "data-orchids-name": "SheetPrimitive.Trigger",
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:22:9",
        "data-orchids-name": "SheetPrimitive.Close",
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:28:9",
        "data-orchids-name": "SheetPrimitive.Portal",
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:36:4",
        "data-orchids-name": "SheetPrimitive.Overlay",
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent(param) {
    let { className, children, side = "right", ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        "data-orchids-id": "src/components/ui/sheet.tsx:56:4",
        "data-orchids-name": "SheetPortal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {
                "data-orchids-id": "src/components/ui/sheet.tsx:57:6",
                "data-orchids-name": "SheetOverlay"
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-orchids-id": "src/components/ui/sheet.tsx:58:6",
                "data-orchids-name": "SheetPrimitive.Content",
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-orchids-id": "src/components/ui/sheet.tsx:75:8",
                        "data-orchids-name": "SheetPrimitive.Close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                "data-orchids-id": "src/components/ui/sheet.tsx:76:10",
                                "data-orchids-name": "XIcon",
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/components/ui/sheet.tsx:77:10",
                                "data-orchids-name": "span",
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/sheet.tsx:86:4",
        "data-orchids-name": "div",
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/sheet.tsx:96:4",
        "data-orchids-name": "div",
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:109:4",
        "data-orchids-name": "SheetPrimitive.Title",
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-orchids-id": "src/components/ui/sheet.tsx:122:4",
        "data-orchids-name": "SheetPrimitive.Description",
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SharedLayout",
    ()=>SharedLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/gavel.js [app-client] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/components/ui/sheet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SiteHeader = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('EN');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteHeader.useEffect": ()=>{
            const handleScroll = {
                "SiteHeader.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["SiteHeader.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "SiteHeader.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["SiteHeader.useEffect"];
        }
    }["SiteHeader.useEffect"], []);
    const toggleTheme = ()=>{
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
    const navigationItems = [
        {
            name: 'Home',
            href: '/',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
        },
        {
            name: 'Problem',
            href: '/problem',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
        },
        {
            name: 'Solution',
            href: '/solution',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            name: 'Features',
            href: '/features',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
        },
        {
            name: 'Report Incident',
            href: '/report',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"]
        },
        {
            name: 'Judicial Dashboard',
            href: '/dashboard',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
        },
        {
            name: 'Advocates',
            href: '/advocates',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        }
    ];
    const languages = [
        {
            code: 'EN',
            name: 'English'
        },
        {
            code: 'HI',
            name: 'हिंदी'
        },
        {
            code: 'BN',
            name: 'বাংলা'
        },
        {
            code: 'TA',
            name: 'தமிழ்'
        },
        {
            code: 'TE',
            name: 'తెలుగు'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "data-orchids-id": "src/components/SharedLayout.tsx:63:4",
        "data-orchids-name": "header",
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10' : 'bg-white dark:bg-black'),
        role: "banner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/SharedLayout.tsx:71:6",
            "data-orchids-name": "div",
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/SharedLayout.tsx:72:8",
                "data-orchids-name": "div",
                className: "flex items-center justify-between h-16 lg:h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:74:10",
                        "data-orchids-name": "div",
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:75:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-lg transition-colors duration-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:76:14",
                                    "data-orchids-name": "Scale",
                                    className: "w-6 h-6 text-white dark:text-black",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:78:12",
                                "data-orchids-name": "div",
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:79:14",
                                        "data-orchids-name": "span",
                                        className: "text-xl font-heading font-bold text-black dark:text-white tracking-tight",
                                        children: "JusticeLink"
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:82:14",
                                        "data-orchids-name": "span",
                                        className: "text-xs text-black/60 dark:text-white/60 font-medium",
                                        children: "Legal Tech Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:89:10",
                        "data-orchids-name": "nav",
                        className: "hidden lg:flex items-center space-x-1",
                        role: "navigation",
                        "aria-label": "Main navigation",
                        children: navigationItems.map((item)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:93:16@navigationItems",
                                "data-orchids-name": "a",
                                href: item.href,
                                className: "flex items-center space-x-2 px-4 py-2 text-sm font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
                                "aria-label": "Navigate to ".concat(item.name),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:99:18@navigationItems",
                                        "data-orchids-name": "Icon",
                                        className: "w-4 h-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 99,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:100:18@navigationItems",
                                        "data-orchids-name": "span",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.name, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:107:10",
                        "data-orchids-name": "div",
                        className: "hidden lg:flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                "data-orchids-id": "src/components/SharedLayout.tsx:109:12",
                                "data-orchids-name": "DropdownMenu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:110:14",
                                        "data-orchids-name": "DropdownMenuTrigger",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:111:16",
                                            "data-orchids-name": "Button",
                                            variant: "ghost",
                                            size: "sm",
                                            className: "flex items-center space-x-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
                                            "aria-label": "Select language",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:117:18",
                                                    "data-orchids-name": "Globe",
                                                    className: "w-4 h-4",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:118:18",
                                                    "data-orchids-name": "span",
                                                    className: "text-sm font-medium",
                                                    children: language
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:119:18",
                                                    "data-orchids-name": "ChevronDown",
                                                    className: "w-3 h-3",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:122:14",
                                        "data-orchids-name": "DropdownMenuContent",
                                        align: "end",
                                        className: "bg-white dark:bg-black border-black/10 dark:border-white/10",
                                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:124:18@languages",
                                                "data-orchids-name": "DropdownMenuItem",
                                                onClick: ()=>setLanguage(lang.code),
                                                className: "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:bg-black/5 dark:focus:bg-white/5",
                                                children: [
                                                    lang.name,
                                                    " (",
                                                    lang.code,
                                                    ")"
                                                ]
                                            }, lang.code, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/components/SharedLayout.tsx:136:12@toggleTheme",
                                "data-orchids-name": "Button",
                                variant: "ghost",
                                size: "sm",
                                onClick: toggleTheme,
                                className: "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5",
                                "aria-label": "Switch to ".concat(theme === 'light' ? 'dark' : 'light', " theme"),
                                children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:144:16",
                                    "data-orchids-name": "Moon",
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 144,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:146:16",
                                    "data-orchids-name": "Sun",
                                    className: "w-4 h-4",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:152:10",
                        "data-orchids-name": "div",
                        className: "lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                            "data-orchids-id": "src/components/SharedLayout.tsx:153:12",
                            "data-orchids-name": "Sheet",
                            open: isMobileMenuOpen,
                            onOpenChange: setIsMobileMenuOpen,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:154:14",
                                    "data-orchids-name": "SheetTrigger",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:155:16",
                                        "data-orchids-name": "Button",
                                        variant: "ghost",
                                        size: "sm",
                                        className: "text-black dark:text-white",
                                        "aria-label": "Open mobile menu",
                                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:162:20",
                                            "data-orchids-name": "X",
                                            className: "w-6 h-6",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 162,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:164:20",
                                            "data-orchids-name": "Menu",
                                            className: "w-6 h-6",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 164,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:168:14",
                                    "data-orchids-name": "SheetContent",
                                    side: "right",
                                    className: "bg-white dark:bg-black border-black/10 dark:border-white/10 w-80",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:169:16",
                                            "data-orchids-name": "SheetHeader",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:170:18",
                                                "data-orchids-name": "SheetTitle",
                                                className: "text-black dark:text-white text-left",
                                                children: "Navigation"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:172:16",
                                            "data-orchids-name": "nav",
                                            className: "flex flex-col space-y-2 mt-6",
                                            role: "navigation",
                                            "aria-label": "Mobile navigation",
                                            children: [
                                                navigationItems.map((item)=>{
                                                    const Icon = item.icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:176:22@navigationItems",
                                                        "data-orchids-name": "a",
                                                        href: item.href,
                                                        onClick: ()=>setIsMobileMenuOpen(false),
                                                        className: "flex items-center space-x-3 px-4 py-3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
                                                        "aria-label": "Navigate to ".concat(item.name),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                "data-orchids-id": "src/components/SharedLayout.tsx:183:24@navigationItems",
                                                                "data-orchids-name": "Icon",
                                                                className: "w-5 h-5",
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "data-orchids-id": "src/components/SharedLayout.tsx:184:24@navigationItems",
                                                                "data-orchids-name": "span",
                                                                className: "font-medium",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, item.name, true, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:189:18",
                                                    "data-orchids-name": "div",
                                                    className: "pt-4 mt-4 border-t border-black/10 dark:border-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/SharedLayout.tsx:190:20",
                                                            "data-orchids-name": "div",
                                                            className: "flex items-center justify-between px-4 py-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "data-orchids-id": "src/components/SharedLayout.tsx:191:22",
                                                                    "data-orchids-name": "span",
                                                                    className: "text-sm font-medium text-black dark:text-white",
                                                                    children: "Theme"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    "data-orchids-id": "src/components/SharedLayout.tsx:192:22@toggleTheme",
                                                                    "data-orchids-name": "Button",
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    onClick: toggleTheme,
                                                                    className: "text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white",
                                                                    "aria-label": "Switch to ".concat(theme === 'light' ? 'dark' : 'light', " theme"),
                                                                    children: theme === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                                                        "data-orchids-id": "src/components/SharedLayout.tsx:200:26",
                                                                        "data-orchids-name": "Moon",
                                                                        className: "w-4 h-4",
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                                                        "data-orchids-id": "src/components/SharedLayout.tsx:202:26",
                                                                        "data-orchids-name": "Sun",
                                                                        className: "w-4 h-4",
                                                                        "aria-hidden": "true"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/SharedLayout.tsx:207:20",
                                                            "data-orchids-name": "div",
                                                            className: "px-4 py-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                "data-orchids-id": "src/components/SharedLayout.tsx:208:22",
                                                                "data-orchids-name": "DropdownMenu",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                        "data-orchids-id": "src/components/SharedLayout.tsx:209:24",
                                                                        "data-orchids-name": "DropdownMenuTrigger",
                                                                        asChild: true,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            "data-orchids-id": "src/components/SharedLayout.tsx:210:26",
                                                                            "data-orchids-name": "Button",
                                                                            variant: "ghost",
                                                                            className: "w-full justify-between text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5",
                                                                            "aria-label": "Select language",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    "data-orchids-id": "src/components/SharedLayout.tsx:215:28",
                                                                                    "data-orchids-name": "div",
                                                                                    className: "flex items-center space-x-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                                            "data-orchids-id": "src/components/SharedLayout.tsx:216:30",
                                                                                            "data-orchids-name": "Globe",
                                                                                            className: "w-4 h-4",
                                                                                            "aria-hidden": "true"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                                            lineNumber: 216,
                                                                                            columnNumber: 31
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            "data-orchids-id": "src/components/SharedLayout.tsx:217:30",
                                                                                            "data-orchids-name": "span",
                                                                                            children: [
                                                                                                "Language: ",
                                                                                                language
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                                            lineNumber: 217,
                                                                                            columnNumber: 31
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                                    lineNumber: 215,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                    "data-orchids-id": "src/components/SharedLayout.tsx:219:28",
                                                                                    "data-orchids-name": "ChevronDown",
                                                                                    className: "w-4 h-4",
                                                                                    "aria-hidden": "true"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                                    lineNumber: 219,
                                                                                    columnNumber: 29
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                            lineNumber: 210,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                        "data-orchids-id": "src/components/SharedLayout.tsx:222:24",
                                                                        "data-orchids-name": "DropdownMenuContent",
                                                                        className: "bg-white dark:bg-black border-black/10 dark:border-white/10",
                                                                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                "data-orchids-id": "src/components/SharedLayout.tsx:224:28@languages",
                                                                                "data-orchids-name": "DropdownMenuItem",
                                                                                onClick: ()=>setLanguage(lang.code),
                                                                                className: "text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5",
                                                                                children: [
                                                                                    lang.name,
                                                                                    " (",
                                                                                    lang.code,
                                                                                    ")"
                                                                                ]
                                                                            }, lang.code, true, {
                                                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                                lineNumber: 224,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                                lineNumber: 208,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 153,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SiteHeader, "eN5TlJlPDzxmTvHrpudFUJNk36s=");
_c = SiteHeader;
const LegalChatbot = ()=>{
    _s1();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: "Hello! I'm here to help you with legal guidance and platform navigation. How can I assist you today?",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        }
    ]);
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const quickActions = [
        {
            label: 'Report Incident',
            action: 'report'
        },
        {
            label: 'Find Advocate',
            action: 'advocate'
        },
        {
            label: 'Track Case',
            action: 'track'
        },
        {
            label: 'Legal Rights',
            action: 'rights'
        }
    ];
    const handleSendMessage = async ()=>{
        if (!inputMessage.trim()) return;
        const newMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        setMessages((prev)=>[
                ...prev,
                newMessage
            ]);
        setInputMessage('');
        setIsTyping(true);
        // Simulate bot response
        setTimeout(()=>{
            const botResponse = {
                id: messages.length + 2,
                text: "I understand your concern. Let me help you with that. For specific legal advice, I recommend consulting with one of our verified advocates through the platform.",
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            setMessages((prev)=>[
                    ...prev,
                    botResponse
                ]);
            setIsTyping(false);
        }, 1500);
    };
    const handleQuickAction = (action)=>{
        const actionMessages = {
            report: "I'll help you report an incident. Click the 'Report Incident' button in the navigation to start the secure reporting process.",
            advocate: "Let me connect you with qualified advocates. You can browse our verified advocate directory and book consultations.",
            track: "You can track your case status through the Judicial Dashboard. I'll guide you through accessing your case information.",
            rights: "I can provide information about your legal rights. What specific area of law are you interested in learning about?"
        };
        const message = actionMessages[action] || "How can I help you with that?";
        setMessages((prev)=>[
                ...prev,
                {
                    id: prev.length + 1,
                    text: message,
                    sender: 'bot',
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                    })
                }
            ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/SharedLayout.tsx:314:6",
                "data-orchids-name": "div",
                className: "hidden md:block fixed bottom-6 right-6 z-50",
                children: [
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:316:10",
                        "data-orchids-name": "div",
                        className: "mb-4 w-96 h-96 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:318:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:319:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:320:16",
                                                "data-orchids-name": "div",
                                                className: "w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:321:18",
                                                    "data-orchids-name": "Scale",
                                                    className: "w-4 h-4 text-white dark:text-black",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:323:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:324:18",
                                                        "data-orchids-name": "h3",
                                                        className: "font-semibold text-black dark:text-white text-sm",
                                                        children: "Legal Assistant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:325:18",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-black/60 dark:text-white/60",
                                                        children: "Always here to help"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:328:14",
                                        "data-orchids-name": "Button",
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white",
                                        "aria-label": "Close chat",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:335:16",
                                            "data-orchids-name": "X",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:340:12",
                                "data-orchids-name": "div",
                                className: "flex-1 p-4 space-y-3 overflow-y-auto h-60",
                                children: [
                                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:342:16@messages",
                                            "data-orchids-name": "div",
                                            className: "flex ".concat(message.sender === 'user' ? 'justify-end' : 'justify-start'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:346:18@messages",
                                                "data-orchids-name": "div",
                                                className: "max-w-xs px-3 py-2 rounded-lg text-sm ".concat(message.sender === 'user' ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:353:20@messages",
                                                        "data-orchids-name": "p",
                                                        children: message.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:354:20@messages",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs mt-1 ".concat(message.sender === 'user' ? 'text-white/70 dark:text-black/70' : 'text-black/50 dark:text-white/50'),
                                                        children: message.timestamp
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, message.id, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:365:16",
                                        "data-orchids-name": "div",
                                        className: "flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:366:18",
                                            "data-orchids-name": "div",
                                            className: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:367:20",
                                                "data-orchids-name": "div",
                                                className: "flex space-x-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:368:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:369:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: '0.1s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:370:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: '0.2s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 367,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 366,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 365,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:378:12",
                                "data-orchids-name": "div",
                                className: "px-4 py-2 border-t border-black/10 dark:border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:379:14",
                                    "data-orchids-name": "div",
                                    className: "flex flex-wrap gap-1",
                                    children: quickActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:381:18@quickActions",
                                            "data-orchids-name": "Button",
                                            variant: "ghost",
                                            size: "sm",
                                            onClick: ()=>handleQuickAction(action.action),
                                            className: "text-xs text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 h-6 px-2",
                                            children: action.label
                                        }, action.action, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:395:12",
                                "data-orchids-name": "div",
                                className: "p-4 border-t border-black/10 dark:border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:396:14",
                                    "data-orchids-name": "div",
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:397:16",
                                            "data-orchids-name": "input",
                                            type: "text",
                                            value: inputMessage,
                                            onChange: (e)=>setInputMessage(e.target.value),
                                            onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),
                                            placeholder: "Ask me anything...",
                                            className: "flex-1 px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
                                            "aria-label": "Type your message"
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:406:16@handleSendMessage",
                                            "data-orchids-name": "Button",
                                            onClick: handleSendMessage,
                                            size: "sm",
                                            className: "bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80",
                                            "aria-label": "Send message",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:412:18",
                                                "data-orchids-name": "MessageCircle",
                                                className: "w-4 h-4",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 412,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 406,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 396,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        "data-orchids-id": "src/components/SharedLayout.tsx:420:8",
                        "data-orchids-name": "Button",
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 shadow-2xl transition-all duration-300 hover:scale-110",
                        "aria-label": isOpen ? "Close chat" : "Open chat",
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            "data-orchids-id": "src/components/SharedLayout.tsx:426:12",
                            "data-orchids-name": "X",
                            className: "w-6 h-6",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            "data-orchids-id": "src/components/SharedLayout.tsx:428:12",
                            "data-orchids-name": "MessageCircle",
                            className: "w-6 h-6",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/SharedLayout.tsx:434:6",
                "data-orchids-name": "div",
                className: "md:hidden fixed bottom-0 left-0 right-0 z-50",
                children: [
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:436:10",
                        "data-orchids-name": "div",
                        className: "h-96 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 animate-in slide-in-from-bottom-4 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:438:12",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:439:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:440:16",
                                                "data-orchids-name": "div",
                                                className: "w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:441:18",
                                                    "data-orchids-name": "Scale",
                                                    className: "w-4 h-4 text-white dark:text-black",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:443:16",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:444:18",
                                                        "data-orchids-name": "h3",
                                                        className: "font-semibold text-black dark:text-white text-sm",
                                                        children: "Legal Assistant"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:445:18",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs text-black/60 dark:text-white/60",
                                                        children: "Always here to help"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 439,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:448:14",
                                        "data-orchids-name": "Button",
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white",
                                        "aria-label": "Close chat",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:455:16",
                                            "data-orchids-name": "X",
                                            className: "w-4 h-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:459:12",
                                "data-orchids-name": "div",
                                className: "flex-1 p-4 space-y-3 overflow-y-auto h-48",
                                children: [
                                    messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:461:16@messages",
                                            "data-orchids-name": "div",
                                            className: "flex ".concat(message.sender === 'user' ? 'justify-end' : 'justify-start'),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:465:18@messages",
                                                "data-orchids-name": "div",
                                                className: "max-w-xs px-3 py-2 rounded-lg text-sm ".concat(message.sender === 'user' ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-black/5 dark:bg-white/5 text-black dark:text-white border border-black/10 dark:border-white/10'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:472:20@messages",
                                                        "data-orchids-name": "p",
                                                        children: message.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:473:20@messages",
                                                        "data-orchids-name": "p",
                                                        className: "text-xs mt-1 ".concat(message.sender === 'user' ? 'text-white/70 dark:text-black/70' : 'text-black/50 dark:text-white/50'),
                                                        children: message.timestamp
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, message.id, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 461,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:484:16",
                                        "data-orchids-name": "div",
                                        className: "flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:485:18",
                                            "data-orchids-name": "div",
                                            className: "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:486:20",
                                                "data-orchids-name": "div",
                                                className: "flex space-x-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:487:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:488:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: '0.1s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/components/SharedLayout.tsx:489:22",
                                                        "data-orchids-name": "div",
                                                        className: "w-2 h-2 bg-black/60 dark:bg-white/60 rounded-full animate-bounce",
                                                        style: {
                                                            animationDelay: '0.2s'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 486,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 485,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 484,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:496:12",
                                "data-orchids-name": "div",
                                className: "px-4 pb-2 border-t border-black/10 dark:border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:497:14",
                                        "data-orchids-name": "div",
                                        className: "flex flex-wrap gap-1 mb-2",
                                        children: quickActions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:499:18@quickActions",
                                                "data-orchids-name": "Button",
                                                variant: "ghost",
                                                size: "sm",
                                                onClick: ()=>handleQuickAction(action.action),
                                                className: "text-xs text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 h-6 px-2",
                                                children: action.label
                                            }, action.action, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 499,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 497,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:510:14",
                                        "data-orchids-name": "div",
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:511:16",
                                                "data-orchids-name": "input",
                                                type: "text",
                                                value: inputMessage,
                                                onChange: (e)=>setInputMessage(e.target.value),
                                                onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),
                                                placeholder: "Ask me anything...",
                                                className: "flex-1 px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white",
                                                "aria-label": "Type your message"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:520:16@handleSendMessage",
                                                "data-orchids-name": "Button",
                                                onClick: handleSendMessage,
                                                size: "sm",
                                                className: "bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80",
                                                "aria-label": "Send message",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:526:18",
                                                    "data-orchids-name": "MessageCircle",
                                                    className: "w-4 h-4",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 496,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:535:10",
                        "data-orchids-name": "div",
                        className: "bg-white dark:bg-black border-t border-black/10 dark:border-white/10 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            "data-orchids-id": "src/components/SharedLayout.tsx:536:12",
                            "data-orchids-name": "Button",
                            onClick: ()=>setIsOpen(true),
                            className: "w-full bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 flex items-center justify-center space-x-2",
                            "aria-label": "Open chat",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:541:14",
                                    "data-orchids-name": "MessageCircle",
                                    className: "w-5 h-5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 541,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:542:14",
                                    "data-orchids-name": "span",
                                    children: "Chat with Legal Assistant"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 536,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s1(LegalChatbot, "13QAZn3OOYbJj9bCBQeTu9/fogc=");
_c1 = LegalChatbot;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const footerLinks = {
        platform: [
            {
                name: 'Report Incident',
                href: '/report'
            },
            {
                name: 'Find Advocates',
                href: '/advocates'
            },
            {
                name: 'Track Cases',
                href: '/dashboard'
            },
            {
                name: 'Legal Resources',
                href: '/resources'
            }
        ],
        support: [
            {
                name: 'Help Center',
                href: '/help'
            },
            {
                name: 'Contact Us',
                href: '/contact'
            },
            {
                name: 'Emergency Contacts',
                href: '/emergency'
            },
            {
                name: 'Technical Support',
                href: '/support'
            }
        ],
        legal: [
            {
                name: 'Privacy Policy',
                href: '/privacy'
            },
            {
                name: 'Terms of Service',
                href: '/terms'
            },
            {
                name: 'Data Security',
                href: '/security'
            },
            {
                name: 'Compliance',
                href: '/compliance'
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        "data-orchids-id": "src/components/SharedLayout.tsx:576:4",
        "data-orchids-name": "footer",
        className: "bg-white dark:bg-black border-t border-black/10 dark:border-white/10 mt-auto",
        role: "contentinfo",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/SharedLayout.tsx:577:6",
            "data-orchids-name": "div",
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/SharedLayout.tsx:578:8",
                    "data-orchids-name": "div",
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/SharedLayout.tsx:580:10",
                            "data-orchids-name": "div",
                            className: "lg:col-span-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:581:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center space-x-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:582:14",
                                            "data-orchids-name": "div",
                                            className: "flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:583:16",
                                                "data-orchids-name": "Scale",
                                                className: "w-6 h-6 text-white dark:text-black",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 583,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 582,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:585:14",
                                            "data-orchids-name": "div",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:586:16",
                                                    "data-orchids-name": "h3",
                                                    className: "text-lg font-heading font-bold text-black dark:text-white",
                                                    children: "JusticeLink"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:587:16",
                                                    "data-orchids-name": "p",
                                                    className: "text-sm text-black/60 dark:text-white/60",
                                                    children: "Legal Tech Platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:590:12",
                                    "data-orchids-name": "p",
                                    className: "text-sm text-black/70 dark:text-white/70 mb-4",
                                    children: "Empowering justice through technology. Secure, accessible, and transparent legal solutions for everyone."
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:595:12",
                                    "data-orchids-name": "div",
                                    className: "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:596:14",
                                            "data-orchids-name": "div",
                                            className: "flex items-center space-x-1 px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:597:16",
                                                    "data-orchids-name": "Shield",
                                                    className: "w-3 h-3 text-black dark:text-white",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:598:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-xs font-medium text-black dark:text-white",
                                                    children: "SSL Secured"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:600:14",
                                            "data-orchids-name": "div",
                                            className: "flex items-center space-x-1 px-2 py-1 bg-black/5 dark:bg-white/5 rounded border border-black/10 dark:border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"], {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:601:16",
                                                    "data-orchids-name": "Gavel",
                                                    className: "w-3 h-3 text-black dark:text-white",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:602:16",
                                                    "data-orchids-name": "span",
                                                    className: "text-xs font-medium text-black dark:text-white",
                                                    children: "Legal Compliant"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/SharedLayout.tsx:608:10",
                            "data-orchids-name": "div",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:609:12",
                                    "data-orchids-name": "h4",
                                    className: "text-sm font-semibold text-black dark:text-white mb-4 uppercase tracking-wider",
                                    children: "Platform"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:610:12",
                                    "data-orchids-name": "nav",
                                    className: "space-y-3",
                                    role: "navigation",
                                    "aria-label": "Platform links",
                                    children: footerLinks.platform.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:612:16",
                                            "data-orchids-name": "a",
                                            href: link.href,
                                            className: "block text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded",
                                            children: link.name
                                        }, link.name, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/SharedLayout.tsx:624:10",
                            "data-orchids-name": "div",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:625:12",
                                    "data-orchids-name": "h4",
                                    className: "text-sm font-semibold text-black dark:text-white mb-4 uppercase tracking-wider",
                                    children: "Support"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 625,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:626:12",
                                    "data-orchids-name": "nav",
                                    className: "space-y-3",
                                    role: "navigation",
                                    "aria-label": "Support links",
                                    children: footerLinks.support.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:628:16",
                                            "data-orchids-name": "a",
                                            href: link.href,
                                            className: "block text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded",
                                            children: link.name
                                        }, link.name, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 628,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 626,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/SharedLayout.tsx:640:10",
                            "data-orchids-name": "div",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:641:12",
                                    "data-orchids-name": "h4",
                                    className: "text-sm font-semibold text-black dark:text-white mb-4 uppercase tracking-wider",
                                    children: "Legal & Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:642:12",
                                    "data-orchids-name": "nav",
                                    className: "space-y-3 mb-6",
                                    role: "navigation",
                                    "aria-label": "Legal links",
                                    children: footerLinks.legal.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:644:16",
                                            "data-orchids-name": "a",
                                            href: link.href,
                                            className: "block text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black rounded",
                                            children: link.name
                                        }, link.name, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/SharedLayout.tsx:654:12",
                                    "data-orchids-name": "div",
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:655:14",
                                            "data-orchids-name": "p",
                                            className: "text-sm text-black/70 dark:text-white/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:656:16",
                                                    "data-orchids-name": "strong",
                                                    children: "24/7 Helpline:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:656:47",
                                                    "data-orchids-name": "br"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 132
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:657:16",
                                                    "data-orchids-name": "a",
                                                    href: "tel:+911234567890",
                                                    className: "text-black dark:text-white hover:underline",
                                                    children: "+91 123 456 7890"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 655,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/components/SharedLayout.tsx:659:14",
                                            "data-orchids-name": "p",
                                            className: "text-sm text-black/70 dark:text-white/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:660:16",
                                                    "data-orchids-name": "strong",
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:660:39",
                                                    "data-orchids-name": "br"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 124
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/components/SharedLayout.tsx:661:16",
                                                    "data-orchids-name": "a",
                                                    href: "mailto:help@justicelink.in",
                                                    className: "text-black dark:text-white hover:underline",
                                                    children: "help@justicelink.in"
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                            lineNumber: 659,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                    lineNumber: 654,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                    lineNumber: 578,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/SharedLayout.tsx:668:8",
                    "data-orchids-name": "div",
                    className: "mt-12 pt-8 border-t border-black/10 dark:border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/SharedLayout.tsx:669:10",
                        "data-orchids-name": "div",
                        className: "flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:670:12",
                                "data-orchids-name": "div",
                                className: "text-sm text-black/60 dark:text-white/60",
                                children: [
                                    "© ",
                                    currentYear,
                                    " JusticeLink. All rights reserved. Built for legal empowerment."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 670,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/SharedLayout.tsx:675:12",
                                "data-orchids-name": "div",
                                className: "flex items-center space-x-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:676:14",
                                        "data-orchids-name": "div",
                                        className: "flex items-center space-x-2 px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/10 dark:border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:677:16",
                                                "data-orchids-name": "div",
                                                className: "w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:678:16",
                                                "data-orchids-name": "span",
                                                className: "text-black/70 dark:text-white/70",
                                                children: "Built for Justice Hackathon 2024"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 678,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 676,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/SharedLayout.tsx:680:14",
                                        "data-orchids-name": "div",
                                        className: "text-black/50 dark:text-white/50",
                                        children: [
                                            "Team: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/components/SharedLayout.tsx:681:22",
                                                "data-orchids-name": "span",
                                                className: "text-black dark:text-white font-medium",
                                                children: "LegalTech Innovators"
                                            }, void 0, false, {
                                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                                lineNumber: 681,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                        lineNumber: 680,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                                lineNumber: 675,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                        lineNumber: 669,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                    lineNumber: 668,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
            lineNumber: 577,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
        lineNumber: 576,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Footer;
const SharedLayout = (param)=>{
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/SharedLayout.tsx:693:4",
        "data-orchids-name": "div",
        className: "min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteHeader, {
                "data-orchids-id": "src/components/SharedLayout.tsx:694:6",
                "data-orchids-name": "SiteHeader"
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 694,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                "data-orchids-id": "src/components/SharedLayout.tsx:696:6",
                "data-orchids-name": "main",
                className: "flex-1 pt-16 lg:pt-20",
                role: "main",
                id: "main-content",
                "aria-label": "Main content",
                children: children
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 696,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                "data-orchids-id": "src/components/SharedLayout.tsx:705:6",
                "data-orchids-name": "Footer"
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 705,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegalChatbot, {
                "data-orchids-id": "src/components/SharedLayout.tsx:706:6",
                "data-orchids-name": "LegalChatbot"
            }, void 0, false, {
                fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx",
        lineNumber: 693,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = SharedLayout;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SiteHeader");
__turbopack_context__.k.register(_c1, "LegalChatbot");
__turbopack_context__.k.register(_c2, "Footer");
__turbopack_context__.k.register(_c3, "SharedLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProblemPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$SharedLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/components/SharedLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Nyay-Sahay/frontend/src/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ProblemPage() {
    const problems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            title: "Corruption & Misconduct",
            description: "Citizens face misconduct but lack proper redressal mechanisms"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
            title: "Legal Rights Awareness",
            description: "Most citizens don't know their constitutional rights"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: "Access to Legal Aid",
            description: "Finding and affording advocates remains challenging"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            title: "Limited Transparency",
            description: "Tracking cases and hearings is complex and opaque"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$SharedLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SharedLayout"], {
        "data-orchids-id": "src/app/problem/page.tsx:32:4",
        "data-orchids-name": "SharedLayout",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/app/problem/page.tsx:33:6",
            "data-orchids-name": "div",
            className: "min-h-screen bg-white dark:bg-black py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/problem/page.tsx:34:8",
                "data-orchids-name": "div",
                className: "container mx-auto px-4 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/problem/page.tsx:35:10",
                        "data-orchids-name": "div",
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "data-orchids-id": "src/app/problem/page.tsx:36:12",
                                "data-orchids-name": "h1",
                                className: "text-4xl font-heading font-bold text-black dark:text-white mb-4",
                                children: "The Problem"
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/problem/page.tsx:39:12",
                                "data-orchids-name": "p",
                                className: "text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto",
                                children: "Citizens struggle with awareness, accessibility, and accountability in the legal ecosystem."
                            }, void 0, false, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/problem/page.tsx:44:10",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: problems.map((problem, index)=>{
                            const Icon = problem.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                "data-map-index": index,
                                "data-orchids-id": "src/app/problem/page.tsx:48:16@problems",
                                "data-orchids-name": "Card",
                                className: "border-black/10 dark:border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/app/problem/page.tsx:49:18@problems",
                                        "data-orchids-name": "CardHeader",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/app/problem/page.tsx:50:20@problems",
                                            "data-orchids-name": "CardTitle",
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/app/problem/page.tsx:51:22@problems",
                                                    "data-orchids-name": "div",
                                                    className: "w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src/app/problem/page.tsx:52:24@problems",
                                                        "data-orchids-name": "Icon",
                                                        className: "w-5 h-5 text-white dark:text-black"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 23
                                                }, this),
                                                problem.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/app/problem/page.tsx:57:18@problems",
                                        "data-orchids-name": "CardContent",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Nyay$2d$Sahay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/app/problem/page.tsx:58:20@problems",
                                            "data-orchids-name": "p",
                                            className: "text-black/60 dark:text-white/60",
                                            children: problem.description
                                        }, void 0, false, {
                                            fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Nyay-Sahay/frontend/src/app/problem/page.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = ProblemPage;
var _c;
__turbopack_context__.k.register(_c, "ProblemPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Nyay-Sahay_frontend_src_61cac39c._.js.map