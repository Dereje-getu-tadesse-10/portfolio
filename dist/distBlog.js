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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ (() => {

eval("const title = document.querySelector(\".titreBlog\");\r\nconst description = document.querySelector(\".descriptionBlog\");\r\nconst link = document.querySelector(\".linkblog\");\r\nconst container = document.querySelector(\".card\");\r\n\r\nfunction getPublications(name) {\r\n  let me = `https://mediumpostapi.herokuapp.com/?usermedium=${name}`;\r\n  fetch(me)\r\n      .then((res) => res.json())\r\n      .then((data) => {\r\n        let blog = data.dataMedium;\r\n\r\n        blog.forEach((element) => {\r\n          const mainContainer = document.createElement(\"div\");\r\n          mainContainer.classList.add(\"blogContainer\");\r\n          let img = document.createElement(\"img\");\r\n          img.setAttribute(\"src\", element.image);\r\n          let titleH = document.createElement(\"p\");\r\n          titleH.classList.add('titleBlog');\r\n          const desc = document.createElement('p');\r\n          desc.classList.add('descBlog');\r\n          const descTxt = document.createTextNode(element.description);\r\n          desc.appendChild(descTxt);\r\n\r\n          let txtTitle = document.createTextNode(element.title);\r\n          titleH.appendChild(txtTitle);\r\n\r\n          let lnk = document.createElement(\"a\");\r\n          lnk.textContent = \"lire la suite\";\r\n\r\n          // ajout blog dans la div container\r\n          lnk.setAttribute(\"href\", element.link);\r\n          lnk.classList.add(\"lienBlog\");\r\n          mainContainer.appendChild(img);\r\n          mainContainer.appendChild(titleH);\r\n          mainContainer.appendChild(desc)\r\n          mainContainer.appendChild(lnk);\r\n          container.appendChild(mainContainer);\r\n\r\n          function animateBlog() {\r\n            const scroll = gsap.timeline();\r\n            scroll.to('.card', {\r\n              scrollTrigger: {\r\n                trigger: '.blogContainer',\r\n                start: 'top 50%',\r\n                onEnter: () => {\r\n                  scroll.to('.blogContainer',{\r\n                    autoAlpha:1,\r\n                    stagger:.3,\r\n                    duration:.4\r\n                  })\r\n                }\r\n              }\r\n            })\r\n          }\r\n          animateBlog()\r\n\r\n        })\r\n\r\n      })\r\n}\r\n\r\ngetPublications(\"dakabieui\");\r\n\r\n\n\n//# sourceURL=webpack://portfolio/./src/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/api.js"]();
/******/ 	
/******/ })()
;