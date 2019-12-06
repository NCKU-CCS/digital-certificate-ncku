webpackHotUpdate("static/development/pages/query.js",{

/***/ "./components/queryRename.tsx":
/*!************************************!*\
  !*** ./components/queryRename.tsx ***!
  \************************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


var _jsxFileName = "/home/leewei/Desktop/digital-certificate-ncku/components/queryRename.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      newName = _useState[0],
      setNewName = _useState[1];

  var handleNewName = function handleNewName(event) {
    event.preventDefault();
    setNewName(event.currentTarget.value);
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["renameApi"])(props.data.student_id, newName);

            case 3:
              data = _context.sent;

              if (null !== data && data.applied) {
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["QueryState"].END);
              } else {
                alert(data.error_msg);
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["QueryState"].INPUT);
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-968168969" + " " + "center column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-968168969" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\u6B32\u66F4\u6539\u7684\u4E2D\u82F1\u6587\u59D3\u540D"), __jsx("input", {
    type: "text",
    id: "input-chinese",
    placeholder: "\u4E2D\u6587",
    onChange: handleNewName,
    className: "jsx-968168969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    id: "input-english",
    placeholder: "\u82F1\u6587 - \u6B64\u6B04\u4F4D\u4F54\u4E0D\u958B\u653E",
    disabled: true,
    className: "jsx-968168969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    style: {
      marginTop: '46px'
    },
    className: "jsx-968168969" + " " + "center row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("button", {
    style: {
      marginRight: '60px'
    },
    type: "submit",
    className: "jsx-968168969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-968168969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u78BA\u8A8D CONFIRM")), __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["QueryState"].INPUT);
    },
    type: "button",
    className: "jsx-968168969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-968168969",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u8FD4\u56DE"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "968168969",
    __self: this
  }, ".center.jsx-968168969{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.column.jsx-968168969{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.row.jsx-968168969{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.title.jsx-968168969{font-family:SegoeUI;font-size:40px;line-height:1.2;-webkit-letter-spacing:0.08px;-moz-letter-spacing:0.08px;-ms-letter-spacing:0.08px;letter-spacing:0.08px;text-align:center;color:#676464;margin-bottom:38px;}input.jsx-968168969{width:590px;height:73px;border-radius:20px;box-shadow:5px 6px 6px 0 rgba(0,0,0,0.16);background-color:#ffffff;border:0px;margin:20px 0 20px 0;padding:0 20px 0 20px;font-size:35px;}input.jsx-968168969::-webkit-input-placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}input.jsx-968168969::-moz-placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}input.jsx-968168969:-ms-input-placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}input.jsx-968168969::placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}button.jsx-968168969{width:240px;height:45px;border:0px;border-radius:31px;background-color:#4781e6;}button.jsx-968168969>span.jsx-968168969{font-family:SegoeUI;font-size:23px;line-height:1.22;-webkit-letter-spacing:0.05px;-moz-letter-spacing:0.05px;-ms-letter-spacing:0.05px;letter-spacing:0.05px;text-align:center;color:rgba(247,247,247,0.92);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3F1ZXJ5UmVuYW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGtCLEFBR3dCLEFBS1MsQUFHSCxBQUdDLEFBU1IsQUFXbUIsQUFPbkIsQUFPUSxZQXhCUixBQWtCQSxRQTNCRyxBQWtDQSxJQXhCSSxBQWtCUixPQVJJLElBbkJDLEFBNEJHLEFBTUYsUUF4QjRCLEdBVTdCLEtBbkJNLENBa0NBLEVBTkcsUUFSVCxPQXpCbEIsS0FSeUIsSUFLekIsQUE2QmtDLENBUWxDLE1BbkIyQixzQkFZM0IsR0FYYSxXQUNVLHFCQUNDLGNBWkosQ0FrQ0EsT0FyQkgsU0ExQkksQ0FjTCxDQWtDa0IsSUFyQmxDLFNBWnFCLGdCQWtDckIsR0FqQ0EsMkRBZkEiLCJmaWxlIjoiL2hvbWUvbGVld2VpL0Rlc2t0b3AvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvcXVlcnlSZW5hbWUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlTdGF0ZSwgSVN0dWRlbnQsIElSZXNwIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHsgcmVuYW1lQXBpIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZGF0YTogSVN0dWRlbnQ7XG4gIGNoYW5nZUN1cnJlbnQ6ICh1cGRhdGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IGhhbmRsZU5ld05hbWUgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TmV3TmFtZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhOiBJUmVzcCA9IGF3YWl0IHJlbmFtZUFwaShwcm9wcy5kYXRhLnN0dWRlbnRfaWQsIG5ld05hbWUpO1xuICAgIGlmIChudWxsIT09ZGF0YSAmJiBkYXRhLmFwcGxpZWQpIHtcbiAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoUXVlcnlTdGF0ZS5FTkQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChkYXRhLmVycm9yX21zZyk7XG4gICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFF1ZXJ5U3RhdGUuSU5QVVQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImNlbnRlciBjb2x1bW5cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+5qyy5pu05pS555qE5Lit6Iux5paH5aeT5ZCNPC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJpbnB1dC1jaGluZXNlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLkuK3mlodcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlTmV3TmFtZX1cbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImlucHV0LWVuZ2xpc2hcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIuiLseaWhyAtIOatpOashOS9jeS9lOS4jemWi+aUvlwiXG4gICAgICAgIGRpc2FibGVkXG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlciByb3dcIiBzdHlsZT17eyBtYXJnaW5Ub3A6ICc0NnB4JyB9fT5cbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzYwcHgnIH19IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICA8c3Bhbj7norroqo0gQ09ORklSTTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuY2hhbmdlQ3VycmVudChRdWVyeVN0YXRlLklOUFVUKX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgIDxzcGFuPui/lOWbnjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAucm93IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNlZ29lVUk7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICM2NzY0NjQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDU5MHB4O1xuICAgICAgICAgIGhlaWdodDogNzNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA2cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBFZHdhcmRpYW5TY3JpcHRJVEM7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgxODYsIDE4NCwgMTg0LCAwLjY2KTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc4MWU2O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiA+IHNwYW4ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZVVJO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNXB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNDcsIDI0NywgMjQ3LCAwLjkyKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKTtcbn0pIGFzIFJlYWN0LkZDPElQcm9wcz47XG4iXX0= */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/queryRename.tsx */"));
});

/***/ })

})
//# sourceMappingURL=query.js.0ebdcdf3994d7ae38e53.hot-update.js.map