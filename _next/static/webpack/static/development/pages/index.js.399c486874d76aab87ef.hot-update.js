webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
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
/* harmony import */ var _components_indexReady__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/indexReady */ "./components/indexReady.tsx");
/* harmony import */ var _components_indexFinal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/indexFinal */ "./components/indexFinal.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constant */ "./constant.ts");
var _jsxFileName = "/Users/netdb-eb03/Desktop/wiaspace/digital-certificate-ncku/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant__WEBPACK_IMPORTED_MODULE_7__["IndexState"].INPUT),
      currentState = _useState[0],
      setCurrent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      user = _useState2[0],
      setUser = _useState2[1];

  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Home")), __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_components_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, currentState === _constant__WEBPACK_IMPORTED_MODULE_7__["IndexState"].INPUT ? __jsx(_components_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    status: currentState,
    dispatch: setCurrent,
    setUser: setUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }) : currentState === _constant__WEBPACK_IMPORTED_MODULE_7__["IndexState"].READY ? __jsx(_components_indexReady__WEBPACK_IMPORTED_MODULE_5__["default"], {
    status: currentState,
    setCurrent: setCurrent,
    data: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }) : __jsx(_components_indexFinal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    status: currentState,
    setCurrent: setCurrent,
    data: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.399c486874d76aab87ef.hot-update.js.map