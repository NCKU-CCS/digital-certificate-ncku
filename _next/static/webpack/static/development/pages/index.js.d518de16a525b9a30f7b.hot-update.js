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
    className: "jsx-595112842" + " " + "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u8CC7\u6599\u78BA\u8A8D"), __jsx("span", {
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\u5B78\u751F\u59D3\u540D\uFF1A", props.data.chinese_name), __jsx("span", {
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u51FA\u751F\u65E5\u671F\uFF1A", props.data.birth_date), __jsx("span", {
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u7562\u696D\u7CFB\u6240\uFF1A", props.data.graduate_univ + props.data.graduate_dept), __jsx("span", {
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u5176\u4ED6\u8CC7\u8A0A\uFF1A", props.data.minor_d_major), __jsx("span", {
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u7533\u8ACB\u8B49\u66F8\uFF1A", "".concat(props.isEnglish ? '英文' : '中文', "\u8B49\u66F8 / ").concat(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? '初辦' : '補證')), __jsx("div", {
    className: "jsx-595112842" + " " + "buttonlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].INPUT : _constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].INPUT);
    },
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u91CD\u65B0\u8F38\u5165"), __jsx("div", {
    style: {
      width: '10%'
    },
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    className: "jsx-595112842",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u78BA\u5B9A\u9001\u51FA"), isLoad ? __jsx("div", {
    id: "load",
    className: "jsx-595112842",
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
    id: "595112842",
    __self: this
  }, ".ready.jsx-595112842{width:800px;border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}.buttonlist.jsx-595112842{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}h1.jsx-595112842{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}span.jsx-595112842{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}button.jsx-595112842{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBR3VCLEFBVUMsQUFRbUIsQUFNakIsQUFNQSxZQTdCSSxHQXdCSCxBQU1GLGNBQ0gsRUE5QmdDLEFBd0JqQyxDQVBLLFFBY0ksQ0FOSyxNQVBOLFlBY3dCLE1BYnhCLEFBT3BCLE1BekJlLEdBUVUsU0FXekIsZUFhNEIsMEJBQzVCLHFCQWhDNkIsNEJBUUYsNkVBUE4sd0NBUUEscURBUEcsZ0JBUUQscUJBQ1gsVUFDWiwrQkFUZ0IsY0FDaEIiLCJmaWxlIjoiL2hvbWUvbGVld2VpL0Rlc2t0b3AvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvcmVhZHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9sb2FkaW5nJztcbmltcG9ydCB7IElTdHVkZW50LCBJUmVzcCwgSW5kZXhTdGF0ZSwgUmVpc3N1ZVN0YXRlIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHsgaXNzdWVBcGksIHJlaXNzdWVBcGkgfSBmcm9tICcuLi91dGlscyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjdXJyZW50OiBJbmRleFN0YXRlIHwgUmVpc3N1ZVN0YXRlO1xuICBkYXRhOiBJU3R1ZGVudDtcbiAgaXNFbmdsaXNoOiBib29sZWFuO1xuICBjaGFuZ2VDdXJyZW50OiAodXBkYXRlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCBbaXNMb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb3BzLmN1cnJlbnQgPT09IEluZGV4U3RhdGUuUkVBRFkpIHtcbiAgICAgIGNvbnN0IGRhdGE6IElSZXNwID0gYXdhaXQgaXNzdWVBcGkoXG4gICAgICAgIHByb3BzLmRhdGEuc3R1ZGVudF9pZCxcbiAgICAgICAgcHJvcHMuaXNFbmdsaXNoLFxuICAgICAgKTtcbiAgICAgIGlmIChudWxsICE9PSBkYXRhICYmIGRhdGEuYXBwbGllZCkge1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KEluZGV4U3RhdGUuU1VDQ0VTUyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChudWxsICE9PSBkYXRhID8gZGF0YS5lcnJvcl9tc2cgOiAnQ2Fubm90IGdldCBkYXRhJyk7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoSW5kZXhTdGF0ZS5JTlBVVCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGE6IElSZXNwID0gYXdhaXQgcmVpc3N1ZUFwaShcbiAgICAgICAgcHJvcHMuZGF0YS5zdHVkZW50X2lkLFxuICAgICAgICBwcm9wcy5pc0VuZ2xpc2gsXG4gICAgICApO1xuICAgICAgaWYgKG51bGwgIT09IGRhdGEgJiYgZGF0YS5hcHBsaWVkKSB7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoUmVpc3N1ZVN0YXRlLlNVQ0NFU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQobnVsbCAhPT0gZGF0YSA/IGRhdGEuZXJyb3JfbXNnIDogJ0Nhbm5vdCBnZXQgZGF0YScpO1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFJlaXNzdWVTdGF0ZS5JTlBVVCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkeVwiPlxuICAgICAgPGgxPuizh+aWmeeiuuiqjTwvaDE+XG4gICAgICA8c3Bhbj7lrbjnlJ/lp5PlkI3vvJp7cHJvcHMuZGF0YS5jaGluZXNlX25hbWV9PC9zcGFuPlxuICAgICAgPHNwYW4+5Ye655Sf5pel5pyf77yae3Byb3BzLmRhdGEuYmlydGhfZGF0ZX08L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAg55Wi5qWt57O75omA77yae3Byb3BzLmRhdGEuZ3JhZHVhdGVfdW5pdiArIHByb3BzLmRhdGEuZ3JhZHVhdGVfZGVwdH1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuPuWFtuS7luizh+ioiu+8mntwcm9wcy5kYXRhLm1pbm9yX2RfbWFqb3J9PC9zcGFuPlxuICAgICAgPHNwYW4+XG4gICAgICAgIOeUs+iri+itieabuO+8mlxuICAgICAgICB7YCR7cHJvcHMuaXNFbmdsaXNoID8gJ+iLseaWhycgOiAn5Lit5paHJ33orYnmm7ggLyAke1xuICAgICAgICAgIHByb3BzLmN1cnJlbnQgPT09IEluZGV4U3RhdGUuUkVBRFkgPyAn5Yid6L6mJyA6ICfoo5zorYknXG4gICAgICAgIH1gfVxuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25saXN0XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChcbiAgICAgICAgICAgICAgcHJvcHMuY3VycmVudCA9PT0gSW5kZXhTdGF0ZS5SRUFEWVxuICAgICAgICAgICAgICAgID8gSW5kZXhTdGF0ZS5JTlBVVFxuICAgICAgICAgICAgICAgIDogUmVpc3N1ZVN0YXRlLklOUFVULFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIOmHjeaWsOi8uOWFpVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwJScgfX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+56K65a6a6YCB5Ye6PC9idXR0b24+XG4gICAgICAgIHtcbiAgICAgICAgICAoaXNMb2FkKSA/IChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkXCI+XG4gICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKDw+PC8+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlYWR5IHtcbiAgICAgICAgICB3aWR0aDogODAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDZweCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9ubGlzdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjNzA3MDcwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyOHB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAxOXB4IDBweCAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgMTI1LCAyMzAsIDAuOTcpO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA0MHB4IDVweCA0MHB4O1xuICAgICAgICB9XG4gICAgICAgICNsb2FkIHtcblxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59KSBhcyBSZWFjdC5GQzxJUHJvcHM+O1xuIl19 */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.d518de16a525b9a30f7b.hot-update.js.map