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
    placeholder: "\u82F1\u6587 - \u6B64\u6B04\u4F4D\u66AB\u4E0D\u958B\u653E",
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
      lineNumber: 53
    },
    __self: this
  }, "\u8FD4\u56DE"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "968168969",
    __self: this
  }, ".center.jsx-968168969{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.column.jsx-968168969{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.row.jsx-968168969{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.title.jsx-968168969{font-family:SegoeUI;font-size:40px;line-height:1.2;-webkit-letter-spacing:0.08px;-moz-letter-spacing:0.08px;-ms-letter-spacing:0.08px;letter-spacing:0.08px;text-align:center;color:#676464;margin-bottom:38px;}input.jsx-968168969{width:590px;height:73px;border-radius:20px;box-shadow:5px 6px 6px 0 rgba(0,0,0,0.16);background-color:#ffffff;border:0px;margin:20px 0 20px 0;padding:0 20px 0 20px;font-size:35px;}input.jsx-968168969::-webkit-input-placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}input.jsx-968168969::-moz-placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}input.jsx-968168969:-ms-input-placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}input.jsx-968168969::placeholder{font-family:EdwardianScriptITC;font-size:35px;line-height:1.5;text-align:left;color:rgba(186,184,184,0.66);}button.jsx-968168969{width:240px;height:45px;border:0px;border-radius:31px;background-color:#4781e6;}button.jsx-968168969>span.jsx-968168969{font-family:SegoeUI;font-size:23px;line-height:1.22;-webkit-letter-spacing:0.05px;-moz-letter-spacing:0.05px;-ms-letter-spacing:0.05px;letter-spacing:0.05px;text-align:center;color:rgba(247,247,247,0.92);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3F1ZXJ5UmVuYW1lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGtCLEFBR3dCLEFBS1MsQUFHSCxBQUdDLEFBU1IsQUFXbUIsQUFPbkIsQUFPUSxZQXhCUixBQWtCQSxRQTNCRyxBQWtDQSxJQXhCSSxBQWtCUixPQVJJLElBbkJDLEFBNEJHLEFBTUYsUUF4QjRCLEdBVTdCLEtBbkJNLENBa0NBLEVBTkcsUUFSVCxPQXpCbEIsS0FSeUIsSUFLekIsQUE2QmtDLENBUWxDLE1BbkIyQixzQkFZM0IsR0FYYSxXQUNVLHFCQUNDLGNBWkosQ0FrQ0EsT0FyQkgsU0ExQkksQ0FjTCxDQWtDa0IsSUFyQmxDLFNBWnFCLGdCQWtDckIsR0FqQ0EsMkRBZkEiLCJmaWxlIjoiL2hvbWUvbGVld2VpL0Rlc2t0b3AvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvcXVlcnlSZW5hbWUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUXVlcnlTdGF0ZSwgSVN0dWRlbnQsIElSZXNwIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHsgcmVuYW1lQXBpIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZGF0YTogSVN0dWRlbnQ7XG4gIGNoYW5nZUN1cnJlbnQ6ICh1cGRhdGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IGhhbmRsZU5ld05hbWUgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TmV3TmFtZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhOiBJUmVzcCA9IGF3YWl0IHJlbmFtZUFwaShwcm9wcy5kYXRhLnN0dWRlbnRfaWQsIG5ld05hbWUpO1xuICAgIGlmIChudWxsICE9PSBkYXRhICYmIGRhdGEuYXBwbGllZCkge1xuICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChRdWVyeVN0YXRlLkVORCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KGRhdGEuZXJyb3JfbXNnKTtcbiAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoUXVlcnlTdGF0ZS5JTlBVVCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY2VudGVyIGNvbHVtblwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj7mrLLmm7TmlLnnmoTkuK3oi7Hmloflp5PlkI08L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cImlucHV0LWNoaW5lc2VcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIuS4reaWh1wiXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOZXdOYW1lfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiaW5wdXQtZW5nbGlzaFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi6Iux5paHIC0g5q2k5qyE5L2N5pqr5LiN6ZaL5pS+XCJcbiAgICAgICAgZGlzYWJsZWRcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyIHJvd1wiIHN0eWxlPXt7IG1hcmdpblRvcDogJzQ2cHgnIH19PlxuICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnNjBweCcgfX0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIDxzcGFuPueiuuiqjSBDT05GSVJNPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZUN1cnJlbnQoUXVlcnlTdGF0ZS5JTlBVVCl9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj7ov5Tlm548L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBTZWdvZVVJO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjNjc2NDY0O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiA1OTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDczcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiA1cHggNnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogRWR3YXJkaWFuU2NyaXB0SVRDO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMTg2LCAxODQsIDE4NCwgMC42Nik7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMxcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3ODFlNjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24gPiBzcGFuIHtcbiAgICAgICAgICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC45Mik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gICk7XG59KSBhcyBSZWFjdC5GQzxJUHJvcHM+O1xuIl19 */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/queryRename.tsx */"));
});

/***/ })

})
//# sourceMappingURL=query.js.9d6886e37a3ebc3a3a91.hot-update.js.map