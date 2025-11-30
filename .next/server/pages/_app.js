/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst navLinks = [\n    {\n        href: \"/\",\n        label: \"Главная\"\n    },\n    {\n        href: \"/uslugi\",\n        label: \"Услуги\"\n    },\n    {\n        href: \"/ceny\",\n        label: \"Цены\"\n    },\n    {\n        href: \"/portfolio\",\n        label: \"Портфолио\"\n    },\n    {\n        href: \"/otzyvy\",\n        label: \"Отзывы\"\n    },\n    {\n        href: \"/o-nas\",\n        label: \"О нас\"\n    },\n    {\n        href: \"/kontakty\",\n        label: \"Контакты\"\n    },\n    {\n        href: \"/blog\",\n        label: \"Блог\"\n    }\n];\nfunction Layout({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const currentPath = router.pathname;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"nav-left\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"nav-logo\",\n                                    children: \"Разнорабочие Сочи\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"nav-tagline\",\n                                    children: \"Разнорабочие на день по фиксированной цене\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"nav-center\",\n                            children: navLinks.map((link)=>{\n                                const isActive = link.href === \"/\" ? currentPath === \"/\" : currentPath.startsWith(link.href);\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: link.href,\n                                    legacyBehavior: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: isActive ? \"nav-link-active\" : undefined,\n                                        children: link.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 19\n                                    }, this)\n                                }, link.href, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"nav-right\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-phone\",\n                                    href: \"tel:+7XXXXXXXXXX\",\n                                    children: \"+7 (XXX) XXX-XX-XX\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn-nav-cta\",\n                                    type: \"button\",\n                                    children: \"Заказать звонок\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"page-root\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer\",\n                children: \"Разнорабочие Сочи — разнорабочие на день по фиксированной цене. Работаем по всему Большому Сочи: от Дагомыса до Красной Поляны.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\Разнорабочие сайт\\\\pages\\\\_app.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNXO0FBRXhDLE1BQU1FLFdBQVc7SUFDZjtRQUFFQyxNQUFNO1FBQUtDLE9BQU87SUFBVTtJQUM5QjtRQUFFRCxNQUFNO1FBQVdDLE9BQU87SUFBUztJQUNuQztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBTztJQUMvQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBWTtJQUN6QztRQUFFRCxNQUFNO1FBQVdDLE9BQU87SUFBUztJQUNuQztRQUFFRCxNQUFNO1FBQVVDLE9BQU87SUFBUTtJQUNqQztRQUFFRCxNQUFNO1FBQWFDLE9BQU87SUFBVztJQUN2QztRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBTztDQUNoQztBQUVELFNBQVNDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBQzFCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxjQUFjRCxPQUFPRSxRQUFRO0lBRW5DLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQVc7Ozs7Ozs4Q0FDMUIsOERBQUNEO29DQUFJQyxXQUFVOzhDQUFjOzs7Ozs7Ozs7Ozs7c0NBRS9CLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWlQsU0FBU1ksR0FBRyxDQUFDLENBQUNDO2dDQUNiLE1BQU1DLFdBQ0pELEtBQUtaLElBQUksS0FBSyxNQUNWSyxnQkFBZ0IsTUFDaEJBLFlBQVlTLFVBQVUsQ0FBQ0YsS0FBS1osSUFBSTtnQ0FFdEMscUJBQ0UsOERBQUNILGtEQUFJQTtvQ0FBaUJHLE1BQU1ZLEtBQUtaLElBQUk7b0NBQUVlLGNBQWM7OENBQ25ELDRFQUFDQzt3Q0FBRVIsV0FBV0ssV0FBVyxvQkFBb0JJO2tEQUFZTCxLQUFLWCxLQUFLOzs7Ozs7bUNBRDFEVyxLQUFLWixJQUFJOzs7Ozs0QkFJeEI7Ozs7OztzQ0FFRiw4REFBQ087NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FBRVIsV0FBVTtvQ0FBWVIsTUFBSzs4Q0FBbUI7Ozs7Ozs4Q0FHakQsOERBQUNrQjtvQ0FBT1YsV0FBVTtvQ0FBY1csTUFBSzs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3BELDhEQUFDQztnQkFBS1osV0FBVTswQkFBYUw7Ozs7OzswQkFFN0IsOERBQUNrQjtnQkFBT2IsV0FBVTswQkFBUzs7Ozs7Ozs7Ozs7O0FBTWpDO0FBRWUsU0FBU2MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ3RCO2tCQUNDLDRFQUFDcUI7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jhem5vcmFib2NoaWUtc29jaGkvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBuYXZMaW5rcyA9IFtcclxuICB7IGhyZWY6IFwiL1wiLCBsYWJlbDogXCLQk9C70LDQstC90LDRj1wiIH0sXHJcbiAgeyBocmVmOiBcIi91c2x1Z2lcIiwgbGFiZWw6IFwi0KPRgdC70YPQs9C4XCIgfSxcclxuICB7IGhyZWY6IFwiL2NlbnlcIiwgbGFiZWw6IFwi0KbQtdC90YtcIiB9LFxyXG4gIHsgaHJlZjogXCIvcG9ydGZvbGlvXCIsIGxhYmVsOiBcItCf0L7RgNGC0YTQvtC70LjQvlwiIH0sXHJcbiAgeyBocmVmOiBcIi9vdHp5dnlcIiwgbGFiZWw6IFwi0J7RgtC30YvQstGLXCIgfSxcclxuICB7IGhyZWY6IFwiL28tbmFzXCIsIGxhYmVsOiBcItCeINC90LDRgVwiIH0sXHJcbiAgeyBocmVmOiBcIi9rb250YWt0eVwiLCBsYWJlbDogXCLQmtC+0L3RgtCw0LrRgtGLXCIgfSxcclxuICB7IGhyZWY6IFwiL2Jsb2dcIiwgbGFiZWw6IFwi0JHQu9C+0LNcIiB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGN1cnJlbnRQYXRoID0gcm91dGVyLnBhdGhuYW1lO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWxheW91dFwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1sZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxvZ29cIj7QoNCw0LfQvdC+0YDQsNCx0L7Rh9C40LUg0KHQvtGH0Lg8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtdGFnbGluZVwiPtCg0LDQt9C90L7RgNCw0LHQvtGH0LjQtSDQvdCwINC00LXQvdGMINC/0L4g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+0Lkg0YbQtdC90LU8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XHJcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPT09IFwiL1wiXHJcbiAgICAgICAgICAgICAgICAgID8gY3VycmVudFBhdGggPT09IFwiL1wiXHJcbiAgICAgICAgICAgICAgICAgIDogY3VycmVudFBhdGguc3RhcnRzV2l0aChsaW5rLmhyZWYpO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLmhyZWZ9IGhyZWY9e2xpbmsuaHJlZn0gbGVnYWN5QmVoYXZpb3I+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcIm5hdi1saW5rLWFjdGl2ZVwiIDogdW5kZWZpbmVkfT57bGluay5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1waG9uZVwiIGhyZWY9XCJ0ZWw6KzdYWFhYWFhYWFhYXCI+XHJcbiAgICAgICAgICAgICAgKzcgKFhYWCkgWFhYLVhYLVhYXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tbmF2LWN0YVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgICDQl9Cw0LrQsNC30LDRgtGMINC30LLQvtC90L7QulxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInBhZ2Utcm9vdFwiPntjaGlsZHJlbn08L21haW4+XHJcblxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgINCg0LDQt9C90L7RgNCw0LHQvtGH0LjQtSDQodC+0YfQuCDigJQg0YDQsNC30L3QvtGA0LDQsdC+0YfQuNC1INC90LAg0LTQtdC90Ywg0L/QviDRhNC40LrRgdC40YDQvtCy0LDQvdC90L7QuSDRhtC10L3QtS4g0KDQsNCx0L7RgtCw0LXQvCDQv9C+XHJcbiAgICAgICAg0LLRgdC10LzRgyDQkdC+0LvRjNGI0L7QvNGDINCh0L7Rh9C4OiDQvtGCINCU0LDQs9C+0LzRi9GB0LAg0LTQviDQmtGA0LDRgdC90L7QuSDQn9C+0LvRj9C90YsuXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJuYXZMaW5rcyIsImhyZWYiLCJsYWJlbCIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsIm1hcCIsImxpbmsiLCJpc0FjdGl2ZSIsInN0YXJ0c1dpdGgiLCJsZWdhY3lCZWhhdmlvciIsImEiLCJ1bmRlZmluZWQiLCJidXR0b24iLCJ0eXBlIiwibWFpbiIsImZvb3RlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();