"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail",{

/***/ "./src/pages/detail.js":
/*!*****************************!*\
  !*** ./src/pages/detail.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_albums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/albums */ \"./src/data/albums.js\");\n/* harmony import */ var _web5_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web5/api */ \"./node_modules/@web5/api/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/avatar */ \"./src/components/ui/avatar.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/button */ \"./src/components/ui/button.jsx\");\n/* harmony import */ var _components_ui_scroll_area__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/ui/scroll-area */ \"./src/components/ui/scroll-area.jsx\");\n/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/ui/separator */ \"./src/components/ui/separator.jsx\");\n/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/tabs */ \"./src/components/ui/tabs.jsx\");\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ui/dialog */ \"./src/components/ui/dialog.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/ui/input */ \"./src/components/ui/input.jsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/ui/label */ \"./src/components/ui/label.jsx\");\n/* harmony import */ var _widgets_menu_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../widgets/menu.jsx */ \"./src/widgets/menu.jsx\");\n/* harmony import */ var _widgets_sidebar_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../widgets/sidebar.jsx */ \"./src/widgets/sidebar.jsx\");\n/* harmony import */ var _data_playlists__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/playlists */ \"./src/data/playlists.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction About() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    const item = _data_albums__WEBPACK_IMPORTED_MODULE_3__.listenNowAlbums[id - 1];\n    var _item_cover, _item_name;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:block\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_menu_jsx__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-t\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-background\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid lg:grid-cols-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgets_sidebar_jsx__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                                    playlists: _data_playlists__WEBPACK_IMPORTED_MODULE_16__.playlists,\n                                    className: \"hidden lg:block\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-span-3 lg:col-span-4 lg:border-l\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-full px-4 py-6 lg:px-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-between\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"space-y-1\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"text-2xl font-semibold tracking-tight\",\n                                                            children: item.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                            lineNumber: 52,\n                                                            columnNumber: 27\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-sm text-muted-foreground\",\n                                                            children: item.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_separator__WEBPACK_IMPORTED_MODULE_9__.Separator, {\n                                                className: \"my-4\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 23\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center space-x-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: (_item_cover = item.cover) !== null && _item_cover !== void 0 ? _item_cover : \"\",\n                                                        alt: (_item_name = item.name) !== null && _item_name !== void 0 ? _item_name : \"\",\n                                                        aspectRatio: \"portrait\",\n                                                        width: 250,\n                                                        height: 330,\n                                                        className: cn(\"h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-sm font-medium leading-none\",\n                                                                children: \"Jackson Lee\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 15\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-sm text-muted-foreground\",\n                                                                children: \"p@example.com\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                                lineNumber: 74,\n                                                                columnNumber: 15\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 13\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 23\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vandycklai/Developer/muzik5/src/pages/detail.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(About, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNUO0FBQ2tCO0FBRWY7QUFDVztBQUVnQztBQUM3QjtBQUNvQjtBQUNkO0FBTXhCO0FBU0U7QUFDYztBQUNBO0FBRVA7QUFDTTtBQUNDO0FBRzlCLFNBQVM2Qjs7SUFDcEIsTUFBTUMsU0FBUzlCLHNEQUFTQTtJQUN4QixNQUFNLEVBQUUrQixFQUFFLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUUzQixNQUFNQyxPQUFPL0IseURBQWUsQ0FBQzZCLEtBQUssRUFBRTtRQXdCckJFLGFBQ0FBO0lBeEJmLHFCQUNBO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ1QsMERBQUlBOzs7Ozs4QkFDTCw4REFBQ1E7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNSLDZEQUFPQTtvQ0FBQ0MsV0FBV0EsdURBQVNBO29DQUFFTyxXQUFVOzs7Ozs7OENBQ3pDLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNULDhEQUFDRDtnREFBSUMsV0FBVTswREFDYiw0RUFBQ0Q7b0RBQUlDLFdBQVU7O3NFQUNiLDhEQUFDQzs0REFBR0QsV0FBVTtzRUFDWEYsS0FBS0ksSUFBSTs7Ozs7O3NFQUVaLDhEQUFDQzs0REFBRUgsV0FBVTtzRUFDVkYsS0FBS00sV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBSXZCLDhEQUFDM0IsK0RBQVNBO2dEQUFDdUIsV0FBVTs7Ozs7OzBEQUNyQiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNmLDhEQUFDbEMsbURBQUtBO3dEQUNkdUMsS0FBS1AsQ0FBQUEsY0FBQUEsS0FBS1EsS0FBSyxjQUFWUix5QkFBQUEsY0FBYzt3REFDbkJTLEtBQUtULENBQUFBLGFBQUFBLEtBQUtJLElBQUksY0FBVEosd0JBQUFBLGFBQWE7d0RBQ2xCVSxhQUFZO3dEQUNNQyxPQUFPO3dEQUNQQyxRQUFRO3dEQUMxQlYsV0FBV1csR0FDVDs7Ozs7O2tFQUdKLDhEQUFDWjs7MEVBQ0MsOERBQUNJO2dFQUFFSCxXQUFVOzBFQUFtQzs7Ozs7OzBFQUNoRCw4REFBQ0c7Z0VBQUVILFdBQVU7MEVBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzNEO0dBbER3Qk47O1FBQ0w3QixrREFBU0E7OztLQURKNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RldGFpbC5qcz9kN2ViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IGxpc3Rlbk5vd0FsYnVtcyB9IGZyb20gXCIuLi9kYXRhL2FsYnVtc1wiXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgeyBXZWI1IH0gZnJvbSBcIkB3ZWI1L2FwaVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckZhbGxiYWNrLCBBdmF0YXJJbWFnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYXZhdGFyXCJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcbmltcG9ydCB7IFNjcm9sbEFyZWEsIFNjcm9sbEJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2Nyb2xsLWFyZWFcIlxuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXBhcmF0b3JcIlxuaW1wb3J0IHtcbiAgVGFicyxcbiAgVGFic0NvbnRlbnQsXG4gIFRhYnNMaXN0LFxuICBUYWJzVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90YWJzXCJcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nQ29udGVudCxcbiAgRGlhbG9nRGVzY3JpcHRpb24sXG4gIERpYWxvZ0Zvb3RlcixcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dUaXRsZSxcbiAgRGlhbG9nVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiXG5cbmltcG9ydCBNZW51IGZyb20gXCIuLi93aWRnZXRzL21lbnUuanN4XCJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi93aWRnZXRzL3NpZGViYXIuanN4XCJcbmltcG9ydCB7IHBsYXlsaXN0cyB9IGZyb20gXCIuLi9kYXRhL3BsYXlsaXN0c1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKXtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3QgaXRlbSA9IGxpc3Rlbk5vd0FsYnVtc1tpZCAtIDFdO1xuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206YmxvY2tcIj5cbiAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy01XCI+XG4gICAgICAgICAgICAgIDxTaWRlYmFyIHBsYXlsaXN0cz17cGxheWxpc3RzfSBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgbGc6Y29sLXNwYW4tNCBsZzpib3JkZXItbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTQgcHktNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uY292ZXIgPz8gXCJcIn1cbiAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWUgPz8gXCJcIn1cbiAgICAgICAgICAgICAgYXNwZWN0UmF0aW89XCJwb3J0cmFpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzMwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgICAgICAgIFwiaC1hdXRvIHctYXV0byBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2NhbGUtMTA1IGFzcGVjdC1bMy80XVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmVcIj5KYWNrc29uIExlZTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5wQGV4YW1wbGUuY29tPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiSW1hZ2UiLCJsaXN0ZW5Ob3dBbGJ1bXMiLCJXZWI1IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdmF0YXIiLCJBdmF0YXJGYWxsYmFjayIsIkF2YXRhckltYWdlIiwiQnV0dG9uIiwiU2Nyb2xsQXJlYSIsIlNjcm9sbEJhciIsIlNlcGFyYXRvciIsIlRhYnMiLCJUYWJzQ29udGVudCIsIlRhYnNMaXN0IiwiVGFic1RyaWdnZXIiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nRGVzY3JpcHRpb24iLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dIZWFkZXIiLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ1RyaWdnZXIiLCJJbnB1dCIsIkxhYmVsIiwiTWVudSIsIlNpZGViYXIiLCJwbGF5bGlzdHMiLCJBYm91dCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwic3JjIiwiY292ZXIiLCJhbHQiLCJhc3BlY3RSYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwiY24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/detail.js\n"));

/***/ })

});