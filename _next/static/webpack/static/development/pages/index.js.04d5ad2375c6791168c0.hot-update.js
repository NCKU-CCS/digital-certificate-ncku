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
    className: "jsx-516002856" + " " + "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, isLoad ? __jsx("div", {
    id: "load",
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u8CC7\u6599\u78BA\u8A8D"), __jsx("span", {
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u5B78\u751F\u59D3\u540D\uFF1A", props.data.chinese_name), __jsx("span", {
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u51FA\u751F\u65E5\u671F\uFF1A", props.data.birth_date), __jsx("span", {
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u7562\u696D\u7CFB\u6240\uFF1A", props.data.graduate_univ + props.data.graduate_dept), __jsx("span", {
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\u5176\u4ED6\u8CC7\u8A0A\uFF1A", props.data.minor_d_major), __jsx("span", {
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u7533\u8ACB\u8B49\u66F8\uFF1A", "".concat(props.isEnglish ? '英文' : '中文', "\u8B49\u66F8 / ").concat(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? '初辦' : '補證')), __jsx("div", {
    className: "jsx-516002856" + " " + "buttonlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].INPUT : _constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].INPUT);
    },
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u91CD\u65B0\u8F38\u5165"), __jsx("div", {
    style: {
      width: '10%'
    },
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    className: "jsx-516002856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u78BA\u5B9A\u9001\u51FA"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "516002856",
    __self: this
  }, ".ready.jsx-516002856{min-width:800px;min-height:600px;border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}.buttonlist.jsx-516002856{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}h1.jsx-516002856{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}span.jsx-516002856{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}button.jsx-516002856{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}#load.jsx-516002856{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtCLEFBRzJCLEFBV0gsQUFRbUIsQUFNakIsQUFNQSxBQVFHLGVBYkYsQUFNRixDQS9CRyxFQXVDVCxRQUNDLEdBUkUsRUFORCxDQVBLLENBbEJJLEVBd0NhLEtBUmIsQ0FOSyxNQVBOLEtBbEJ5QixPQWdDRCxNQWJ4QixBQU9wQixTQWpCeUIsU0FXekIsU0FuQmUsTUFnQ2EsMEJBQzVCLGdCQU1lLDBCQXRDYyxPQVFGLHlDQStCTix5REF0Q0EsbUJBUUEsaUJBK0JJLG9EQTlCRixLQVJDLGdCQVNaLFVBQ1osZ0JBNkJ3QixvQ0F0Q1IsY0FDaEIsNEJBc0NBIiwiZmlsZSI6Ii9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4vbG9hZGluZyc7XG5pbXBvcnQgeyBJU3R1ZGVudCwgSVJlc3AsIEluZGV4U3RhdGUsIFJlaXNzdWVTdGF0ZSB9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7IGlzc3VlQXBpLCByZWlzc3VlQXBpIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY3VycmVudDogSW5kZXhTdGF0ZSB8IFJlaXNzdWVTdGF0ZTtcbiAgZGF0YTogSVN0dWRlbnQ7XG4gIGlzRW5nbGlzaDogYm9vbGVhbjtcbiAgY2hhbmdlQ3VycmVudDogKHVwZGF0ZTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzTG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwcm9wcy5jdXJyZW50ID09PSBJbmRleFN0YXRlLlJFQURZKSB7XG4gICAgICBjb25zdCBkYXRhOiBJUmVzcCA9IGF3YWl0IGlzc3VlQXBpKFxuICAgICAgICBwcm9wcy5kYXRhLnN0dWRlbnRfaWQsXG4gICAgICAgIHByb3BzLmlzRW5nbGlzaCxcbiAgICAgICk7XG4gICAgICBpZiAobnVsbCAhPT0gZGF0YSAmJiBkYXRhLmFwcGxpZWQpIHtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChJbmRleFN0YXRlLlNVQ0NFU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQobnVsbCAhPT0gZGF0YSA/IGRhdGEuZXJyb3JfbXNnIDogJ0Nhbm5vdCBnZXQgZGF0YScpO1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KEluZGV4U3RhdGUuSU5QVVQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRhOiBJUmVzcCA9IGF3YWl0IHJlaXNzdWVBcGkoXG4gICAgICAgIHByb3BzLmRhdGEuc3R1ZGVudF9pZCxcbiAgICAgICAgcHJvcHMuaXNFbmdsaXNoLFxuICAgICAgKTtcbiAgICAgIGlmIChudWxsICE9PSBkYXRhICYmIGRhdGEuYXBwbGllZCkge1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFJlaXNzdWVTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KG51bGwgIT09IGRhdGEgPyBkYXRhLmVycm9yX21zZyA6ICdDYW5ub3QgZ2V0IGRhdGEnKTtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChSZWlzc3VlU3RhdGUuSU5QVVQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZHlcIj5cbiAgICAgIHtcbiAgICAgICAgKGlzTG9hZCkgPyAoXG4gICAgICAgICAgPGRpdiBpZD1cImxvYWRcIj5cbiAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGgxPuizh+aWmeeiuuiqjTwvaDE+XG4gICAgICAgICAgICA8c3Bhbj7lrbjnlJ/lp5PlkI3vvJp7cHJvcHMuZGF0YS5jaGluZXNlX25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+5Ye655Sf5pel5pyf77yae3Byb3BzLmRhdGEuYmlydGhfZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAg55Wi5qWt57O75omA77yae3Byb3BzLmRhdGEuZ3JhZHVhdGVfdW5pdiArIHByb3BzLmRhdGEuZ3JhZHVhdGVfZGVwdH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPuWFtuS7luizh+ioiu+8mntwcm9wcy5kYXRhLm1pbm9yX2RfbWFqb3J9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIOeUs+iri+itieabuO+8mlxuICAgICAgICAgICAgICB7YCR7cHJvcHMuaXNFbmdsaXNoID8gJ+iLseaWhycgOiAn5Lit5paHJ33orYnmm7ggLyAke1xuICAgICAgICAgICAgICAgIHByb3BzLmN1cnJlbnQgPT09IEluZGV4U3RhdGUuUkVBRFkgPyAn5Yid6L6mJyA6ICfoo5zorYknXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25saXN0XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY3VycmVudCA9PT0gSW5kZXhTdGF0ZS5SRUFEWVxuICAgICAgICAgICAgICAgICAgICAgID8gSW5kZXhTdGF0ZS5JTlBVVFxuICAgICAgICAgICAgICAgICAgICAgIDogUmVpc3N1ZVN0YXRlLklOUFVULFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOmHjeaWsOi8uOWFpVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwJScgfX0gLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+56K65a6a6YCB5Ye6PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZWFkeSB7XG4gICAgICAgICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgNnB4IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25saXN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4IDA7XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICM3MDcwNzA7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDI4cHggMCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDE5cHggMHB4IDBweCAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCAxMjUsIDIzMCwgMC45Nyk7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2xvYWQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pIGFzIFJlYWN0LkZDPElQcm9wcz47XG4iXX0= */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.04d5ad2375c6791168c0.hot-update.js.map