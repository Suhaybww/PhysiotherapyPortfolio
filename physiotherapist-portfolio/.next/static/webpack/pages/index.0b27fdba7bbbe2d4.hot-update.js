"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/bento-grid.tsx":
/*!***********************************!*\
  !*** ./components/bento-grid.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BentoGrid: function() { return /* binding */ BentoGrid; },\n/* harmony export */   BentoGridItem: function() { return /* binding */ BentoGridItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ \"./utils/cn.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BentoGrid = ({ className, children })=>{\n    _s();\n    const ref = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n    const inView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(ref);\n    const gridVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.2\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        ref: ref,\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto\", className),\n        variants: gridVariants,\n        initial: \"hidden\",\n        animate: inView ? \"visible\" : \"hidden\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/bento-grid.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BentoGrid, \"O7qYEn3iCrBBWRAefWku+E/MdDM=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = BentoGrid;\nconst BentoGridItem = ({ className, title, description, header, icon })=>{\n    const itemVariants = {\n        hidden: {\n            opacity: 0,\n            y: 50,\n            scale: 0.8\n        },\n        visible: {\n            opacity: 1,\n            y: 0,\n            scale: 1,\n            transition: {\n                duration: 0.6,\n                ease: \"easeOut\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"row-span-1 rounded-xl group/bento hover:shadow-2xl transition duration-300 shadow-input dark:shadow-none p-4 bg-[#A8D3A8] border border-transparent justify-between flex flex-col space-y-4\", className),\n        variants: itemVariants,\n        children: [\n            header,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    icon,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/bento-grid.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/bento-grid.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/bento-grid.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/bento-grid.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = BentoGridItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"BentoGrid\");\n$RefreshReg$(_c1, \"BentoGridItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JlbnRvLWdyaWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUN3QjtBQUUzQyxNQUFNSSxZQUFZLENBQUMsRUFDeEJDLFNBQVMsRUFDVEMsUUFBUSxFQUlUOztJQUNDLE1BQU1DLE1BQU1OLG1EQUFZLENBQUM7SUFDekIsTUFBTVEsU0FBU04sd0RBQVNBLENBQUNJO0lBRXpCLE1BQU1HLGVBQWU7UUFDbkJDLFFBQVE7WUFBRUMsU0FBUztRQUFFO1FBQ3JCQyxTQUFTO1lBQ1BELFNBQVM7WUFDVEUsWUFBWTtnQkFDVkMsaUJBQWlCO1lBQ25CO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDYixpREFBTUEsQ0FBQ2MsR0FBRztRQUNUVCxLQUFLQTtRQUNMRixXQUFXTCw2Q0FBRUEsQ0FDWCxnRkFDQUs7UUFFRlksVUFBVVA7UUFDVlEsU0FBUTtRQUNSQyxTQUFTVixTQUFTLFlBQVk7a0JBRTdCSDs7Ozs7O0FBR1AsRUFBRTtHQWxDV0Y7O1FBUUlELG9EQUFTQTs7O0tBUmJDO0FBb0NOLE1BQU1nQixnQkFBZ0IsQ0FBQyxFQUM1QmYsU0FBUyxFQUNUZ0IsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLE1BQU0sRUFDTkMsSUFBSSxFQU9MO0lBQ0MsTUFBTUMsZUFBZTtRQUNuQmQsUUFBUTtZQUFFQyxTQUFTO1lBQUdjLEdBQUc7WUFBSUMsT0FBTztRQUFJO1FBQ3hDZCxTQUFTO1lBQ1BELFNBQVM7WUFDVGMsR0FBRztZQUNIQyxPQUFPO1lBQ1BiLFlBQVk7Z0JBQ1ZjLFVBQVU7Z0JBQ1ZDLE1BQU07WUFDUjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzNCLGlEQUFNQSxDQUFDYyxHQUFHO1FBQ1RYLFdBQVdMLDZDQUFFQSxDQUNYLCtMQUNBSztRQUVGWSxVQUFVUTs7WUFFVEY7MEJBQ0QsOERBQUNQOztvQkFDRVE7a0NBQ0QsOERBQUNSO3dCQUFJWCxXQUFVO2tDQUNaZ0I7Ozs7OztrQ0FFSCw4REFBQ0w7d0JBQUlYLFdBQVU7a0NBQ1ppQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1gsRUFBRTtNQTlDV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iZW50by1ncmlkLnRzeD9iZDdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL2NuXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBCZW50b0dyaWQgPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufSkgPT4ge1xuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGluVmlldyA9IHVzZUluVmlldyhyZWYpO1xuXG4gIGNvbnN0IGdyaWRWYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4yLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJncmlkIG1kOmF1dG8tcm93cy1bMThyZW1dIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC00IG1heC13LTd4bCBteC1hdXRvXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHZhcmlhbnRzPXtncmlkVmFyaWFudHN9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIGFuaW1hdGU9e2luVmlldyA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJlbnRvR3JpZEl0ZW0gPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaGVhZGVyLFxuICBpY29uLFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaGVhZGVyPzogUmVhY3QuUmVhY3ROb2RlO1xuICBpY29uPzogUmVhY3QuUmVhY3ROb2RlO1xufSkgPT4ge1xuICBjb25zdCBpdGVtVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDUwLCBzY2FsZTogMC44IH0sXG4gICAgdmlzaWJsZToge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHk6IDAsXG4gICAgICBzY2FsZTogMSxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgZWFzZTogXCJlYXNlT3V0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJyb3ctc3Bhbi0xIHJvdW5kZWQteGwgZ3JvdXAvYmVudG8gaG92ZXI6c2hhZG93LTJ4bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBzaGFkb3ctaW5wdXQgZGFyazpzaGFkb3ctbm9uZSBwLTQgYmctWyNBOEQzQThdIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQganVzdGlmeS1iZXR3ZWVuIGZsZXggZmxleC1jb2wgc3BhY2UteS00XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHZhcmlhbnRzPXtpdGVtVmFyaWFudHN9XG4gICAgPlxuICAgICAge2hlYWRlcn1cbiAgICAgIDxkaXY+XG4gICAgICAgIHtpY29ufVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyBmb250LWJvbGQgdGV4dC1uZXV0cmFsLTYwMCBkYXJrOnRleHQtbmV1dHJhbC0yMDAgbWItMiBtdC0yXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1ub3JtYWwgdGV4dC1uZXV0cmFsLTYwMCB0ZXh0LXhzIGRhcms6dGV4dC1uZXV0cmFsLTMwMFwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJjbiIsIlJlYWN0IiwibW90aW9uIiwidXNlSW5WaWV3IiwiQmVudG9HcmlkIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZWYiLCJ1c2VSZWYiLCJpblZpZXciLCJncmlkVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiQmVudG9HcmlkSXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoZWFkZXIiLCJpY29uIiwiaXRlbVZhcmlhbnRzIiwieSIsInNjYWxlIiwiZHVyYXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/bento-grid.tsx\n"));

/***/ })

});