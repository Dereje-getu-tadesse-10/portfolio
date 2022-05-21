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

/***/ "./src/projets.js":
/*!************************!*\
  !*** ./src/projets.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.js */ \"./src/scroll.js\");\n\r\n\r\n\r\nfetch(\"./projects/projets.json\")\r\n  .then((res) => {\r\n    return res.json();\r\n  })\r\n  .then((data) => {\r\n\r\n    data.forEach((element) => {\r\n      const me = document.querySelector(\".myProjectItems\");\r\n      const projets = document.createElement(\"div\");\r\n      projets.classList.add(\"items\");\r\n      projets.classList.add(\"projectItems\");\r\n      const img = document.createElement(\"img\");\r\n      img.classList.add(\"ItemsImages\");\r\n      img.setAttribute('alt',element.alt);\r\n\r\n      const title = document.createElement(\"h2\");\r\n      const paragraphe = document.createElement(\"p\");\r\n      const ul = document.createElement(\"ul\");\r\n      ul.classList.add(\"languagesListe\");\r\n      const button = document.createElement(\"a\");\r\n      button.classList.add(\"projectLink\");\r\n      // modale\r\n      // text\r\n      const titleTxt = document.createTextNode(element.nom);\r\n      title.appendChild(titleTxt);\r\n      const paragrapheTxt = document.createTextNode(element.description);\r\n      paragraphe.appendChild(paragrapheTxt);\r\n      const buttonTxt = document.createTextNode(\"lien du projet\");\r\n      button.appendChild(buttonTxt);\r\n      // img\r\n      img.setAttribute(\"src\", element.img);\r\n      //lien\r\n      button.setAttribute(\"href\", element.lien);\r\n      // la listes des langages\r\n      for (let index = 0; index < element.languages.length; index++) {\r\n         const li = document.createElement(\"li\");\r\n         li.appendChild(document.createTextNode(element.languages[index]));\r\n         ul.appendChild(li);\r\n      }\r\n      projets.appendChild(img);\r\n      projets.appendChild(title);\r\n      projets.appendChild(paragraphe);\r\n      projets.appendChild(ul);\r\n      projets.appendChild(button);\r\n      me.appendChild(projets);\r\n      (0,_scroll_js__WEBPACK_IMPORTED_MODULE_0__.animationProject)();\r\n    });\r\n  });\r\n\r\n  // add element modal\r\n\n\n//# sourceURL=webpack://portfolio/./src/projets.js?");

/***/ }),

/***/ "./src/scroll.js":
/*!***********************!*\
  !*** ./src/scroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationLabs\": () => (/* binding */ animationLabs),\n/* harmony export */   \"animationProject\": () => (/* binding */ animationProject)\n/* harmony export */ });\nconst scroll = gsap.timeline();\n\n\nscroll.to('#poulet', {\n    scrollTrigger: {\n        trigger: '#poulet',\n        start: 'top 60%',\n        onEnter: () => {\n            scroll.to('#poulet', {\n                x: 0,\n                autoAlpha: 1\n            }),\n                scroll.to('.paragraphe', {\n                    x: 0,\n                    autoAlpha: 1\n                })\n        }\n    }\n})\n\nfunction animationProject(){\n    const scroll = gsap.timeline();\n    scroll.to('.myProjectItems', {\n        scrollTrigger: {\n            trigger: '.projectItems',\n            start: 'top 60%',\n            onEnter: () => {\n                scroll.to('.projectItems', {\n                    autoAlpha: 1,\n                    stagger:.3,\n                    duration:.3,\n                })\n            }\n        }\n    })\n}\n\nfunction animationLabs(){\n    const scroll = gsap.timeline();\n    scroll.to('.labsItems', {\n        scrollTrigger: {\n            trigger: '.labosItems',\n            start: 'top 50%',\n            onEnter: () => {\n                scroll.to('.labosItems', {\n                    autoAlpha: 1,\n                    stagger:.3,\n                    duration:.2,\n                })\n            }\n        }\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack://portfolio/./src/scroll.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projets.js");
/******/ 	
/******/ })()
;