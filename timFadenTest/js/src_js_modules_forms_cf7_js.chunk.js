"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_js_modules_forms_cf7_js"],{

/***/ "./src/js/modules/forms/cf7.js":
/*!*************************************!*\
  !*** ./src/js/modules/forms/cf7.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   synchronizeCF7: function() { return /* binding */ synchronizeCF7; }\n/* harmony export */ });\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./src/js/modules/forms/validation.js\");\n\nfunction synchronizeCF7() {\n  var frontendForms = document.querySelectorAll('[data-cf7-id]');\n  frontendForms.forEach(function (frontendForm) {\n    var cf7FormId = frontendForm.getAttribute('data-cf7-id');\n    var cf7Form = document.querySelector(\"#\".concat(cf7FormId));\n    var frontendFormBtn = frontendForm.querySelector('[type=\"submit\"]');\n    frontendForm.addEventListener('change', function (e) {\n      var cf7Input = cf7Form.querySelector(\"input[name=\\\"\".concat(e.target.name, \"\\\"]\"));\n      console.log(cf7Input, e.target.name);\n      cf7Input.value = e.target.value;\n    });\n    frontendFormBtn.addEventListener('click', function (e) {\n      e.preventDefault();\n      if ((0,_validation__WEBPACK_IMPORTED_MODULE_0__.isFormValid)(frontendForm)) {\n        setTimeout(function () {\n          var cf7Submit = cf7Form.querySelector('[type=\"submit\"]');\n          cf7Submit.click();\n          frontendForm.reset();\n        });\n      }\n    }, false);\n    cf7Form.addEventListener('wpcf7mailsent', function (e) {\n      showSuccessState();\n    }, false);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/forms/cf7.js?");

/***/ })

}]);