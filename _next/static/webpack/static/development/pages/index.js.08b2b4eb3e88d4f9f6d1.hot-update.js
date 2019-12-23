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
    className: "jsx-2343236802" + " " + "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, isLoad ? __jsx("div", {
    id: "load",
    className: "jsx-2343236802",
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
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u8CC7\u6599\u78BA\u8A8D"), __jsx("span", {
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u5B78\u751F\u59D3\u540D\uFF1A", props.data.chinese_name), __jsx("span", {
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u51FA\u751F\u65E5\u671F\uFF1A", props.data.birth_date), __jsx("span", {
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u7562\u696D\u7CFB\u6240\uFF1A", props.data.graduate_univ + props.data.graduate_dept), __jsx("span", {
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\u5176\u4ED6\u8CC7\u8A0A\uFF1A", props.data.minor_d_major), __jsx("span", {
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u7533\u8ACB\u8B49\u66F8\uFF1A", "".concat(props.isEnglish ? '英文' : '中文', "\u8B49\u66F8 / ").concat(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? '初辦' : '補證')), __jsx("div", {
    className: "jsx-2343236802" + " " + "buttonlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].INPUT : _constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].INPUT);
    },
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u91CD\u65B0\u8F38\u5165"), __jsx("div", {
    style: {
      width: '10%'
    },
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    className: "jsx-2343236802",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u78BA\u5B9A\u9001\u51FA"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2343236802",
    __self: this
  }, ".ready.jsx-2343236802{min-width:800px;border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}.buttonlist.jsx-2343236802{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}h1.jsx-2343236802{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}span.jsx-2343236802{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}button.jsx-2343236802{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}#load.jsx-2343236802{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px black solid;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtCLEFBRzJCLEFBVUgsQUFRbUIsQUFNakIsQUFNQSxBQVFHLGVBYkYsQUFNRixDQTlCSyxFQXNDWCxRQUNDLEdBUkUsRUFORCxDQVBLLEdBakI0QixBQXVDWCxLQVJiLENBTkssTUFQTixZQWN3QixNQWJ4QixBQU9wQixTQWpCeUIsQ0FSVixRQW1CZixlQWE0QiwwQkFDNUIsZ0JBTWUsU0F0Q2Msd0JBUUYseUNBK0JOLHdDQXRDQSxvQ0FRQSxpQkErQkksd0NBdENELFlBUUQscUJBQ1gsVUFDWixnQkE2QndCLG1CQXRDUixjQUNoQiw2Q0FzQ3lCLHVCQUN6QiIsImZpbGUiOiIvaG9tZS9sZWV3ZWkvRGVza3RvcC9kaWdpdGFsLWNlcnRpZmljYXRlLW5ja3UvY29tcG9uZW50cy9yZWFkeS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL2xvYWRpbmcnO1xuaW1wb3J0IHsgSVN0dWRlbnQsIElSZXNwLCBJbmRleFN0YXRlLCBSZWlzc3VlU3RhdGUgfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgeyBpc3N1ZUFwaSwgcmVpc3N1ZUFwaSB9IGZyb20gJy4uL3V0aWxzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGN1cnJlbnQ6IEluZGV4U3RhdGUgfCBSZWlzc3VlU3RhdGU7XG4gIGRhdGE6IElTdHVkZW50O1xuICBpc0VuZ2xpc2g6IGJvb2xlYW47XG4gIGNoYW5nZUN1cnJlbnQ6ICh1cGRhdGU6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocHJvcHMuY3VycmVudCA9PT0gSW5kZXhTdGF0ZS5SRUFEWSkge1xuICAgICAgY29uc3QgZGF0YTogSVJlc3AgPSBhd2FpdCBpc3N1ZUFwaShcbiAgICAgICAgcHJvcHMuZGF0YS5zdHVkZW50X2lkLFxuICAgICAgICBwcm9wcy5pc0VuZ2xpc2gsXG4gICAgICApO1xuICAgICAgaWYgKG51bGwgIT09IGRhdGEgJiYgZGF0YS5hcHBsaWVkKSB7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoSW5kZXhTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KG51bGwgIT09IGRhdGEgPyBkYXRhLmVycm9yX21zZyA6ICdDYW5ub3QgZ2V0IGRhdGEnKTtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChJbmRleFN0YXRlLklOUFVUKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0YTogSVJlc3AgPSBhd2FpdCByZWlzc3VlQXBpKFxuICAgICAgICBwcm9wcy5kYXRhLnN0dWRlbnRfaWQsXG4gICAgICAgIHByb3BzLmlzRW5nbGlzaCxcbiAgICAgICk7XG4gICAgICBpZiAobnVsbCAhPT0gZGF0YSAmJiBkYXRhLmFwcGxpZWQpIHtcbiAgICAgICAgcHJvcHMuY2hhbmdlQ3VycmVudChSZWlzc3VlU3RhdGUuU1VDQ0VTUyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChudWxsICE9PSBkYXRhID8gZGF0YS5lcnJvcl9tc2cgOiAnQ2Fubm90IGdldCBkYXRhJyk7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoUmVpc3N1ZVN0YXRlLklOUFVUKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWR5XCI+XG4gICAgICB7XG4gICAgICAgIChpc0xvYWQpID8gKFxuICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkXCI+XG4gICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxoMT7os4fmlpnnorroqo08L2gxPlxuICAgICAgICAgICAgPHNwYW4+5a2455Sf5aeT5ZCN77yae3Byb3BzLmRhdGEuY2hpbmVzZV9uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPuWHuueUn+aXpeacn++8mntwcm9wcy5kYXRhLmJpcnRoX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIOeVoualreezu+aJgO+8mntwcm9wcy5kYXRhLmdyYWR1YXRlX3VuaXYgKyBwcm9wcy5kYXRhLmdyYWR1YXRlX2RlcHR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7lhbbku5bos4foqIrvvJp7cHJvcHMuZGF0YS5taW5vcl9kX21ham9yfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICDnlLPoq4vorYnmm7jvvJpcbiAgICAgICAgICAgICAge2Ake3Byb3BzLmlzRW5nbGlzaCA/ICfoi7HmlocnIDogJ+S4reaWhyd96K2J5pu4IC8gJHtcbiAgICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50ID09PSBJbmRleFN0YXRlLlJFQURZID8gJ+WInei+picgOiAn6KOc6K2JJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ubGlzdFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmN1cnJlbnQgPT09IEluZGV4U3RhdGUuUkVBRFlcbiAgICAgICAgICAgICAgICAgICAgICA/IEluZGV4U3RhdGUuSU5QVVRcbiAgICAgICAgICAgICAgICAgICAgICA6IFJlaXNzdWVTdGF0ZS5JTlBVVCxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDph43mlrDovLjlhaVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMCUnIH19IC8+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PueiuuWumumAgeWHujwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVhZHkge1xuICAgICAgICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDZweCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9ubGlzdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjNzA3MDcwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyOHB4IDAgMCAwO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAxOXB4IDBweCAwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgMTI1LCAyMzAsIDAuOTcpO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCA0MHB4IDVweCA0MHB4O1xuICAgICAgICB9XG4gICAgICAgICNsb2FkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59KSBhcyBSZWFjdC5GQzxJUHJvcHM+O1xuIl19 */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.08b2b4eb3e88d4f9f6d1.hot-update.js.map