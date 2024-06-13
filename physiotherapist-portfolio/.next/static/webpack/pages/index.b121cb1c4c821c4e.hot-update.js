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

/***/ "./components/services.tsx":
/*!*********************************!*\
  !*** ./components/services.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; },\n/* harmony export */   CardDescription: function() { return /* binding */ CardDescription; },\n/* harmony export */   CardTitle: function() { return /* binding */ CardTitle; },\n/* harmony export */   HoverEffect: function() { return /* binding */ HoverEffect; },\n/* harmony export */   Services: function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cn */ \"./utils/cn.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaBrain,FaDumbbell,FaHeartbeat,FaLeaf,FaRunning,FaTree!=!react-icons/fa */ \"__barrel_optimize__?names=FaBrain,FaDumbbell,FaHeartbeat,FaLeaf,FaRunning,FaTree!=!./node_modules/react-icons/fa/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// HoverEffect component to display services\nconst HoverEffect = ({ items, className })=>{\n    _s();\n    let [hoveredIndex, setHoveredIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10\", className),\n        children: items.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative group block p-2 h-full w-full\",\n                onMouseEnter: ()=>setHoveredIndex(idx),\n                onMouseLeave: ()=>setHoveredIndex(null),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                        children: hoveredIndex === idx && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                            className: \"absolute inset-0 h-full w-full bg-[#6495ED] block rounded-3xl\",\n                            layoutId: \"hoverBackground\",\n                            initial: {\n                                opacity: 0\n                            },\n                            animate: {\n                                opacity: 1,\n                                transition: {\n                                    duration: 0.15\n                                }\n                            },\n                            exit: {\n                                opacity: 0,\n                                transition: {\n                                    duration: 0.15,\n                                    delay: 0.2\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                className: \"text-4xl text-[#6495ED]\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardTitle, {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CardDescription, {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, idx, true, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HoverEffect, \"9iVkaaUbrFxVCU6MuI1jK6905pI=\");\n_c = HoverEffect;\n// Card component to style each service card\nconst Card = ({ className, children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent group-hover:border-[#6495ED] relative z-20\", className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-50\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n            lineNumber: 78,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Card;\n// Component for Card title\nconst CardTitle = ({ className, children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-black font-bold tracking-wide mt-4\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = CardTitle;\n// Component for Card description\nconst CardDescription = ({ className, children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(\"mt-8 text-black tracking-wide leading-relaxed text-sm\", className),\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_c3 = CardDescription;\n// Main Services component to render the page\nfunction Services() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-5xl mx-auto px-8 bg-C1E1C1 py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mb-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold text-white mb-4\",\n                        children: \"My Physiotherapy Services\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg text-white leading-relaxed\",\n                        children: \"At our clinic, we offer a variety of physiotherapy services designed to help you recover and maintain optimal health. Whether you need manual therapy, exercise prescriptions, or specialized neurological rehabilitation, our skilled professionals are here to support you.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HoverEffect, {\n                items: services\n            }, void 0, false, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/services.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, this);\n}\n_c4 = Services;\n// Services array with each service details\nconst services = [\n    {\n        title: \"Manual Therapy\",\n        description: \"Skilled hands-on techniques to alleviate pain and promote healing.\",\n        icon: _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaDumbbell\n    },\n    {\n        title: \"Exercise Prescription\",\n        description: \"Evidence based programs to strengthen muscles and manage pain.\",\n        icon: _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaRunning\n    },\n    {\n        title: \"Pain Management\",\n        description: \"Evidence-based strategies to manage acute and chronic pain effectively.\",\n        icon: _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaHeartbeat\n    },\n    {\n        title: \"Neurological Rehab\",\n        description: \"Specialized techniques to help patients with neurological conditions such as stroke & parkinson's.\",\n        icon: _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBrain\n    },\n    {\n        title: \"Sports Therapy\",\n        description: \"Targeted treatment and training to optimize athletic performance.\",\n        icon: _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaLeaf\n    },\n    {\n        title: \"Spinal rehabilitation\",\n        description: \"Techniques to improve posture, reduce pain, and prevent injuries of the spine.\",\n        icon: _barrel_optimize_names_FaBrain_FaDumbbell_FaHeartbeat_FaLeaf_FaRunning_FaTree_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTree\n    }\n];\nvar _c, _c1, _c2, _c3, _c4;\n$RefreshReg$(_c, \"HoverEffect\");\n$RefreshReg$(_c1, \"Card\");\n$RefreshReg$(_c2, \"CardTitle\");\n$RefreshReg$(_c3, \"CardDescription\");\n$RefreshReg$(_c4, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlcnZpY2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUN2QjtBQUM0RDtBQUc3Riw0Q0FBNEM7QUFDckMsTUFBTVUsY0FBYyxDQUFDLEVBQzFCQyxLQUFLLEVBQ0xDLFNBQVMsRUFRVjs7SUFDQyxJQUFJLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFFOUQscUJBQ0UsOERBQUNZO1FBQ0NILFdBQVdaLDZDQUFFQSxDQUNYLHdEQUNBWTtrQkFHREQsTUFBTUssR0FBRyxDQUFDLENBQUNDLE1BQU1DLG9CQUNoQiw4REFBQ0g7Z0JBRUNILFdBQVU7Z0JBQ1ZPLGNBQWMsSUFBTUwsZ0JBQWdCSTtnQkFDcENFLGNBQWMsSUFBTU4sZ0JBQWdCOztrQ0FFcEMsOERBQUNiLDBEQUFlQTtrQ0FDYlksaUJBQWlCSyxxQkFDaEIsOERBQUNoQixpREFBTUEsQ0FBQ21CLElBQUk7NEJBQ1ZULFdBQVU7NEJBQ1ZVLFVBQVM7NEJBQ1RDLFNBQVM7Z0NBQUVDLFNBQVM7NEJBQUU7NEJBQ3RCQyxTQUFTO2dDQUNQRCxTQUFTO2dDQUNURSxZQUFZO29DQUFFQyxVQUFVO2dDQUFLOzRCQUMvQjs0QkFDQUMsTUFBTTtnQ0FDSkosU0FBUztnQ0FDVEUsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBTUUsT0FBTztnQ0FBSTs0QkFDM0M7Ozs7Ozs7Ozs7O2tDQUlOLDhEQUFDQzs7MENBQ0MsOERBQUNiLEtBQUtjLElBQUk7Z0NBQUNuQixXQUFVOzs7Ozs7MENBQ3JCLDhEQUFDb0I7MENBQVdmLEtBQUtnQixLQUFLOzs7Ozs7MENBQ3RCLDhEQUFDQzswQ0FBaUJqQixLQUFLa0IsV0FBVzs7Ozs7Ozs7Ozs7OztlQXpCL0JqQjs7Ozs7Ozs7OztBQStCZixFQUFFO0dBckRXUjtLQUFBQTtBQXVEYiw0Q0FBNEM7QUFDckMsTUFBTW9CLE9BQU8sQ0FBQyxFQUNuQmxCLFNBQVMsRUFDVHdCLFFBQVEsRUFJVDtJQUNDLHFCQUNFLDhEQUFDckI7UUFDQ0gsV0FBV1osNkNBQUVBLENBQ1gsK0hBQ0FZO2tCQUdGLDRFQUFDRztZQUFJSCxXQUFVO3NCQUNiLDRFQUFDRztnQkFBSUgsV0FBVTswQkFBT3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCLEVBQUU7TUFuQldOO0FBcUJiLDJCQUEyQjtBQUNwQixNQUFNRSxZQUFZLENBQUMsRUFDeEJwQixTQUFTLEVBQ1R3QixRQUFRLEVBSVQ7SUFDQyxxQkFDRSw4REFBQ0M7UUFBR3pCLFdBQVdaLDZDQUFFQSxDQUFDLDJDQUEyQ1k7a0JBQzFEd0I7Ozs7OztBQUdQLEVBQUU7TUFaV0o7QUFjYixpQ0FBaUM7QUFDMUIsTUFBTUUsa0JBQWtCLENBQUMsRUFDOUJ0QixTQUFTLEVBQ1R3QixRQUFRLEVBSVQ7SUFDQyxxQkFDRSw4REFBQ0U7UUFDQzFCLFdBQVdaLDZDQUFFQSxDQUNYLHlEQUNBWTtrQkFHRHdCOzs7Ozs7QUFHUCxFQUFFO01BakJXRjtBQW1CYiw2Q0FBNkM7QUFDdEMsU0FBU0s7SUFDZCxxQkFDRSw4REFBQ3hCO1FBQUlILFdBQVU7OzBCQUViLDhEQUFDRztnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUM0Qjt3QkFBRzVCLFdBQVU7a0NBQXFDOzs7Ozs7a0NBQ25ELDhEQUFDMEI7d0JBQUUxQixXQUFVO2tDQUFxQzs7Ozs7Ozs7Ozs7OzBCQU1wRCw4REFBQ0Y7Z0JBQVlDLE9BQU84Qjs7Ozs7Ozs7Ozs7O0FBRzFCO01BZmdCRjtBQWlCaEIsMkNBQTJDO0FBQzNDLE1BQU1FLFdBQVc7SUFDZjtRQUNFUixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkosTUFBTTNCLG9JQUFVQTtJQUNsQjtJQUNBO1FBQ0U2QixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkosTUFBTTFCLG1JQUFTQTtJQUNqQjtJQUNBO1FBQ0U0QixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkosTUFBTXpCLHFJQUFXQTtJQUNuQjtJQUNBO1FBQ0UyQixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkosTUFBTXhCLGlJQUFPQTtJQUNmO0lBQ0E7UUFDRTBCLE9BQU87UUFDUEUsYUFDRTtRQUNGSixNQUFNdkIsZ0lBQU1BO0lBQ2Q7SUFDQTtRQUNFeUIsT0FBTztRQUNQRSxhQUNFO1FBQ0ZKLE1BQU10QixnSUFBTUE7SUFDZDtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VydmljZXMudHN4PzEwNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vdXRpbHMvY25cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGYUR1bWJiZWxsLCBGYVJ1bm5pbmcsIEZhSGVhcnRiZWF0LCBGYUJyYWluLCBGYUxlYWYsIEZhVHJlZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tIFwicmVhY3QtaWNvbnNcIjtcblxuLy8gSG92ZXJFZmZlY3QgY29tcG9uZW50IHRvIGRpc3BsYXkgc2VydmljZXNcbmV4cG9ydCBjb25zdCBIb3ZlckVmZmVjdCA9ICh7XG4gIGl0ZW1zLFxuICBjbGFzc05hbWUsXG59OiB7XG4gIGl0ZW1zOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGljb246IEljb25UeXBlO1xuICB9W107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgbGV0IFtob3ZlcmVkSW5kZXgsIHNldEhvdmVyZWRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBweS0xMFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cCBibG9jayBwLTIgaC1mdWxsIHctZnVsbFwiXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkSW5kZXgoaWR4KX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWRJbmRleChudWxsKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7aG92ZXJlZEluZGV4ID09PSBpZHggJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgYmctWyM2NDk1RURdIGJsb2NrIHJvdW5kZWQtM3hsXCJcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD1cImhvdmVyQmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuMTUgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3tcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjE1LCBkZWxheTogMC4yIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8aXRlbS5pY29uIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtWyM2NDk1RURdXCIgLz5cbiAgICAgICAgICAgIDxDYXJkVGl0bGU+e2l0ZW0udGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPntpdGVtLmRlc2NyaXB0aW9ufTwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIENhcmQgY29tcG9uZW50IHRvIHN0eWxlIGVhY2ggc2VydmljZSBjYXJkXG5leHBvcnQgY29uc3QgQ2FyZCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInJvdW5kZWQtMnhsIGgtZnVsbCB3LWZ1bGwgcC00IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IGdyb3VwLWhvdmVyOmJvcmRlci1bIzY0OTVFRF0gcmVsYXRpdmUgei0yMFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTUwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBDb21wb25lbnQgZm9yIENhcmQgdGl0bGVcbmV4cG9ydCBjb25zdCBDYXJkVGl0bGUgPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxufToge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGg0IGNsYXNzTmFtZT17Y24oXCJ0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0cmFja2luZy13aWRlIG10LTRcIiwgY2xhc3NOYW1lKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oND5cbiAgKTtcbn07XG5cbi8vIENvbXBvbmVudCBmb3IgQ2FyZCBkZXNjcmlwdGlvblxuZXhwb3J0IGNvbnN0IENhcmREZXNjcmlwdGlvbiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8cFxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJtdC04IHRleHQtYmxhY2sgdHJhY2tpbmctd2lkZSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1zbVwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvcD5cbiAgKTtcbn07XG5cbi8vIE1haW4gU2VydmljZXMgY29tcG9uZW50IHRvIHJlbmRlciB0aGUgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNXhsIG14LWF1dG8gcHgtOCBiZy1DMUUxQzEgcHktMTBcIj5cbiAgICAgIHsvKiBUaXRsZSBTZWN0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0xMlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNFwiPk15IFBoeXNpb3RoZXJhcHkgU2VydmljZXM8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtd2hpdGUgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgQXQgb3VyIGNsaW5pYywgd2Ugb2ZmZXIgYSB2YXJpZXR5IG9mIHBoeXNpb3RoZXJhcHkgc2VydmljZXMgZGVzaWduZWQgdG8gaGVscCB5b3UgcmVjb3ZlciBhbmQgbWFpbnRhaW4gb3B0aW1hbCBoZWFsdGguIFdoZXRoZXIgeW91IG5lZWQgbWFudWFsIHRoZXJhcHksIGV4ZXJjaXNlIHByZXNjcmlwdGlvbnMsIG9yIHNwZWNpYWxpemVkIG5ldXJvbG9naWNhbCByZWhhYmlsaXRhdGlvbiwgb3VyIHNraWxsZWQgcHJvZmVzc2lvbmFscyBhcmUgaGVyZSB0byBzdXBwb3J0IHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBIb3ZlckVmZmVjdCBDb21wb25lbnQgdG8gZGlzcGxheSBzZXJ2aWNlcyAqL31cbiAgICAgIDxIb3ZlckVmZmVjdCBpdGVtcz17c2VydmljZXN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vIFNlcnZpY2VzIGFycmF5IHdpdGggZWFjaCBzZXJ2aWNlIGRldGFpbHNcbmNvbnN0IHNlcnZpY2VzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTWFudWFsIFRoZXJhcHlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU2tpbGxlZCBoYW5kcy1vbiB0ZWNobmlxdWVzIHRvIGFsbGV2aWF0ZSBwYWluIGFuZCBwcm9tb3RlIGhlYWxpbmcuXCIsXG4gICAgaWNvbjogRmFEdW1iYmVsbCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkV4ZXJjaXNlIFByZXNjcmlwdGlvblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJFdmlkZW5jZSBiYXNlZCBwcm9ncmFtcyB0byBzdHJlbmd0aGVuIG11c2NsZXMgYW5kIG1hbmFnZSBwYWluLlwiLFxuICAgIGljb246IEZhUnVubmluZyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBhaW4gTWFuYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJFdmlkZW5jZS1iYXNlZCBzdHJhdGVnaWVzIHRvIG1hbmFnZSBhY3V0ZSBhbmQgY2hyb25pYyBwYWluIGVmZmVjdGl2ZWx5LlwiLFxuICAgIGljb246IEZhSGVhcnRiZWF0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTmV1cm9sb2dpY2FsIFJlaGFiXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlNwZWNpYWxpemVkIHRlY2huaXF1ZXMgdG8gaGVscCBwYXRpZW50cyB3aXRoIG5ldXJvbG9naWNhbCBjb25kaXRpb25zIHN1Y2ggYXMgc3Ryb2tlICYgcGFya2luc29uJ3MuXCIsXG4gICAgaWNvbjogRmFCcmFpbixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwb3J0cyBUaGVyYXB5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRhcmdldGVkIHRyZWF0bWVudCBhbmQgdHJhaW5pbmcgdG8gb3B0aW1pemUgYXRobGV0aWMgcGVyZm9ybWFuY2UuXCIsXG4gICAgaWNvbjogRmFMZWFmLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiU3BpbmFsIHJlaGFiaWxpdGF0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRlY2huaXF1ZXMgdG8gaW1wcm92ZSBwb3N0dXJlLCByZWR1Y2UgcGFpbiwgYW5kIHByZXZlbnQgaW5qdXJpZXMgb2YgdGhlIHNwaW5lLlwiLFxuICAgIGljb246IEZhVHJlZSxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiY24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VTdGF0ZSIsIkZhRHVtYmJlbGwiLCJGYVJ1bm5pbmciLCJGYUhlYXJ0YmVhdCIsIkZhQnJhaW4iLCJGYUxlYWYiLCJGYVRyZWUiLCJIb3ZlckVmZmVjdCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiaG92ZXJlZEluZGV4Iiwic2V0SG92ZXJlZEluZGV4IiwiZGl2IiwibWFwIiwiaXRlbSIsImlkeCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNwYW4iLCJsYXlvdXRJZCIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImV4aXQiLCJkZWxheSIsIkNhcmQiLCJpY29uIiwiQ2FyZFRpdGxlIiwidGl0bGUiLCJDYXJkRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiaDQiLCJwIiwiU2VydmljZXMiLCJoMSIsInNlcnZpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/services.tsx\n"));

/***/ })

});