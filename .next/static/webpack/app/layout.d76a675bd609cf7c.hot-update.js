"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"1730490ccef6\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy96aXNhcnovRGVza3RvcC9jb2Rlcy9mcmVlbGFuY2UtcHJvamVjdHMvZmxpZ2h0cGhhc2Utd2ViYXBwL2FwcC9nbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjE3MzA0OTBjY2VmNlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/site-header.tsx":
/*!************************************!*\
  !*** ./components/site-header.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SiteHeader: () => (/* binding */ SiteHeader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Menu!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/sheet */ \"(app-pages-browser)/./components/ui/sheet.tsx\");\n/* __next_internal_client_entry_do_not_use__ SiteHeader auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SiteHeader() {\n    _s();\n    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"SiteHeader.useEffect\": ()=>{\n            const handleScroll = {\n                \"SiteHeader.useEffect.handleScroll\": ()=>{\n                    const isScrolled = window.scrollY > 10;\n                    if (isScrolled !== scrolled) {\n                        setScrolled(isScrolled);\n                    }\n                }\n            }[\"SiteHeader.useEffect.handleScroll\"];\n            window.addEventListener(\"scroll\", handleScroll, {\n                passive: true\n            });\n            handleScroll(); // Check initial scroll position\n            return ({\n                \"SiteHeader.useEffect\": ()=>{\n                    window.removeEventListener(\"scroll\", handleScroll);\n                }\n            })[\"SiteHeader.useEffect\"];\n        }\n    }[\"SiteHeader.useEffect\"], [\n        scrolled\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 left-0 right-0 z-50 transition-all duration-300 \".concat(scrolled ? \"bg-black/80 backdrop-blur-md\" : \"bg-transparent\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 glass-effect transition-opacity duration-300 \".concat(scrolled ? \"opacity-100\" : \"opacity-0\")\n            }, void 0, false, {\n                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 relative z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-20 items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \"flex items-center space-x-2 transition-transform duration-300 hover:scale-105\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: \"/logo/Asset 6@3x-8.png\",\n                                alt: \"FlightPhase\",\n                                width: 160,\n                                height: 36,\n                                className: \"h-8 w-auto\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"hidden md:flex items-center space-x-10\",\n                            children: [\n                                {\n                                    href: \"#online-program\",\n                                    label: \"Transformation Program\"\n                                },\n                                {\n                                    href: \"#about\",\n                                    label: \"About\"\n                                },\n                                {\n                                    href: \"#training\",\n                                    label: \"Training\"\n                                },\n                                {\n                                    href: \"#assessment\",\n                                    label: \"Assessment\"\n                                }\n                            ].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: item.href,\n                                    className: \"text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-110 relative group\",\n                                    children: [\n                                        item.label,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E0B4C] via-[#4B9EFF] to-[#0B4FFF] group-hover:w-full transition-all duration-300\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, item.href, true, {\n                                    fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex items-center space-x-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#online-program\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    className: \"gradient-button text-white rounded-full px-8 h-11 transition-all duration-300 hover:scale-105 gradient-glow\",\n                                    children: \"Get The Course\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.Sheet, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            variant: \"outline\",\n                                            size: \"icon\",\n                                            className: \"md:hidden glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                    className: \"h-5 w-5\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    children: \"Toggle menu\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_sheet__WEBPACK_IMPORTED_MODULE_5__.SheetContent, {\n                                        side: \"right\",\n                                        className: \"gradient-primary border-l border-white/10\",\n                                        title: \"Main Navigation\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                                                className: \"flex flex-col gap-6 mt-10 relative z-10\",\n                                                children: [\n                                                    {\n                                                        href: \"#online-program\",\n                                                        label: \"Transformation Program\"\n                                                    },\n                                                    {\n                                                        href: \"#about\",\n                                                        label: \"About\"\n                                                    },\n                                                    {\n                                                        href: \"#training\",\n                                                        label: \"Training\"\n                                                    },\n                                                    {\n                                                        href: \"#assessment\",\n                                                        label: \"Assessment\"\n                                                    }\n                                                ].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: item.href,\n                                                        className: \"text-lg font-medium text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 relative group\",\n                                                        children: [\n                                                            item.label,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E0B4C] via-[#4B9EFF] to-[#0B4FFF] group-hover:w-full transition-all duration-300\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                                lineNumber: 105,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, item.href, true, {\n                                                        fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-8\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"#online-program\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium w-full\",\n                                                        children: \"Get The Course\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                        lineNumber: 112,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zisarz/Desktop/codes/freelance-projects/flightphase-webapp/components/site-header.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(SiteHeader, \"tQtW9FyKD+Ut/6k+f0BCbABprL4=\");\n_c = SiteHeader;\nvar _c;\n$RefreshReg$(_c, \"SiteHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2l0ZS1oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNmO0FBQ0U7QUFDaUI7QUFDWjtBQUNzQztBQUVuRSxTQUFTUzs7SUFDZCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQTtnQ0FBQztZQUNSLE1BQU1ZO3FEQUFlO29CQUNuQixNQUFNQyxhQUFhQyxPQUFPQyxPQUFPLEdBQUc7b0JBQ3BDLElBQUlGLGVBQWVILFVBQVU7d0JBQzNCQyxZQUFZRTtvQkFDZDtnQkFDRjs7WUFFQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUosY0FBYztnQkFBRUssU0FBUztZQUFLO1lBQ2hFTCxnQkFBZ0IsZ0NBQWdDO1lBRWhEO3dDQUFPO29CQUNMRSxPQUFPSSxtQkFBbUIsQ0FBQyxVQUFVTjtnQkFDdkM7O1FBQ0Y7K0JBQUc7UUFBQ0Y7S0FBUztJQUViLHFCQUNFLDhEQUFDUztRQUFPQyxXQUFXLCtEQUE0SCxPQUE3RFYsV0FBVyxpQ0FBaUM7OzBCQUM1SCw4REFBQ1c7Z0JBQUlELFdBQVcsaUVBQXdHLE9BQXZDVixXQUFXLGdCQUFnQjs7Ozs7OzBCQUU1Ryw4REFBQ1c7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ2xCLGtEQUFJQTs0QkFDSG9CLE1BQUs7NEJBQ0xGLFdBQVU7c0NBRVYsNEVBQUNqQixrREFBS0E7Z0NBQ0pvQixLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSTixXQUFVO2dDQUNWTyxRQUFROzs7Ozs7Ozs7OztzQ0FJWiw4REFBQ0M7NEJBQUlSLFdBQVU7c0NBQ1o7Z0NBQ0M7b0NBQUVFLE1BQU07b0NBQW1CTyxPQUFPO2dDQUF5QjtnQ0FDM0Q7b0NBQUVQLE1BQU07b0NBQVVPLE9BQU87Z0NBQVE7Z0NBQ2pDO29DQUFFUCxNQUFNO29DQUFhTyxPQUFPO2dDQUFXO2dDQUN2QztvQ0FBRVAsTUFBTTtvQ0FBZU8sT0FBTztnQ0FBYTs2QkFDNUMsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxxQkFDSiw4REFBQzdCLGtEQUFJQTtvQ0FFSG9CLE1BQU1TLEtBQUtULElBQUk7b0NBQ2ZGLFdBQVU7O3dDQUVUVyxLQUFLRixLQUFLO3NEQUNYLDhEQUFDRzs0Q0FBS1osV0FBVTs7Ozs7OzttQ0FMWFcsS0FBS1QsSUFBSTs7Ozs7Ozs7OztzQ0FVcEIsOERBQUNEOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDbEIsa0RBQUlBO2dDQUFDb0IsTUFBSzswQ0FDVCw0RUFBQ2xCLHlEQUFNQTtvQ0FBQ2dCLFdBQVU7OENBQThHOzs7Ozs7Ozs7Ozs7Ozs7O3NDQU1wSSw4REFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNkLHVEQUFLQTs7a0RBQ0osOERBQUNFLDhEQUFZQTt3Q0FBQ3lCLE9BQU87a0RBQ25CLDRFQUFDN0IseURBQU1BOzRDQUNMOEIsU0FBUTs0Q0FDUkMsTUFBSzs0Q0FDTGYsV0FBVTs7OERBRVYsOERBQUNmLGdGQUFJQTtvREFBQ2UsV0FBVTs7Ozs7OzhEQUNoQiw4REFBQ1k7b0RBQUtaLFdBQVU7OERBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUc5Qiw4REFBQ2IsOERBQVlBO3dDQUNYNkIsTUFBSzt3Q0FDTGhCLFdBQVU7d0NBQ1ZpQixPQUFNOzswREFFTiw4REFBQ1Q7Z0RBQUlSLFdBQVU7MERBQ1o7b0RBQ0M7d0RBQUVFLE1BQU07d0RBQW1CTyxPQUFPO29EQUF5QjtvREFDM0Q7d0RBQUVQLE1BQU07d0RBQVVPLE9BQU87b0RBQVE7b0RBQ2pDO3dEQUFFUCxNQUFNO3dEQUFhTyxPQUFPO29EQUFXO29EQUN2Qzt3REFBRVAsTUFBTTt3REFBZU8sT0FBTztvREFBYTtpREFDNUMsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxxQkFDSiw4REFBQzdCLGtEQUFJQTt3REFFSG9CLE1BQU1TLEtBQUtULElBQUk7d0RBQ2ZGLFdBQVU7OzREQUVUVyxLQUFLRixLQUFLOzBFQUNYLDhEQUFDRztnRUFBS1osV0FBVTs7Ozs7Ozt1REFMWFcsS0FBS1QsSUFBSTs7Ozs7Ozs7OzswREFVcEIsOERBQUNEO2dEQUFJRCxXQUFVOzBEQUNiLDRFQUFDbEIsa0RBQUlBO29EQUFDb0IsTUFBSzs4REFDVCw0RUFBQ2dCO3dEQUFPbEIsV0FBVTtrRUFBOEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXBKO0dBbEhnQlg7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy96aXNhcnovRGVza3RvcC9jb2Rlcy9mcmVlbGFuY2UtcHJvamVjdHMvZmxpZ2h0cGhhc2Utd2ViYXBwL2NvbXBvbmVudHMvc2l0ZS1oZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgU2hlZXQsIFNoZWV0Q29udGVudCwgU2hlZXRUcmlnZ2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zaGVldFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2l0ZUhlYWRlcigpIHtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpc1Njcm9sbGVkID0gd2luZG93LnNjcm9sbFkgPiAxMDtcbiAgICAgIGlmIChpc1Njcm9sbGVkICE9PSBzY3JvbGxlZCkge1xuICAgICAgICBzZXRTY3JvbGxlZChpc1Njcm9sbGVkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgaGFuZGxlU2Nyb2xsKCk7IC8vIENoZWNrIGluaXRpYWwgc2Nyb2xsIHBvc2l0aW9uXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbc2Nyb2xsZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtzY3JvbGxlZCA/IFwiYmctYmxhY2svODAgYmFja2Ryb3AtYmx1ci1tZFwiIDogXCJiZy10cmFuc3BhcmVudFwifWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGdsYXNzLWVmZmVjdCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMzAwICR7c2Nyb2xsZWQgPyBcIm9wYWNpdHktMTAwXCIgOiBcIm9wYWNpdHktMFwifWB9PjwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL2xvZ28vQXNzZXQgNkAzeC04LnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIkZsaWdodFBoYXNlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezE2MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszNn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctYXV0b1wiXG4gICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMTBcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjb25saW5lLXByb2dyYW1cIiwgbGFiZWw6IFwiVHJhbnNmb3JtYXRpb24gUHJvZ3JhbVwiIH0sXG4gICAgICAgICAgICAgIHsgaHJlZjogXCIjYWJvdXRcIiwgbGFiZWw6IFwiQWJvdXRcIiB9LFxuICAgICAgICAgICAgICB7IGhyZWY6IFwiI3RyYWluaW5nXCIsIGxhYmVsOiBcIlRyYWluaW5nXCIgfSxcbiAgICAgICAgICAgICAgeyBocmVmOiBcIiNhc3Nlc3NtZW50XCIsIGxhYmVsOiBcIkFzc2Vzc21lbnRcIiB9XG4gICAgICAgICAgICBdLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTExMCByZWxhdGl2ZSBncm91cFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTIgbGVmdC0wIHctMCBoLTAuNSBiZy1ncmFkaWVudC10by1yIGZyb20tWyMxRTBCNENdIHZpYS1bIzRCOUVGRl0gdG8tWyMwQjRGRkZdIGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiI29ubGluZS1wcm9ncmFtXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZ3JhZGllbnQtYnV0dG9uIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHB4LTggaC0xMSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1IGdyYWRpZW50LWdsb3dcIj5cbiAgICAgICAgICAgICAgICBHZXQgVGhlIENvdXJzZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxTaGVldD5cbiAgICAgICAgICAgICAgPFNoZWV0VHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBnbGFzcy1lZmZlY3QgaG92ZXI6Ymctd2hpdGUvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTExMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1lbnUgY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvU2hlZXRUcmlnZ2VyPlxuICAgICAgICAgICAgICA8U2hlZXRDb250ZW50XG4gICAgICAgICAgICAgICAgc2lkZT1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmFkaWVudC1wcmltYXJ5IGJvcmRlci1sIGJvcmRlci13aGl0ZS8xMFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJNYWluIE5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC02IG10LTEwIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgIHsgaHJlZjogXCIjb25saW5lLXByb2dyYW1cIiwgbGFiZWw6IFwiVHJhbnNmb3JtYXRpb24gUHJvZ3JhbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgaHJlZjogXCIjYWJvdXRcIiwgbGFiZWw6IFwiQWJvdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICB7IGhyZWY6IFwiI3RyYWluaW5nXCIsIGxhYmVsOiBcIlRyYWluaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBocmVmOiBcIiNhc3Nlc3NtZW50XCIsIGxhYmVsOiBcIkFzc2Vzc21lbnRcIiB9XG4gICAgICAgICAgICAgICAgICBdLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlLzgwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnRyYW5zbGF0ZS14LTIgcmVsYXRpdmUgZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0yIGxlZnQtMCB3LTAgaC0wLjUgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMUUwQjRDXSB2aWEtWyM0QjlFRkZdIHRvLVsjMEI0RkZGXSBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNvbmxpbmUtcHJvZ3JhbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTYwMCB0by1wdXJwbGUtNjAwIHRleHQtd2hpdGUgcHgtNiBweS0zIHJvdW5kZWQtZnVsbCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgR2V0IFRoZSBDb3Vyc2VcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU2hlZXRDb250ZW50PlxuICAgICAgICAgICAgPC9TaGVldD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsIkJ1dHRvbiIsIk1lbnUiLCJTaGVldCIsIlNoZWV0Q29udGVudCIsIlNoZWV0VHJpZ2dlciIsIlNpdGVIZWFkZXIiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwiaXNTY3JvbGxlZCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwcmlvcml0eSIsIm5hdiIsImxhYmVsIiwibWFwIiwiaXRlbSIsInNwYW4iLCJhc0NoaWxkIiwidmFyaWFudCIsInNpemUiLCJzaWRlIiwidGl0bGUiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/site-header.tsx\n"));

/***/ })

});