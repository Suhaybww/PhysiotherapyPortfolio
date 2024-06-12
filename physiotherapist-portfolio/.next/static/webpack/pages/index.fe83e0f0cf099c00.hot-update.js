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

/***/ "./components/text-area.tsx":
/*!**********************************!*\
  !*** ./components/text-area.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Textarea: function() { return /* binding */ Textarea; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cn */ \"./utils/cn.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n// text-area.tsx\n/* __next_internal_client_entry_do_not_use__ Textarea auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Textarea = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = _s(({ className, ...props }, ref)=>{\n    _s();\n    const radius = 100; // Adjust this value to change the radius of the hover effect\n    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    let mouseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0);\n    let mouseY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0);\n    function handleMouseMove({ currentTarget, clientX, clientY }) {\n        let { left, top } = currentTarget.getBoundingClientRect();\n        mouseX.set(clientX - left);\n        mouseY.set(clientY - top);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        style: {\n            background: (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionTemplate)`\n            radial-gradient(\n              ${visible ? radius + \"px\" : \"0px\"} circle at ${mouseX}px ${mouseY}px,\n              var(--blue-500),\n              transparent 80%\n            )\n          `\n        },\n        onMouseMove: handleMouseMove,\n        onMouseEnter: ()=>setVisible(true),\n        onMouseLeave: ()=>setVisible(false),\n        className: \"p-[2px] rounded-lg transition duration-300 group/textarea\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n            className: (0,_utils_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(`flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \n             focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n             disabled:cursor-not-allowed disabled:opacity-50\n             dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n             group-hover/textarea:shadow-none transition duration-400\n             `, className),\n            ref: ref,\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/text-area.tsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Development/PhysiotherapyPortfolio/physiotherapist-portfolio/components/text-area.tsx\",\n        lineNumber: 25,\n        columnNumber: 7\n    }, undefined);\n}, \"kwEJCWKioTVYS0Acip56RhuD83s=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue\n    ];\n})), \"kwEJCWKioTVYS0Acip56RhuD83s=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue\n    ];\n});\n_c1 = Textarea;\nTextarea.displayName = \"Textarea\";\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Textarea$React.forwardRef\");\n$RefreshReg$(_c1, \"Textarea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RleHQtYXJlYS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7O0FBRWU7QUFDRTtBQUN5QztBQUkxRSxNQUFNSyx5QkFBV0wsR0FBQUEsNkNBQWdCLFNBQy9CLENBQUMsRUFBRU8sU0FBUyxFQUFFLEdBQUdDLE9BQU8sRUFBRUM7O0lBQ3hCLE1BQU1DLFNBQVMsS0FBSyw2REFBNkQ7SUFDakYsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLDJDQUFjLENBQUM7SUFFN0MsSUFBSWMsU0FBU1gsNkRBQWNBLENBQUM7SUFDNUIsSUFBSVksU0FBU1osNkRBQWNBLENBQUM7SUFFNUIsU0FBU2EsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQU87UUFDL0QsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRSxHQUFHSixjQUFjSyxxQkFBcUI7UUFFdkRSLE9BQU9TLEdBQUcsQ0FBQ0wsVUFBVUU7UUFDckJMLE9BQU9RLEdBQUcsQ0FBQ0osVUFBVUU7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ2pCLGlEQUFNQSxDQUFDb0IsR0FBRztRQUNUQyxPQUFPO1lBQ0xDLFlBQVl4QixnRUFBaUIsQ0FBQzs7Y0FFMUIsRUFBRVMsVUFBVUQsU0FBUyxPQUFPLE1BQU0sV0FBVyxFQUFFSSxPQUFPLEdBQUcsRUFBRUMsT0FBTzs7OztVQUl0RSxDQUFDO1FBQ0g7UUFDQVksYUFBYVg7UUFDYlksY0FBYyxJQUFNaEIsV0FBVztRQUMvQmlCLGNBQWMsSUFBTWpCLFdBQVc7UUFDL0JMLFdBQVU7a0JBRVYsNEVBQUN1QjtZQUNDdkIsV0FBV04sNkNBQUVBLENBQ1gsQ0FBQzs7Ozs7YUFLQSxDQUFDLEVBQ0ZNO1lBRUZFLEtBQUtBO1lBQ0osR0FBR0QsS0FBSzs7Ozs7Ozs7Ozs7QUFJakI7O1FBekNlTCx5REFBY0E7UUFDZEEseURBQWNBOzs7O1FBRGRBLHlEQUFjQTtRQUNkQSx5REFBY0E7Ozs7QUEwQy9CRSxTQUFTMEIsV0FBVyxHQUFHO0FBRUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXh0LWFyZWEudHN4PzNjY2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGV4dC1hcmVhLnRzeFxuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uL3V0aWxzL2NuXCI7XG5pbXBvcnQgeyB1c2VNb3Rpb25UZW1wbGF0ZSwgdXNlTW90aW9uVmFsdWUsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dGFyZWFQcm9wcyBleHRlbmRzIFJlYWN0LlRleHRhcmVhSFRNTEF0dHJpYnV0ZXM8SFRNTFRleHRBcmVhRWxlbWVudD4ge31cblxuY29uc3QgVGV4dGFyZWEgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQsIFRleHRhcmVhUHJvcHM+KFxuICAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHJhZGl1cyA9IDEwMDsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgdG8gY2hhbmdlIHRoZSByYWRpdXMgb2YgdGhlIGhvdmVyIGVmZmVjdFxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBtb3VzZVggPSB1c2VNb3Rpb25WYWx1ZSgwKTtcbiAgICBsZXQgbW91c2VZID0gdXNlTW90aW9uVmFsdWUoMCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoeyBjdXJyZW50VGFyZ2V0LCBjbGllbnRYLCBjbGllbnRZIH06IGFueSkge1xuICAgICAgbGV0IHsgbGVmdCwgdG9wIH0gPSBjdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBtb3VzZVguc2V0KGNsaWVudFggLSBsZWZ0KTtcbiAgICAgIG1vdXNlWS5zZXQoY2xpZW50WSAtIHRvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXNlTW90aW9uVGVtcGxhdGVgXG4gICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoXG4gICAgICAgICAgICAgICR7dmlzaWJsZSA/IHJhZGl1cyArIFwicHhcIiA6IFwiMHB4XCJ9IGNpcmNsZSBhdCAke21vdXNlWH1weCAke21vdXNlWX1weCxcbiAgICAgICAgICAgICAgdmFyKC0tYmx1ZS01MDApLFxuICAgICAgICAgICAgICB0cmFuc3BhcmVudCA4MCVcbiAgICAgICAgICAgIClcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFZpc2libGUodHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cInAtWzJweF0gcm91bmRlZC1sZyB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBncm91cC90ZXh0YXJlYVwiXG4gICAgICA+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBgZmxleCB3LWZ1bGwgYm9yZGVyLW5vbmUgYmctZ3JheS01MCBkYXJrOmJnLXppbmMtODAwIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIHNoYWRvdy1pbnB1dCByb3VuZGVkLW1kIHB4LTMgcHktMiB0ZXh0LXNtIHBsYWNlaG9sZGVyOnRleHQtbmV1dHJhbC00MDAgZGFyazpwbGFjZWhvbGRlci10ZXh0LW5ldXRyYWwtNjAwIFxuICAgICAgICAgICAgIGZvY3VzLXZpc2libGU6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy1bMnB4XSBmb2N1cy12aXNpYmxlOnJpbmctbmV1dHJhbC00MDAgZGFyazpmb2N1cy12aXNpYmxlOnJpbmctbmV1dHJhbC02MDBcbiAgICAgICAgICAgICBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MFxuICAgICAgICAgICAgIGRhcms6c2hhZG93LVswcHhfMHB4XzFweF8xcHhfdmFyKC0tbmV1dHJhbC03MDApXVxuICAgICAgICAgICAgIGdyb3VwLWhvdmVyL3RleHRhcmVhOnNoYWRvdy1ub25lIHRyYW5zaXRpb24gZHVyYXRpb24tNDAwXG4gICAgICAgICAgICAgYCxcbiAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICAgICl9XG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG4gIH1cbik7XG5UZXh0YXJlYS5kaXNwbGF5TmFtZSA9IFwiVGV4dGFyZWFcIjtcblxuZXhwb3J0IHsgVGV4dGFyZWEgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNuIiwidXNlTW90aW9uVGVtcGxhdGUiLCJ1c2VNb3Rpb25WYWx1ZSIsIm1vdGlvbiIsIlRleHRhcmVhIiwiZm9yd2FyZFJlZiIsImNsYXNzTmFtZSIsInByb3BzIiwicmVmIiwicmFkaXVzIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsIm1vdXNlWCIsIm1vdXNlWSIsImhhbmRsZU1vdXNlTW92ZSIsImN1cnJlbnRUYXJnZXQiLCJjbGllbnRYIiwiY2xpZW50WSIsImxlZnQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzZXQiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRleHRhcmVhIiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/text-area.tsx\n"));

/***/ })

});