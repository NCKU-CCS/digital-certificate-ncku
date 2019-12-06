webpackHotUpdate("static/development/pages/query.js",{

/***/ "./components/queryFinal.tsx":
/*!***********************************!*\
  !*** ./components/queryFinal.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./constant.ts");
/* harmony import */ var _static_success_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/success.png */ "./static/success.png");
/* harmony import */ var _static_success_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_success_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_failure_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/failure.png */ "./static/failure.png");
/* harmony import */ var _static_failure_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_failure_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


var _jsxFileName = "/home/leewei/Desktop/digital-certificate-ncku/components/queryFinal.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      isSuccess = _useState[0],
      setSuccess = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["queryApi"])(props.data.student_id, props.isEnglish);

            case 2:
              data = _context.sent;
              setSuccess(data ? data.applied : false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return __jsx("div", {
    style: {
      display: "".concat(isSuccess !== null ? 'flex' : 'none')
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["704729834", [isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', isSuccess ? '#33bc3c' : '#dd2424', isSuccess ? '#33bc3c' : '#dd2424']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("img", {
    src: isSuccess ? _static_success_png__WEBPACK_IMPORTED_MODULE_5___default.a : _static_failure_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["704729834", [isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', isSuccess ? '#33bc3c' : '#dd2424', isSuccess ? '#33bc3c' : '#dd2424']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["704729834", [isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', isSuccess ? '#33bc3c' : '#dd2424', isSuccess ? '#33bc3c' : '#dd2424']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, isSuccess ? '已申請' : '未申請'), __jsx("a", {
    onClick: function onClick() {
      return props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["QueryState"].INPUT);
    },
    style: isSuccess ? {
      left: '78px'
    } : {},
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["704729834", [isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', isSuccess ? '#33bc3c' : '#dd2424', isSuccess ? '#33bc3c' : '#dd2424']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u8FD4\u56DE"), isSuccess ? __jsx("a", {
    onClick: function onClick() {
      return props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["QueryState"].RENAME);
    },
    style: {
      right: '71px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["704729834", [isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', isSuccess ? '#33bc3c' : '#dd2424', isSuccess ? '#33bc3c' : '#dd2424']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\u4FEE\u6539\u59D3\u540D") : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "704729834",
    dynamic: [isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', isSuccess ? '#33bc3c' : '#dd2424', isSuccess ? '#33bc3c' : '#dd2424'],
    __self: this
  }, "div.__jsx-style-dynamic-selector{width:455px;height:510px;box-shadow:3px 3px 10px 0 ".concat(isSuccess ? 'rgba(51, 188, 60, 0.29)' : 'rgba(221, 36, 36, 0.45)', ";border:solid 6px ").concat(isSuccess ? '#33bc3c' : '#dd2424', ";border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}h1.__jsx-style-dynamic-selector{-webkit-text-stroke:0.4px #33bc3c;font-family:EdwardianScriptITC;font-size:45px;color:").concat(isSuccess ? '#33bc3c' : '#dd2424', ";}a.__jsx-style-dynamic-selector{font-family:EdwardianScriptITC;font-size:35px;color:#676464;border-bottom:2px solid #676464;position:absolute;bottom:36px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3F1ZXJ5RmluYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDa0IsQUFHdUIsQUFhc0IsQUFNSCxZQWxCbEIsYUFFaUIsTUFpQmYsR0FOZ0IsWUFPakIsY0FDa0IsS0FQakIsZUFYK0IsQUFZWCxZQU9qQixrQkFDTixLQVBkLE9BUUEsSUFwQnFCLG1CQUNOLDBFQUNVLG1HQUNKLDZGQUNHLDhFQUNKLGtCQUNwQiIsImZpbGUiOiIvaG9tZS9sZWV3ZWkvRGVza3RvcC9kaWdpdGFsLWNlcnRpZmljYXRlLW5ja3UvY29tcG9uZW50cy9xdWVyeUZpbmFsLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlTdGF0ZSwgSVN0dWRlbnQsIElSZXNwIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFN1Y2Nlc3NJbWFnZSBmcm9tICcuLi9zdGF0aWMvc3VjY2Vzcy5wbmcnO1xuaW1wb3J0IEZhaWx1cmVJbWFnZSBmcm9tICcuLi9zdGF0aWMvZmFpbHVyZS5wbmcnO1xuaW1wb3J0IHsgcXVlcnlBcGkgfSBmcm9tICcuLi91dGlscyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBkYXRhOiBJU3R1ZGVudDtcbiAgaXNFbmdsaXNoOiBib29sZWFuO1xuICBjaGFuZ2VDdXJyZW50OiAodXBkYXRlOiBRdWVyeVN0YXRlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZTxib29sZWFuPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhOiBJUmVzcCA9IGF3YWl0IHF1ZXJ5QXBpKFxuICAgICAgICBwcm9wcy5kYXRhLnN0dWRlbnRfaWQsXG4gICAgICAgIHByb3BzLmlzRW5nbGlzaCxcbiAgICAgICk7XG4gICAgICBzZXRTdWNjZXNzKGRhdGEgPyBkYXRhLmFwcGxpZWQgOiBmYWxzZSk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBgJHtpc1N1Y2Nlc3MgIT09IG51bGwgPyAnZmxleCcgOiAnbm9uZSd9YCB9fT5cbiAgICAgIDxpbWcgc3JjPXtpc1N1Y2Nlc3MgPyBTdWNjZXNzSW1hZ2UgOiBGYWlsdXJlSW1hZ2V9IC8+XG4gICAgICA8aDE+e2lzU3VjY2VzcyA/ICflt7LnlLPoq4snIDogJ+acqueUs+iriyd9PC9oMT5cbiAgICAgIDxhXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZUN1cnJlbnQoUXVlcnlTdGF0ZS5JTlBVVCl9XG4gICAgICAgIHN0eWxlPXtpc1N1Y2Nlc3MgPyB7IGxlZnQ6ICc3OHB4JyB9IDoge319XG4gICAgICA+XG4gICAgICAgIOi/lOWbnlxuICAgICAgPC9hPlxuICAgICAge1xuICAgICAgICBpc1N1Y2Nlc3MgPyAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZUN1cnJlbnQoUXVlcnlTdGF0ZS5SRU5BTUUpfVxuICAgICAgICAgICAgc3R5bGU9e3sgcmlnaHQ6ICc3MXB4JyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOS/ruaUueWnk+WQjVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PjwvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgd2lkdGg6IDQ1NXB4O1xuICAgICAgICAgIGhlaWdodDogNTEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IDBcbiAgICAgICAgICAgICR7aXNTdWNjZXNzID8gJ3JnYmEoNTEsIDE4OCwgNjAsIDAuMjkpJyA6ICdyZ2JhKDIyMSwgMzYsIDM2LCAwLjQ1KSd9O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgNnB4ICR7aXNTdWNjZXNzID8gJyMzM2JjM2MnIDogJyNkZDI0MjQnfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC40cHggIzMzYmMzYztcbiAgICAgICAgICBmb250LWZhbWlseTogRWR3YXJkaWFuU2NyaXB0SVRDO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgICAgICBjb2xvcjogJHtpc1N1Y2Nlc3MgPyAnIzMzYmMzYycgOiAnI2RkMjQyNCd9O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBFZHdhcmRpYW5TY3JpcHRJVEM7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGNvbG9yOiAjNjc2NDY0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjc2NDY0O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDM2cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pIGFzIFJlYWN0LkZDPElQcm9wcz47XG4iXX0= */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/queryFinal.tsx */")));
});

/***/ })

})
//# sourceMappingURL=query.js.a7a559f02bb4f1904314.hot-update.js.map