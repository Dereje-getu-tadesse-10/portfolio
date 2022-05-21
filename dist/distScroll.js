/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationLabs\": () => (/* binding */ animationLabs),\n/* harmony export */   \"animationProject\": () => (/* binding */ animationProject)\n/* harmony export */ });\nconst scroll = gsap.timeline();\n\n\nscroll.to('#poulet', {\n    scrollTrigger: {\n        trigger: '#poulet',\n        start: 'top 60%',\n        onEnter: () => {\n            scroll.to('#poulet', {\n                x: 0,\n                autoAlpha: 1\n            }),\n                scroll.to('.paragraphe', {\n                    x: 0,\n                    autoAlpha: 1\n                })\n        }\n    }\n})\n\nfunction animationProject(){\n    const scroll = gsap.timeline();\n    scroll.to('.myProjectItems', {\n        scrollTrigger: {\n            trigger: '.projectItems',\n            start: 'top 60%',\n            onEnter: () => {\n                scroll.to('.projectItems', {\n                    autoAlpha: 1,\n                    stagger:.3,\n                    duration:.3,\n                })\n            }\n        }\n    })\n}\n\nfunction animationLabs(){\n    const scroll = gsap.timeline();\n    scroll.to('.labsItems', {\n        scrollTrigger: {\n            trigger: '.labosItems',\n            start: 'top 50%',\n            onEnter: () => {\n                scroll.to('.labosItems', {\n                    autoAlpha: 1,\n                    stagger:.3,\n                    duration:.2,\n                })\n            }\n        }\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack://portfolio/./src/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scroll.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;