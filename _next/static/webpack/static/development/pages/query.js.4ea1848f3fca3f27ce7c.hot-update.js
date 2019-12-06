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
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section */ "./components/section.tsx");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav */ "./components/nav.tsx");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form */ "./components/form.tsx");
/* harmony import */ var _components_queryFinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/queryFinal */ "./components/queryFinal.tsx");
/* harmony import */ var _components_queryRename__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/queryRename */ "./components/queryRename.tsx");
/* harmony import */ var _components_final__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/final */ "./components/final.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constant */ "./constant.ts");
var _jsxFileName = "/home/leewei/Desktop/digital-certificate-ncku/pages/query.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant__WEBPACK_IMPORTED_MODULE_8__["QueryState"].INPUT),
      current = _useState[0],
      setCurrent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isEnglish = _useState2[0],
      setEnglish = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      userInfo = _useState3[0],
      setUser = _useState3[1];

  var changeEnglish = function changeEnglish() {
    return setEnglish(!isEnglish);
  };

  var changeCurrent = function changeCurrent(update) {
    return setCurrent(update);
  };

  var handleSuccess = function handleSuccess(data) {
    setUser(data);
    setCurrent(_constant__WEBPACK_IMPORTED_MODULE_8__["QueryState"].FINAL);
  };

  var renderBody = function renderBody() {
    if (current === _constant__WEBPACK_IMPORTED_MODULE_8__["QueryState"].INPUT) {
      return __jsx(_components_form__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isEnglish: isEnglish,
        changeEnglish: changeEnglish,
        onSuccess: handleSuccess,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    } else if (current === _constant__WEBPACK_IMPORTED_MODULE_8__["QueryState"].RENAME) {
      return __jsx(_components_queryRename__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: userInfo,
        changeCurrent: changeCurrent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      });
    } else if (current === _constant__WEBPACK_IMPORTED_MODULE_8__["QueryState"].END) {
      return __jsx(_components_final__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: userInfo,
        current: current,
        changeCurrent: changeCurrent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    } else {
      return __jsx(_components_queryFinal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        data: userInfo,
        isEnglish: isEnglish,
        changeCurrent: changeCurrent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      });
    }
  };

  return __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u6559\u80B2\u90E8\u6578\u4F4D\u8B49\u66F8\u4E0A\u50B3\u7CFB\u7D71 - \u67E5\u8A62")), __jsx(_components_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), renderBody()));
});

/***/ })

})
//# sourceMappingURL=query.js.4ea1848f3fca3f27ce7c.hot-update.js.map