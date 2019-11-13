webpackHotUpdate("static/development/pages/query.js",{

/***/ "./components/form/form.tsx":
/*!**********************************!*\
  !*** ./components/form/form.tsx ***!
  \**********************************/
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/tse/Code/NCKU/digital-certificate-ncku/components/form/form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var fakedata = {
  name: 'AAA',
  birth: 'BBB',
  major: 'CCC',
  other: 'DDD',
  apply: 'EEE'
};

var Form = function Form(props) {
  var alertMessage = '學生資料錯誤，請重新輸入';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      eng = _useState[0],
      setEng = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isAlert = _useState2[0],
      setIsAlert = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      inputText = _useState3[0],
      setInputText = _useState3[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname;

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var sourceID, d;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              if (!(pathname === '/query')) {
                _context.next = 17;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["cardToStudentID"])(inputText);

            case 5:
              sourceID = _context.sent;
              _context.next = 8;
              return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["queryApi"])(sourceID);

            case 8:
              d = _context.sent;

              if (d.error_msg) {
                setIsAlert(true);
              } else {
                props.onSuccess(d.applied);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              alert(_context.t0);

            case 15:
              _context.next = 18;
              break;

            case 17:
              // index / reissue page
              try {
                // trigger different api
                props.onSuccess(fakedata);
              } catch (err) {
                console.error(err);
              }

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(event) {
    event.preventDefault();
    setInputText(event.currentTarget.value);
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3522642959" + " " + "selector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setEng(!eng);
    },
    className: "jsx-3522642959" + " " + ((eng ? 'selected' : 'default') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\u4E2D\u6587"), __jsx("a", {
    onClick: function onClick() {
      return setEng(!eng);
    },
    className: "jsx-3522642959" + " " + ((!eng ? 'selected' : 'default') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u82F1\u6587")), __jsx("div", {
    className: "jsx-3522642959" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, isAlert ? alertMessage : '')), __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("input", {
    onChange: handleChange,
    type: "text",
    placeholder: "\u5B78\u751F\u8B49\u865F\u78BC",
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("div", {
    style: {
      height: '80px',
      width: '100%'
    },
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u78BA\u8A8D CONFIRM"), __jsx("div", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    style: !eng ? {
      backgroundColor: '#707070'
    } : {},
    className: "jsx-3522642959" + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("div", {
    style: eng ? {
      backgroundColor: '#707070'
    } : {},
    className: "jsx-3522642959" + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3522642959",
    __self: this
  }, "form.jsx-3522642959{width:100%;height:75%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px 0px 20px 0px;border-radius:0px 0px 20px 20px;}label.jsx-3522642959{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input.jsx-3522642959{border-top:0px;border-left:0px;border-right:0px;border-bottom:2px solid rgba(186,184,184,0.66);background-color:transparent;width:70%;font-size:25px;line-height:1.2;color:#707070;}input.jsx-3522642959::-webkit-input-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959::-moz-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959:-ms-input-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959::placeholder{font-size:25px;color:rgba(186,184,184,0.66);}button.jsx-3522642959{width:70%;font-size:23px;border-radius:31px;background-color:#4781e6;line-height:1.22;-webkit-letter-spacing:0.05px;-moz-letter-spacing:0.05px;-ms-letter-spacing:0.05px;letter-spacing:0.05px;text-align:center;color:rgba(247,247,247,0.92);padding:8px 0px 8px 0px;border:0px;}.circle.jsx-3522642959{width:15px;height:15px;border-radius:50%;border:1px solid #707070;display:inline-block;margin:20px 12px 20px 12px;}.alert.jsx-3522642959{color:rgba(236,35,35,0.92);font-family:EdwardianScriptITC;font-size:25px;height:36px;}.selector.jsx-3522642959{font-size:33px;-webkit-text-stroke:1px #676464;font-family:SegoeUI;color:#676464;text-align:center;margin-top:25px;}.selector.jsx-3522642959>a.jsx-3522642959{margin:0px 15px 0px 15px;}.selected.jsx-3522642959{opacity:0.35;}.default.jsx-3522642959{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9OQ0tVL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL2Zvcm0vZm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZrQixBQUdzQixBQVVBLEFBT0ksQUFXQSxBQUlMLEFBWUMsQUFRbUIsQUFNZixBQVFVLEFBR1osQUFHSCxVQXZDSyxBQXdDakIsQ0F4RWEsQUFVRSxBQWtDRCxFQXlCZCxFQXBEa0IsQUFXZ0IsQUE4QkEsT0F6RG5CLENBNENLLEVBWkMsQUFpQ3JCLEVBZGlDLElBbENkLFVBNEJRLEdBakIzQixBQUsyQixHQXlCTCxDQXhDOEIsVUFrQ25DLFFBTk0sQ0FhUCxFQXpCRyxJQW1CTCxRQU9NLElBbERLLEFBNEN6QixDQW5Cd0IsQ0FZSyxRQTVCRSxDQWxCQyxHQTREZCxlQWJsQixDQWNBLFNBMUNZLFVBQ0ssZUFDQyxnQkFDRixjQUNoQixLQWJxQixPQXlCRCxrQkFDYyxFQW5DYiwyQkFvQ0ssd0JBQ2IsV0FDYixJQTVCd0IsMkJBVEEsbURBVXhCLDJCQVQ0QiwwQkFDTSxnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL05DS1UvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvZm9ybS9mb3JtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZGV4U3RhdGUsIFF1ZXJ5U3RhdGUsIElTdHVkZW50LCBSZWlzc3VlU3RhdGUgfSBmcm9tICcuLi8uLi9jb25zdGFudCc7XG5pbXBvcnQgeyBjYXJkVG9TdHVkZW50SUQsIHF1ZXJ5QXBpIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBmYWtlZGF0YTogSVN0dWRlbnQgPSB7XG4gIG5hbWU6ICdBQUEnLFxuICBiaXJ0aDogJ0JCQicsXG4gIG1ham9yOiAnQ0NDJyxcbiAgb3RoZXI6ICdEREQnLFxuICBhcHBseTogJ0VFRScsXG59O1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgb25TdWNjZXNzOiAodXNlcjogSVN0dWRlbnQgfCBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgYWxlcnRNZXNzYWdlID0gJ+WtuOeUn+izh+aWmemMr+iqpO+8jOiri+mHjeaWsOi8uOWFpSc7XG4gIGNvbnN0IFtlbmcsIHNldEVuZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0FsZXJ0LCBzZXRJc0FsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvcXVlcnknKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzb3VyY2VJRCA9IGF3YWl0IGNhcmRUb1N0dWRlbnRJRChpbnB1dFRleHQpO1xuICAgICAgICBjb25zdCBkID0gYXdhaXQgcXVlcnlBcGkoc291cmNlSUQpO1xuICAgICAgICBpZiAoZC5lcnJvcl9tc2cpIHtcbiAgICAgICAgICBzZXRJc0FsZXJ0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzLm9uU3VjY2VzcyhkLmFwcGxpZWQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgYWxlcnQoZXJyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5kZXggLyByZWlzc3VlIHBhZ2VcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdHJpZ2dlciBkaWZmZXJlbnQgYXBpXG4gICAgICAgIHByb3BzLm9uU3VjY2VzcyhmYWtlZGF0YSk7XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJbnB1dFRleHQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RvclwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2VuZyA/ICdzZWxlY3RlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFbmcoIWVuZyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Lit5paHXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9eyFlbmcgPyAnc2VsZWN0ZWQnIDogJ2RlZmF1bHQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RW5nKCFlbmcpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOiLseaWh1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj57aXNBbGVydCA/IGFsZXJ0TWVzc2FnZSA6ICcnfTwvZGl2PlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuWtuOeUn+itieiZn+eivFwiIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnODBweCcsIHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+56K66KqNIENPTkZJUk08L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgc3R5bGU9eyFlbmcgPyB7IGJhY2tncm91bmRDb2xvcjogJyM3MDcwNzAnIH0gOiB7fX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZVwiXG4gICAgICAgICAgICBzdHlsZT17ZW5nID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzA3MDcwJyB9IDoge319XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMHB4O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDE4NiwgMTg0LCAxODQsIDAuNjYpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMTg2LCAxODQsIDE4NCwgMC42Nik7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzgxZTY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC45Mik7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDEycHggMjBweCAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hbGVydCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjM2LCAzNSwgMzUsIDAuOTIpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBFZHdhcmRpYW5TY3JpcHRJVEM7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0b3Ige1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzY3NjQ2NDtcbiAgICAgICAgICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgICAgICAgICBjb2xvcjogIzY3NjQ2NDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0b3IgPiBhIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAxNXB4IDBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC4zNTtcbiAgICAgICAgfVxuICAgICAgICAuZGVmYXVsdCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/tse/Code/NCKU/digital-certificate-ncku/components/form/form.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=query.js.50a49c1ccafda01618bc.hot-update.js.map