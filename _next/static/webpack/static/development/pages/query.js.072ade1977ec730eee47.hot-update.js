webpackHotUpdate("static/development/pages/query.js",{

/***/ "./pages/query.tsx":
/*!*************************!*\
  !*** ./pages/query.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./components/nav.tsx");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/section */ "./components/section.tsx");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form */ "./components/form/index.tsx");
/* harmony import */ var _components_queryFinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/queryFinal */ "./components/queryFinal.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constant */ "./constant.ts");
var _jsxFileName = "/Users/tse/Code/NCKU/digital-certificate-ncku/pages/query.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Query = function Query() {
  // enum type in global
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant__WEBPACK_IMPORTED_MODULE_6__["QueryState"].INPUT),
      currentState = _useState[0],
      setCurrent = _useState[1];

  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\u88DC\u8B49")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, currentState === _constant__WEBPACK_IMPORTED_MODULE_6__["QueryState"].INPUT ? __jsx(_components_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSuccess: function onSuccess(applied) {
      if (applied) {
        setCurrent(_constant__WEBPACK_IMPORTED_MODULE_6__["QueryState"].SUCCESS);
      } else {
        setCurrent(_constant__WEBPACK_IMPORTED_MODULE_6__["QueryState"].FAILURE);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }) : __jsx(_components_queryFinal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isSuccess: currentState === _constant__WEBPACK_IMPORTED_MODULE_6__["QueryState"].SUCCESS,
    dispatch: setCurrent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Query);

/***/ })

})
//# sourceMappingURL=query.js.072ade1977ec730eee47.hot-update.js.map