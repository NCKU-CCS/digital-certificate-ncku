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
    className: "jsx-475231467" + " " + "ready",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, isLoad ? __jsx("div", {
    id: "load",
    className: "jsx-475231467",
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
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u8CC7\u6599\u78BA\u8A8D"), __jsx("span", {
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u5B78\u751F\u59D3\u540D\uFF1A", props.data.chinese_name), __jsx("span", {
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u51FA\u751F\u65E5\u671F\uFF1A", props.data.birth_date), __jsx("span", {
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u7562\u696D\u7CFB\u6240\uFF1A", props.data.graduate_univ + props.data.graduate_dept), __jsx("span", {
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\u5176\u4ED6\u8CC7\u8A0A\uFF1A", props.data.minor_d_major), __jsx("span", {
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u7533\u8ACB\u8B49\u66F8\uFF1A", "".concat(props.isEnglish ? '英文' : '中文', "\u8B49\u66F8 / ").concat(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? '初辦' : '補證')), __jsx("div", {
    className: "jsx-475231467" + " " + "buttonlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return props.changeCurrent(props.current === _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].READY ? _constant__WEBPACK_IMPORTED_MODULE_5__["IndexState"].INPUT : _constant__WEBPACK_IMPORTED_MODULE_5__["ReissueState"].INPUT);
    },
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "\u91CD\u65B0\u8F38\u5165"), __jsx("div", {
    style: {
      width: '10%'
    },
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("button", {
    onClick: handleClick,
    className: "jsx-475231467",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u78BA\u5B9A\u9001\u51FA"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "475231467",
    __self: this
  }, ".ready.jsx-475231467{min-width:800px;min-height:600px;border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}.buttonlist.jsx-475231467{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}h1.jsx-475231467{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}span.jsx-475231467{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}button.jsx-475231467{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}#load.jsx-475231467{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border:1px black solid;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlZXdlaS9EZXNrdG9wL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL3JlYWR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtCLEFBRzJCLEFBV0gsQUFRbUIsQUFNakIsQUFNQSxBQVFHLGVBYkYsQUFNRixDQS9CRyxFQXVDVCxRQUNDLEdBUkUsRUFORCxDQVBLLENBbEJJLEVBd0NhLEtBUmIsQ0FOSyxNQVBOLEtBbEJ5QixPQWdDRCxNQWJ4QixBQU9wQixTQWpCeUIsU0FXekIsU0FuQmUsTUFnQ2EsMEJBQzVCLGdCQU1lLDBCQXRDYyxPQVFGLHlDQStCTix5REF0Q0EsbUJBUUEsaUJBK0JJLG9EQTlCRixLQVJDLGdCQVNaLFVBQ1osZ0JBNkJ3QixvQ0F0Q1IsY0FDaEIsNEJBc0N5Qix1QkFDekIiLCJmaWxlIjoiL2hvbWUvbGVld2VpL0Rlc2t0b3AvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvcmVhZHkudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9sb2FkaW5nJztcbmltcG9ydCB7IElTdHVkZW50LCBJUmVzcCwgSW5kZXhTdGF0ZSwgUmVpc3N1ZVN0YXRlIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHsgaXNzdWVBcGksIHJlaXNzdWVBcGkgfSBmcm9tICcuLi91dGlscyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjdXJyZW50OiBJbmRleFN0YXRlIHwgUmVpc3N1ZVN0YXRlO1xuICBkYXRhOiBJU3R1ZGVudDtcbiAgaXNFbmdsaXNoOiBib29sZWFuO1xuICBjaGFuZ2VDdXJyZW50OiAodXBkYXRlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCBbaXNMb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb3BzLmN1cnJlbnQgPT09IEluZGV4U3RhdGUuUkVBRFkpIHtcbiAgICAgIGNvbnN0IGRhdGE6IElSZXNwID0gYXdhaXQgaXNzdWVBcGkoXG4gICAgICAgIHByb3BzLmRhdGEuc3R1ZGVudF9pZCxcbiAgICAgICAgcHJvcHMuaXNFbmdsaXNoLFxuICAgICAgKTtcbiAgICAgIGlmIChudWxsICE9PSBkYXRhICYmIGRhdGEuYXBwbGllZCkge1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KEluZGV4U3RhdGUuU1VDQ0VTUyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChudWxsICE9PSBkYXRhID8gZGF0YS5lcnJvcl9tc2cgOiAnQ2Fubm90IGdldCBkYXRhJyk7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoSW5kZXhTdGF0ZS5JTlBVVCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRhdGE6IElSZXNwID0gYXdhaXQgcmVpc3N1ZUFwaShcbiAgICAgICAgcHJvcHMuZGF0YS5zdHVkZW50X2lkLFxuICAgICAgICBwcm9wcy5pc0VuZ2xpc2gsXG4gICAgICApO1xuICAgICAgaWYgKG51bGwgIT09IGRhdGEgJiYgZGF0YS5hcHBsaWVkKSB7XG4gICAgICAgIHByb3BzLmNoYW5nZUN1cnJlbnQoUmVpc3N1ZVN0YXRlLlNVQ0NFU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQobnVsbCAhPT0gZGF0YSA/IGRhdGEuZXJyb3JfbXNnIDogJ0Nhbm5vdCBnZXQgZGF0YScpO1xuICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFJlaXNzdWVTdGF0ZS5JTlBVVCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkeVwiPlxuICAgICAge1xuICAgICAgICAoaXNMb2FkKSA/IChcbiAgICAgICAgICA8ZGl2IGlkPVwibG9hZFwiPlxuICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDE+6LOH5paZ56K66KqNPC9oMT5cbiAgICAgICAgICAgIDxzcGFuPuWtuOeUn+Wnk+WQje+8mntwcm9wcy5kYXRhLmNoaW5lc2VfbmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj7lh7rnlJ/ml6XmnJ/vvJp7cHJvcHMuZGF0YS5iaXJ0aF9kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICDnlaLmpa3ns7vmiYDvvJp7cHJvcHMuZGF0YS5ncmFkdWF0ZV91bml2ICsgcHJvcHMuZGF0YS5ncmFkdWF0ZV9kZXB0fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+5YW25LuW6LOH6KiK77yae3Byb3BzLmRhdGEubWlub3JfZF9tYWpvcn08L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAg55Sz6KuL6K2J5pu477yaXG4gICAgICAgICAgICAgIHtgJHtwcm9wcy5pc0VuZ2xpc2ggPyAn6Iux5paHJyA6ICfkuK3mlocnfeitieabuCAvICR7XG4gICAgICAgICAgICAgICAgcHJvcHMuY3VycmVudCA9PT0gSW5kZXhTdGF0ZS5SRUFEWSA/ICfliJ3ovqYnIDogJ+ijnOitiSdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbmxpc3RcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDdXJyZW50KFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50ID09PSBJbmRleFN0YXRlLlJFQURZXG4gICAgICAgICAgICAgICAgICAgICAgPyBJbmRleFN0YXRlLklOUFVUXG4gICAgICAgICAgICAgICAgICAgICAgOiBSZWlzc3VlU3RhdGUuSU5QVVQsXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg6YeN5paw6Ly45YWlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAlJyB9fSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT7norrlrprpgIHlh7o8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJlYWR5IHtcbiAgICAgICAgICBtaW4td2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCA2cHggcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbmxpc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcbiAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzcwNzA3MDtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMjhweCAwIDAgMDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMTlweCAwcHggMHB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDEyNSwgMjMwLCAwLjk3KTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggNDBweDtcbiAgICAgICAgfVxuICAgICAgICAjbG9hZCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufSkgYXMgUmVhY3QuRkM8SVByb3BzPjtcbiJdfQ== */\n/*@ sourceURL=/home/leewei/Desktop/digital-certificate-ncku/components/ready.tsx */"));
});

/***/ })

})
//# sourceMappingURL=index.js.7f0d528aa767f6477b6e.hot-update.js.map