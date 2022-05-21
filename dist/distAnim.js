/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/anim.js":
/*!*********************!*\
  !*** ./src/anim.js ***!
  \*********************/
/***/ (() => {

eval("const burger = document.querySelector(\".openMenu\");\r\nconst nav = document.querySelector(\".navAnimation\");\r\nconst links = document.querySelectorAll(\".link\");\r\n\r\n//anime home page gsap\r\nconst logoHeader = document.querySelector(\"#logo\");\r\nconst buttonMenu = document.querySelector(\".openMenu\");\r\nconst titleHomePage = document.querySelector(\".titleHome\");\r\nconst spanHomepage = document.querySelector('.iam');\r\nconst miniPresentation = document.querySelector(\".welcome\");\r\n\r\nwindow.addEventListener('load', ()=>{\r\n  loadAnimation();\r\n});\r\n\r\n// function animation\r\nfunction loadAnimation(){\r\n  let tl;\r\n  tl = gsap.timeline();\r\n  tl.to(titleHomePage,{\r\n    y:0,\r\n    autoAlpha:1,\r\n    delay:0.2\r\n  })\r\n  tl.to(logoHeader,{\r\n    x:0,\r\n    autoAlpha:1,\r\n    delay:0.2\r\n  })\r\n  tl.to(buttonMenu,{\r\n    x:0,\r\n    autoAlpha:1,\r\n    delay:0.2\r\n  })\r\n  tl.to(spanHomepage,{\r\n    y:0,\r\n    autoAlpha:1,\r\n    delay:0.2\r\n  })\r\n  tl.to(miniPresentation,{\r\n    y:0,\r\n    autoAlpha:1,\r\n    delay:0.2\r\n  })\r\n}\r\n\r\n\r\nburger.addEventListener(\"click\", () => {\r\n  nav.classList.toggle(\"open\");\r\n  links.forEach((element) => {\r\n    element.addEventListener(\"click\", () => {\r\n      if (nav.classList.contains(\"open\")) {\r\n        nav.classList.remove(\"open\");\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n// get current year span html\r\nconst spanYear = document.querySelector(\".currentYear\");\r\nlet currentYear = new Date().getFullYear()\r\nspanYear.textContent = currentYear;\r\n\r\n// Cursor\r\nlet cursor = document.querySelector(\".cursor\");\r\nlet cursorinner = document.querySelector(\".cursor2\");\r\nlet a = document.querySelectorAll(\"a\");\r\n\r\ndocument.addEventListener(\"mousemove\", function (e) {\r\n  let x = e.clientX;\r\n  let y = e.clientY;\r\n  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;\r\n});\r\n\r\ndocument.addEventListener(\"mousemove\", function (e) {\r\n  let x = e.clientX;\r\n  let y = e.clientY;\r\n  cursorinner.style.left = x + \"px\";\r\n  cursorinner.style.top = y + \"px\";\r\n});\r\n\r\ndocument.addEventListener(\"mousedown\", () => {\r\n  cursor.classList.add(\"click\");\r\n  cursorinner.classList.add(\"cursorinnerhover\");\r\n});\r\n\r\ndocument.addEventListener(\"mouseup\", () => {\r\n  cursor.classList.remove(\"click\");\r\n  cursorinner.classList.remove(\"cursorinnerhover\");\r\n});\r\n\r\na.forEach((item) => {\r\n  item.addEventListener(\"mouseover\", () => {\r\n    cursor.classList.add(\"hover\");\r\n  });\r\n  item.addEventListener(\"mouseleave\", () => {\r\n    cursor.classList.remove(\"hover\");\r\n  });\r\n});\r\n\r\n//end cursor\r\n\r\n// home page\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/anim.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/anim.js"]();
/******/ 	
/******/ })()
;