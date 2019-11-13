webpackHotUpdate("static/development/pages/reissue.js",{

/***/ "./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_edu_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/edu_icon.png */ "./static/edu_icon.png");
/* harmony import */ var _static_edu_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_edu_icon_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tse/Code/NCKU/digital-certificate-ncku/components/nav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Navbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "nav__Navbar",
  componentId: "sc-1yuick4-0"
})(["position:fixed;top:0;left:0;right:0;z-index:1000;width:100vw;height:99px;background-color:#fff;box-shadow:0 3px 6px 0 rgba(0,0,0,0.16);display:flex;justify-content:flex-start;align-items:center;"]);
var Navimg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "nav__Navimg",
  componentId: "sc-1yuick4-1"
})(["width:78px;height:78px;margin:0 1.5rem 0 1.5rem;"]);
var Navtitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "nav__Navtitle",
  componentId: "sc-1yuick4-2"
})(["font-family:EdwardianScriptITC;font-size:42px;text-align:center;color:#676464;@media (max-width:1200px){display:none;}"]);
var Navlink = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "nav__Navlink",
  componentId: "sc-1yuick4-3"
})(["font-family:EdwardianScriptITC;font-size:47px;padding:0px 1rem 0px 1rem;margin:0px 1rem 0px 1rem;height:100%;display:inline-flex;justify-content:center;align-items:center;@media (max-width:1200px){margin:0px 0.5rem 0px 0.5rem;padding:0px 0.5rem 0px 0.5rem;}"]);
var Resizable = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "nav__Resizable",
  componentId: "sc-1yuick4-4"
})(["margin:0 auto;"]);
var links = [{
  name: '初辦',
  rel: '/'
}, {
  name: '補證',
  rel: '/reissue'
}, {
  name: '查詢',
  rel: '/query'
}];

var Nav = function Nav() {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      pathname = _useRouter.pathname;

  return __jsx(Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(Navimg, {
    src: _static_edu_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(Navtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u6559\u80B2\u90E8\u6578\u4F4D\u8B49\u66F8\u4E0A\u50B3\u7CFB\u7D71"), __jsx(Resizable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), links.map(function (link, index) {
    return __jsx(Navlink, {
      key: index,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(link.rel);
      },
      style: pathname === link.rel ? {
        color: '#6a63c8',
        borderBottom: '6px solid #6a63c8',
        borderTop: '6px solid transparent'
      } : {
        color: '#676464'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, link.name);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=reissue.js.4157fec5d70b93ae0c35.hot-update.js.map