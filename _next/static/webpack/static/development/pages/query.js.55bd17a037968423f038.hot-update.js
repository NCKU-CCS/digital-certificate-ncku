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
      alert = _useState2[0],
      setAlert = _useState2[1];

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
      var sourceID, d, isReissue;
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
                setAlert(true);
              } else {
                props.onSuccess(d.applied);
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);

            case 15:
              _context.next = 19;
              break;

            case 17:
              isReissue = pathname === '/reissue';

              try {
                // trigger different api
                onSuccess(fakedata);
              } catch (err) {
                console.error(err);
              }

            case 19:
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
      lineNumber: 60
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3522642959" + " " + "selector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setEng(!eng);
    },
    className: "jsx-3522642959" + " " + ((eng ? 'selected' : 'default') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u4E2D\u6587"), __jsx("a", {
    onClick: function onClick() {
      return setEng(!eng);
    },
    className: "jsx-3522642959" + " " + ((!eng ? 'selected' : 'default') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u82F1\u6587")), __jsx("div", {
    className: "jsx-3522642959" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, alert ? alertMessage : '')), __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("input", {
    onChange: handleChange,
    type: "text",
    placeholder: "\u5B78\u751F\u8B49\u865F\u78BC",
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
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
      lineNumber: 81
    },
    __self: this
  })), __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u78BA\u8A8D CONFIRM"), __jsx("div", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    style: !eng ? {
      backgroundColor: '#707070'
    } : {},
    className: "jsx-3522642959" + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    style: eng ? {
      backgroundColor: '#707070'
    } : {},
    className: "jsx-3522642959" + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3522642959",
    __self: this
  }, "form.jsx-3522642959{width:100%;height:75%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px 0px 20px 0px;border-radius:0px 0px 20px 20px;}label.jsx-3522642959{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input.jsx-3522642959{border-top:0px;border-left:0px;border-right:0px;border-bottom:2px solid rgba(186,184,184,0.66);background-color:transparent;width:70%;font-size:25px;line-height:1.2;color:#707070;}input.jsx-3522642959::-webkit-input-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959::-moz-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959:-ms-input-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959::placeholder{font-size:25px;color:rgba(186,184,184,0.66);}button.jsx-3522642959{width:70%;font-size:23px;border-radius:31px;background-color:#4781e6;line-height:1.22;-webkit-letter-spacing:0.05px;-moz-letter-spacing:0.05px;-ms-letter-spacing:0.05px;letter-spacing:0.05px;text-align:center;color:rgba(247,247,247,0.92);padding:8px 0px 8px 0px;border:0px;}.circle.jsx-3522642959{width:15px;height:15px;border-radius:50%;border:1px solid #707070;display:inline-block;margin:20px 12px 20px 12px;}.alert.jsx-3522642959{color:rgba(236,35,35,0.92);font-family:EdwardianScriptITC;font-size:25px;height:36px;}.selector.jsx-3522642959{font-size:33px;-webkit-text-stroke:1px #676464;font-family:SegoeUI;color:#676464;text-align:center;margin-top:25px;}.selector.jsx-3522642959>a.jsx-3522642959{margin:0px 15px 0px 15px;}.selected.jsx-3522642959{opacity:0.35;}.default.jsx-3522642959{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90c2UvQ29kZS9OQ0tVL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL2Zvcm0vZm9ybS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdrQixBQUdzQixBQVVBLEFBT0ksQUFXQSxBQUlMLEFBWUMsQUFRbUIsQUFNZixBQVFVLEFBR1osQUFHSCxVQXZDSyxBQXdDakIsQ0F4RWEsQUFVRSxBQWtDRCxFQXlCZCxFQXBEa0IsQUFXZ0IsQUE4QkEsT0F6RG5CLENBNENLLEVBWkMsQUFpQ3JCLEVBZGlDLElBbENkLFVBNEJRLEdBakIzQixBQUsyQixHQXlCTCxDQXhDOEIsVUFrQ25DLFFBTk0sQ0FhUCxFQXpCRyxJQW1CTCxRQU9NLElBbERLLEFBNEN6QixDQW5Cd0IsQ0FZSyxRQTVCRSxDQWxCQyxHQTREZCxlQWJsQixDQWNBLFNBMUNZLFVBQ0ssZUFDQyxnQkFDRixjQUNoQixLQWJxQixPQXlCRCxrQkFDYyxFQW5DYiwyQkFvQ0ssd0JBQ2IsV0FDYixJQTVCd0IsMkJBVEEsbURBVXhCLDJCQVQ0QiwwQkFDTSxnQ0FDbEMiLCJmaWxlIjoiL1VzZXJzL3RzZS9Db2RlL05DS1UvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvZm9ybS9mb3JtLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZGV4U3RhdGUsIFF1ZXJ5U3RhdGUsIElTdHVkZW50LCBSZWlzc3VlU3RhdGUgfSBmcm9tICcuLi8uLi9jb25zdGFudCc7XG5pbXBvcnQgeyBjYXJkVG9TdHVkZW50SUQsIHF1ZXJ5QXBpIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBmYWtlZGF0YTogSVN0dWRlbnQgPSB7XG4gIG5hbWU6ICdBQUEnLFxuICBiaXJ0aDogJ0JCQicsXG4gIG1ham9yOiAnQ0NDJyxcbiAgb3RoZXI6ICdEREQnLFxuICBhcHBseTogJ0VFRScsXG59O1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZGlzcGF0Y2g6IFJlYWN0LkRpc3BhdGNoPFxuICAgIFJlYWN0LlNldFN0YXRlQWN0aW9uPEluZGV4U3RhdGUgfCBRdWVyeVN0YXRlIHwgUmVpc3N1ZVN0YXRlPlxuICA+O1xuICBvblN1Y2Nlc3M6ICh1c2VyOiBJU3R1ZGVudCB8IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IEZvcm06IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCBhbGVydE1lc3NhZ2UgPSAn5a2455Sf6LOH5paZ6Yyv6Kqk77yM6KuL6YeN5paw6Ly45YWlJztcbiAgY29uc3QgW2VuZywgc2V0RW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHBhdGhuYW1lID09PSAnL3F1ZXJ5Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc291cmNlSUQgPSBhd2FpdCBjYXJkVG9TdHVkZW50SUQoaW5wdXRUZXh0KTtcbiAgICAgICAgY29uc3QgZCA9IGF3YWl0IHF1ZXJ5QXBpKHNvdXJjZUlEKTtcbiAgICAgICAgaWYgKGQuZXJyb3JfbXNnKSB7XG4gICAgICAgICAgc2V0QWxlcnQodHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHMub25TdWNjZXNzKGQuYXBwbGllZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzUmVpc3N1ZSA9IHBhdGhuYW1lID09PSAnL3JlaXNzdWUnO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdHJpZ2dlciBkaWZmZXJlbnQgYXBpXG4gICAgICAgIG9uU3VjY2VzcyhmYWtlZGF0YSk7XG4gICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJbnB1dFRleHQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RvclwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2VuZyA/ICdzZWxlY3RlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFbmcoIWVuZyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg5Lit5paHXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9eyFlbmcgPyAnc2VsZWN0ZWQnIDogJ2RlZmF1bHQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RW5nKCFlbmcpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOiLseaWh1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj57YWxlcnQgPyBhbGVydE1lc3NhZ2UgOiAnJ308L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLlrbjnlJ/orYnomZ/norxcIiAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzgwcHgnLCB3aWR0aDogJzEwMCUnIH19IC8+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPueiuuiqjSBDT05GSVJNPC9idXR0b24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlXCJcbiAgICAgICAgICAgIHN0eWxlPXshZW5nID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzA3MDcwJyB9IDoge319XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgc3R5bGU9e2VuZyA/IHsgYmFja2dyb3VuZENvbG9yOiAnIzcwNzA3MCcgfSA6IHt9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgxODYsIDE4NCwgMTg0LCAwLjY2KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4NiwgMTg0LCAxODQsIDAuNjYpO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc4MWU2O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuOTIpO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAxMnB4IDIwcHggMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuYWxlcnQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDIzNiwgMzUsIDM1LCAwLjkyKTtcbiAgICAgICAgICBmb250LWZhbWlseTogRWR3YXJkaWFuU2NyaXB0SVRDO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdG9yIHtcbiAgICAgICAgICBmb250LXNpemU6IDMzcHg7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICM2NzY0NjQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFNlZ29lVUk7XG4gICAgICAgICAgY29sb3I6ICM2NzY0NjQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdG9yID4gYSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMTVweCAwcHggMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0ZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuMzU7XG4gICAgICAgIH1cbiAgICAgICAgLmRlZmF1bHQge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl19 */\n/*@ sourceURL=/Users/tse/Code/NCKU/digital-certificate-ncku/components/form/form.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=query.js.55bd17a037968423f038.hot-update.js.map