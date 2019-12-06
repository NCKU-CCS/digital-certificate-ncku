webpackHotUpdate("static/development/pages/reissue.js",{

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
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./constant.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


var _jsxFileName = "/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
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

              if (!(props.current === _constant__WEBPACK_IMPORTED_MODULE_4__["IndexState"].READY)) {
                _context.next = 8;
                break;
              }

              _context.next = 4;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["issueApi"])(props.data.student_id, props.isEnglish);

            case 4:
              data = _context.sent;

              if (null !== data && data.applied) {
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["IndexState"].SUCCESS);
              } else {
                alert(null !== data ? 'Cannot get data' : data.error_msg);
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["IndexState"].INPUT);
              }

              _context.next = 12;
              break;

            case 8:
              _context.next = 10;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["reissueApi"])(props.data.student_id, props.isEnglish);

            case 10:
              _data = _context.sent;

              if (null !== _data && _data.applied) {
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["ReissueState"].SUCCESS);
              } else {
                alert(null !== _data ? 'Cannot get data' : _data.error_msg);
                props.changeCurrent(_constant__WEBPACK_IMPORTED_MODULE_4__["ReissueState"].INPUT);
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
    className: "jsx-788852166" + " " + "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u8CC7\u6599\u78BA\u8A8D"), __jsx("span", {
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u5B78\u751F\u59D3\u540D\uFF1A", props.data.chinese_name), __jsx("span", {
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\u51FA\u751F\u65E5\u671F\uFF1A", props.data.birth_date), __jsx("span", {
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u7562\u696D\u7CFB\u6240\uFF1A", props.data.graduate_univ + props.data.graduate_dept), __jsx("span", {
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u5176\u4ED6\u8CC7\u8A0A\uFF1A", props.data.minor_d_major), __jsx("span", {
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u7533\u8ACB\u8B49\u66F8\uFF1A", "".concat(props.isEnglish ? '英文' : '中文', "\u8B49\u66F8 / ").concat(props.current === _constant__WEBPACK_IMPORTED_MODULE_4__["IndexState"].READY ? '初辦' : '補證')), __jsx("div", {
    className: "jsx-788852166" + " " + "buttonlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(props.current === _constant__WEBPACK_IMPORTED_MODULE_4__["IndexState"].READY ? _constant__WEBPACK_IMPORTED_MODULE_4__["IndexState"].INPUT : _constant__WEBPACK_IMPORTED_MODULE_4__["ReissueState"].INPUT);
    },
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\u91CD\u65B0\u8F38\u5165"), __jsx("div", {
    style: {
      width: '10%'
    },
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    className: "jsx-788852166",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "\u78BA\u5B9A\u9001\u51FA")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "788852166",
    __self: this
  }, ".ready.jsx-788852166{width:800px;border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}.buttonlist.jsx-788852166{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}h1.jsx-788852166{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}span.jsx-788852166{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}button.jsx-788852166{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRWtCLEFBR3VCLEFBVUMsQUFRbUIsQUFNakIsQUFNQSxZQTdCSSxHQXdCSCxBQU1GLGNBQ0gsRUE5QmdDLEFBd0JqQyxDQVBLLFFBY0ksQ0FOSyxNQVBOLFlBY3dCLE1BYnhCLEFBT3BCLE1BekJlLEdBUVUsU0FXekIsZUFhNEIsMEJBQzVCLHFCQWhDNkIsNEJBUUYsNkVBUE4sd0NBUUEscURBUEcsZ0JBUUQscUJBQ1gsVUFDWiwrQkFUZ0IsY0FDaEIiLCJmaWxlIjoiL2hvbWUvbGVld2VpL0Rlc2t0b3AvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvcmVhZHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElTdHVkZW50LCBJUmVzcCwgSW5kZXhTdGF0ZSwgUmVpc3N1ZVN0YXRlIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHsgaXNzdWVBcGksIHJlaXNzdWVBcGkgfSBmcm9tICcuLi91dGlscyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjdXJyZW50OiBJbmRleFN0YXRlIHwgUmVpc3N1ZVN0YXRlO1xuICBkYXRhOiBJU3R1ZGVudDtcbiAgaXNFbmdsaXNoOiBib29sZWFuO1xuICBjaGFuZ2VDdXJyZW50OiAodXBkYXRlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChwcm9wcy5jdXJyZW50ID09PSBJbmRleFN0YXRlLlJFQURZKSB7XG4gICAgICBjb25zdCBkYXRhOiBJUmVzcCA9IGF3YWl0IGlzc3VlQXBpKFxuICAgICAgICBwcm9wcy5kYXRhLnN0dWRlbnRfaWQsXG4gICAgICAgIHByb3BzLmlzRW5nbGlzaCxcbiAgICAgICk7XG4gICAgICBpZiAobnVsbCE9PWRhdGEgJiYgZGF0YS5hcHBsaWVkKSB7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoSW5kZXhTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KG51bGwhPT1kYXRhID8gJ0Nhbm5vdCBnZXQgZGF0YScgOiBkYXRhLmVycm9yX21zZyk7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoSW5kZXhTdGF0ZS5JTlBVVCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGE6IElSZXNwID0gYXdhaXQgcmVpc3N1ZUFwaShcbiAgICAgICAgcHJvcHMuZGF0YS5zdHVkZW50X2lkLFxuICAgICAgICBwcm9wcy5pc0VuZ2xpc2gsXG4gICAgICApO1xuICAgICAgaWYgKG51bGwhPT1kYXRhICYmIGRhdGEuYXBwbGllZCkge1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFJlaXNzdWVTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KG51bGwhPT1kYXRhID8gJ0Nhbm5vdCBnZXQgZGF0YScgOmRhdGEuZXJyb3JfbXNnKTtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChSZWlzc3VlU3RhdGUuSU5QVVQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZHlcIj5cbiAgICAgIDxoMT7os4fmlpnnorroqo08L2gxPlxuICAgICAgPHNwYW4+5a2455Sf5aeT5ZCN77yae3Byb3BzLmRhdGEuY2hpbmVzZV9uYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuPuWHuueUn+aXpeacn++8mntwcm9wcy5kYXRhLmJpcnRoX2RhdGV9PC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIOeVoualreezu+aJgO+8mntwcm9wcy5kYXRhLmdyYWR1YXRlX3VuaXYgKyBwcm9wcy5kYXRhLmdyYWR1YXRlX2RlcHR9XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj7lhbbku5bos4foqIrvvJp7cHJvcHMuZGF0YS5taW5vcl9kX21ham9yfTwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICDnlLPoq4vorYnmm7jvvJpcbiAgICAgICAge2Ake3Byb3BzLmlzRW5nbGlzaCA/ICfoi7HmlocnIDogJ+S4reaWhyd96K2J5pu4IC8gJHtcbiAgICAgICAgICBwcm9wcy5jdXJyZW50ID09PSBJbmRleFN0YXRlLlJFQURZID8gJ+WInei+picgOiAn6KOc6K2JJ1xuICAgICAgICB9YH1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ubGlzdFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoXG4gICAgICAgICAgICAgIHByb3BzLmN1cnJlbnQgPT09IEluZGV4U3RhdGUuUkVBRFlcbiAgICAgICAgICAgICAgICA/IEluZGV4U3RhdGUuSU5QVVRcbiAgICAgICAgICAgICAgICA6IFJlaXNzdWVTdGF0ZS5JTlBVVCxcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICDph43mlrDovLjlhaVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMCUnIH19IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PueiuuWumumAgeWHujwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZWFkeSB7XG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCA2cHggcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbmxpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzcwNzA3MDtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMjhweCAwIDAgMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMTlweCAwcHggMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDEyNSwgMjMwLCAwLjk3KTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggNDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufSkgYXMgUmVhY3QuRkM8SVByb3BzPjtcbiJdfQ== */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx */"));
});

/***/ })

})
//# sourceMappingURL=reissue.js.a1046f7b1bda4dac1811.hot-update.js.map