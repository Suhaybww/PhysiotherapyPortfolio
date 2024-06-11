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

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _animated_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animated-tooltip */ \"./components/animated-tooltip.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Header = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"bg-primary text-white p-4 shadow-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-3xl font-bold flex items-center space-x-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animated_tooltip__WEBPACK_IMPORTED_MODULE_3__.AnimatedTooltip, {}, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/header.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/header.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_2__.NavBar, {}, void 0, false, {\n                    fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/header.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/header.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/header.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEI7QUFDUTtBQUNtQjtBQUVyRCxNQUFNRyxTQUFtQjtJQUN2QixxQkFDRSw4REFBQ0M7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0gsOERBQWVBOzs7Ozs7Ozs7OzhCQUVsQiw4REFBQ0QsMkNBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7S0FYTUU7QUFhTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuL05hdmJhcic7XG5pbXBvcnQgeyBBbmltYXRlZFRvb2x0aXAgfSBmcm9tICcuL2FuaW1hdGVkLXRvb2x0aXAnO1xuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHAtNCBzaGFkb3ctbGdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgIDxBbmltYXRlZFRvb2x0aXAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2QmFyIiwiQW5pbWF0ZWRUb29sdGlwIiwiSGVhZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/header */ \"./components/header.tsx\");\n/* harmony import */ var components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/footer */ \"./components/footer.tsx\");\n/* harmony import */ var components_background_beams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/background-beams */ \"./components/background-beams.tsx\");\n/* harmony import */ var components_about_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/about-section */ \"./components/about-section.tsx\");\n\n\n\n\n\n// import { BentoGrid, BentoGridItem } from 'components/bento-grid';\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Physiotherapist Portfolio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow bg-primary text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"hero\",\n                        className: \"relative h-screen flex items-center justify-center bg-primary text-white overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative z-10 max-w-2xl mx-auto text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-5xl font-bold\",\n                                        children: [\n                                            \"Welcome to \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-accent\",\n                                                children: \"Abdullahi's\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                                lineNumber: 21,\n                                                columnNumber: 26\n                                            }, this),\n                                            \" Portfolio\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-4 text-xl\",\n                                        children: [\n                                            \"Discover the healing power of \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-accent\",\n                                                children: \"physiotherapy\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 45\n                                            }, this),\n                                            \" and experience the benefits of personalized care. Trust in \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-accent\",\n                                                children: \"Abdullahi's\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 155\n                                            }, this),\n                                            \" expertise to guide you on your path to recovery and wellness.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_background_beams__WEBPACK_IMPORTED_MODULE_4__.BackgroundBeams, {\n                                className: \"absolute inset-0 z-0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"about\",\n                        className: \"py-16 bg-primary\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"max-w-4xl mx-auto text-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-4xl font-bold mb-8 text-ffffff\",\n                                    children: \"About Me\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_about_section__WEBPACK_IMPORTED_MODULE_5__.BentoGridSecondDemo, {}, void 0, false, {\n                                    fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"home\",\n                        className: \"h-screen flex items-center justify-center bg-gray-100\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl text-gray-800\",\n                            children: \"Home Section\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"services\",\n                        className: \"h-screen flex items-center justify-center bg-gray-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl text-gray-800\",\n                            children: \"Services Section\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        id: \"contact\",\n                        className: \"h-screen flex items-center justify-center bg-gray-400\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl text-gray-800\",\n                            children: \"Contact Section\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNVO0FBQ0E7QUFDdUI7QUFDOUQsb0VBQW9FO0FBQ0w7QUFFaEQsU0FBU0s7SUFDdEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUCxrREFBSUE7O2tDQUNILDhEQUFDUTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1YseURBQU1BOzs7OzswQkFDUCw4REFBQ1c7Z0JBQUtMLFdBQVU7O2tDQUVkLDhEQUFDTTt3QkFBUUMsSUFBRzt3QkFBT1AsV0FBVTs7MENBQzNCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNRO3dDQUFHUixXQUFVOzs0Q0FBcUI7MERBQ3RCLDhEQUFDUztnREFBS1QsV0FBVTswREFBYzs7Ozs7OzRDQUFrQjs7Ozs7OztrREFFN0QsOERBQUNVO3dDQUFFVixXQUFVOzs0Q0FBZTswREFDSSw4REFBQ1M7Z0RBQUtULFdBQVU7MERBQWM7Ozs7Ozs0Q0FBb0I7MERBQTRELDhEQUFDUztnREFBS1QsV0FBVTswREFBYzs7Ozs7OzRDQUFrQjs7Ozs7Ozs7Ozs7OzswQ0FHaE0sOERBQUNKLHdFQUFlQTtnQ0FBQ0ksV0FBVTs7Ozs7Ozs7Ozs7O2tDQUk3Qiw4REFBQ007d0JBQVFDLElBQUc7d0JBQVFQLFdBQVU7a0NBQzVCLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNXO29DQUFHWCxXQUFVOzhDQUFzQzs7Ozs7OzhDQUVwRCw4REFBQ0gseUVBQW1CQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLeEIsOERBQUNTO3dCQUFRQyxJQUFHO3dCQUFPUCxXQUFVO2tDQUMzQiw0RUFBQ1E7NEJBQUdSLFdBQVU7c0NBQXlCOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNNO3dCQUFRQyxJQUFHO3dCQUFXUCxXQUFVO2tDQUMvQiw0RUFBQ1E7NEJBQUdSLFdBQVU7c0NBQXlCOzs7Ozs7Ozs7OztrQ0FFekMsOERBQUNNO3dCQUFRQyxJQUFHO3dCQUFVUCxXQUFVO2tDQUM5Qiw0RUFBQ1E7NEJBQUdSLFdBQVU7c0NBQXlCOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHM0MsOERBQUNMLHlEQUFNQTs7Ozs7Ozs7Ozs7QUFHYjtLQTdDd0JHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IHsgQmFja2dyb3VuZEJlYW1zIH0gZnJvbSAnY29tcG9uZW50cy9iYWNrZ3JvdW5kLWJlYW1zJztcbi8vIGltcG9ydCB7IEJlbnRvR3JpZCwgQmVudG9HcmlkSXRlbSB9IGZyb20gJ2NvbXBvbmVudHMvYmVudG8tZ3JpZCc7XG5pbXBvcnQgeyBCZW50b0dyaWRTZWNvbmREZW1vIH0gZnJvbSAnY29tcG9uZW50cy9hYm91dC1zZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBoeXNpb3RoZXJhcGlzdCBQb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgYmctcHJpbWFyeSB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIHsvKiBIZXJvIFNlY3Rpb24gKi99XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbWF4LXctMnhsIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgV2VsY29tZSB0byA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiPkFiZHVsbGFoaSdzPC9zcGFuPiBQb3J0Zm9saW9cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQteGxcIj5cbiAgICAgICAgICAgICAgRGlzY292ZXIgdGhlIGhlYWxpbmcgcG93ZXIgb2YgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hY2NlbnRcIj5waHlzaW90aGVyYXB5PC9zcGFuPiBhbmQgZXhwZXJpZW5jZSB0aGUgYmVuZWZpdHMgb2YgcGVyc29uYWxpemVkIGNhcmUuIFRydXN0IGluIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYWNjZW50XCI+QWJkdWxsYWhpJ3M8L3NwYW4+IGV4cGVydGlzZSB0byBndWlkZSB5b3Ugb24geW91ciBwYXRoIHRvIHJlY292ZXJ5IGFuZCB3ZWxsbmVzcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QmFja2dyb3VuZEJlYW1zIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgei0wXCIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBBYm91dCBTZWN0aW9uICovfVxuICAgICAgICA8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwicHktMTYgYmctcHJpbWFyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItOCB0ZXh0LWZmZmZmZlwiPkFib3V0IE1lPC9oMj5cbiAgICAgICAgICAgIHsvKiBCZW50b0dyaWQgY29tcG9uZW50IGltcG9ydGVkIGZyb20gYWJvdXQtbWUudHN4ICovfVxuICAgICAgICAgICAgPEJlbnRvR3JpZFNlY29uZERlbW8gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBSZW1haW5pbmcgU2VjdGlvbnMgKi99XG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT1cImgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtZ3JheS04MDBcIj5Ib21lIFNlY3Rpb248L2gxPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTMwMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWdyYXktODAwXCI+U2VydmljZXMgU2VjdGlvbjwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS00MDBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC1ncmF5LTgwMFwiPkNvbnRhY3QgU2VjdGlvbjwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsIkJhY2tncm91bmRCZWFtcyIsIkJlbnRvR3JpZFNlY29uZERlbW8iLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzZWN0aW9uIiwiaWQiLCJoMSIsInNwYW4iLCJwIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});