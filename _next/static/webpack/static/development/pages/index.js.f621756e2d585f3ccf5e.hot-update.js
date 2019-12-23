webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ready.tsx":
/*!******************************!*\
  !*** ./components/ready.tsx ***!
  \******************************/
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
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading */ "./components/loading.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./constant.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


var _jsxFileName = "/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLoad = _useState[0],
      setLoad = _useState[1];

  var handleClick =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var data, _data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              if (!(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY)) {
                _context.next = 8;
                break;
              }

              _context.next = 4;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["issueApi"])(props.data.student_id, props.isEnglish);

            case 4:
              data = _context.sent;

              if (null !== data && data.applied) {
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].SUCCESS);
              } else {
                alert(null !== data ? data.error_msg : 'Cannot get data');
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].INPUT);
              }

              _context.next = 12;
              break;

            case 8:
              _context.next = 10;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["reissueApi"])(props.data.student_id, props.isEnglish);

            case 10:
              _data = _context.sent;

              if (null !== _data && _data.applied) {
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].SUCCESS);
              } else {
                alert(null !== _data ? _data.error_msg : 'Cannot get data');
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].INPUT);
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "jsx-4082931692" + " " + "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u8CC7\u6599\u78BA\u8A8D"), __jsx("span", {
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u5B78\u751F\u59D3\u540D\uFF1A", props.data.chinese_name), __jsx("span", {
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u51FA\u751F\u65E5\u671F\uFF1A", props.data.birth_date), __jsx("span", {
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u7562\u696D\u7CFB\u6240\uFF1A", props.data.graduate_univ + props.data.graduate_dept), __jsx("span", {
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u5176\u4ED6\u8CC7\u8A0A\uFF1A", props.data.minor_d_major), __jsx("span", {
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u7533\u8ACB\u8B49\u66F8\uFF1A", "".concat(props.isEnglish ? '英文' : '中文', "\u8B49\u66F8 / ").concat(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? '初辦' : '補證')), __jsx("div", {
    className: "jsx-4082931692" + " " + "buttonlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].INPUT : _constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].INPUT);
    },
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u91CD\u65B0\u8F38\u5165"), __jsx("div", {
    style: {
      width: '10%'
    },
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u78BA\u5B9A\u9001\u51FA"), isLoad ? __jsx("div", {
    id: "load",
    className: "jsx-4082931692",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4082931692",
    __self: this
  }, ".ready.jsx-4082931692{width:800px;border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}.buttonlist.jsx-4082931692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}h1.jsx-4082931692{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}span.jsx-4082931692{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}button.jsx-4082931692{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}#load.jsx-4082931692{position:absolute;top:50%;left:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBR3VCLEFBVUMsQUFRbUIsQUFNakIsQUFNQSxBQVFHLFlBckNDLEdBd0JILEFBTUYsR0FRTixRQUNDLEdBUkUsRUE5QmdDLEFBd0JqQyxDQVBLLEdBc0JqQixLQVJxQixDQU5LLE1BUE4sWUFjd0IsTUFieEIsQUFPcEIsTUF6QmUsR0FRVSxTQVd6QixlQWE0QiwwQkFDNUIscUJBaEM2Qiw0QkFRRiw2RUFQTix3Q0FRQSxxREFQRyxnQkFRRCxxQkFDWCxVQUNaLCtCQVRnQixjQUNoQiIsImZpbGUiOiIvaG9tZS9sZWV3ZWkvRGVza3RvcC9kaWdpdGFsLWNlcnRpZmljYXRlLW5ja3UvY29tcG9uZW50cy9yZWFkeS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IHsgSVN0dWRlbnQsIElSZXNwLCBJbmRleFN0YXRlLCBSZWlzc3VlU3RhdGUgfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgeyBpc3N1ZUFwaSwgcmVpc3N1ZUFwaSB9IGZyb20gJy4uL3V0aWxzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGN1cnJlbnQ6IEluZGV4U3RhdGUgfCBSZWlzc3VlU3RhdGU7XG4gIGRhdGE6IElTdHVkZW50O1xuICBpc0VuZ2xpc2g6IGJvb2xlYW47XG4gIGNoYW5nZUN1cnJlbnQ6ICh1cGRhdGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvcHMuY3VycmVudCA9PT0gSW5kZXhTdGF0ZS5SRUFEWSkge1xuICAgICAgY29uc3QgZGF0YTogSVJlc3AgPSBhd2FpdCBpc3N1ZUFwaShcbiAgICAgICAgcHJvcHMuZGF0YS5zdHVkZW50X2lkLFxuICAgICAgICBwcm9wcy5pc0VuZ2xpc2gsXG4gICAgICApO1xuICAgICAgaWYgKG51bGwgIT09IGRhdGEgJiYgZGF0YS5hcHBsaWVkKSB7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoSW5kZXhTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KG51bGwgIT09IGRhdGEgPyBkYXRhLmVycm9yX21zZyA6ICdDYW5ub3QgZ2V0IGRhdGEnKTtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChJbmRleFN0YXRlLklOUFVUKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YTogSVJlc3AgPSBhd2FpdCByZWlzc3VlQXBpKFxuICAgICAgICBwcm9wcy5kYXRhLnN0dWRlbnRfaWQsXG4gICAgICAgIHByb3BzLmlzRW5nbGlzaCxcbiAgICAgICk7XG4gICAgICBpZiAobnVsbCAhPT0gZGF0YSAmJiBkYXRhLmFwcGxpZWQpIHtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChSZWlzc3VlU3RhdGUuU1VDQ0VTUyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChudWxsICE9PSBkYXRhID8gZGF0YS5lcnJvcl9tc2cgOiAnQ2Fubm90IGdldCBkYXRhJyk7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoUmVpc3N1ZVN0YXRlLklOUFVUKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWR5XCI+XG4gICAgICA8aDE+6LOH5paZ56K66KqNPC9oMT5cbiAgICAgIDxzcGFuPuWtuOeUn+Wnk+WQje+8mntwcm9wcy5kYXRhLmNoaW5lc2VfbmFtZX08L3NwYW4+XG4gICAgICA8c3Bhbj7lh7rnlJ/ml6XmnJ/vvJp7cHJvcHMuZGF0YS5iaXJ0aF9kYXRlfTwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICDnlaLmpa3ns7vmiYDvvJp7cHJvcHMuZGF0YS5ncmFkdWF0ZV91bml2ICsgcHJvcHMuZGF0YS5ncmFkdWF0ZV9kZXB0fVxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4+5YW25LuW6LOH6KiK77yae3Byb3BzLmRhdGEubWlub3JfZF9tYWpvcn08L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAg55Sz6KuL6K2J5pu477yaXG4gICAgICAgIHtgJHtwcm9wcy5pc0VuZ2xpc2ggPyAn6Iux5paHJyA6ICfkuK3mlocnfeitieabuCAvICR7XG4gICAgICAgICAgcHJvcHMuY3VycmVudCA9PT0gSW5kZXhTdGF0ZS5SRUFEWSA/ICfliJ3ovqYnIDogJ+ijnOitiSdcbiAgICAgICAgfWB9XG4gICAgICA8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmxpc3RcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFxuICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50ID09PSBJbmRleFN0YXRlLlJFQURZXG4gICAgICAgICAgICAgICAgPyBJbmRleFN0YXRlLklOUFVUXG4gICAgICAgICAgICAgICAgOiBSZWlzc3VlU3RhdGUuSU5QVVQsXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAg6YeN5paw6Ly45YWlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAlJyB9fSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7norrlrprpgIHlh7o8L2J1dHRvbj5cbiAgICAgICAge1xuICAgICAgICAgIChpc0xvYWQpID8gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxvYWRcIj5cbiAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoPD48Lz4pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVhZHkge1xuICAgICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgNnB4IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICM3MDcwNzA7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDI4cHggMCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDE5cHggMHB4IDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCAxMjUsIDIzMCwgMC45Nyk7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2xvYWQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pIGFzIFJlYWN0LkZDPElQcm9wcz47XG4iXX0= */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.f621756e2d585f3ccf5e.hot-update.js.map