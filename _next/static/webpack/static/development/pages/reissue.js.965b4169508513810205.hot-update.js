webpackHotUpdate("static/development/pages/reissue.js",{

/***/ "./utils/main.ts":
/*!***********************!*\
  !*** ./utils/main.ts ***!
  \***********************/
/*! exports provided: queryApi, issueApi, reissueApi, gradinfoApi, renameApi, cardToStudentID, getRelativePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryApi", function() { return queryApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "issueApi", function() { return issueApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reissueApi", function() { return reissueApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradinfoApi", function() { return gradinfoApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameApi", function() { return renameApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToStudentID", function() { return cardToStudentID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativePath", function() { return getRelativePath; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./utils/config.ts");
/* harmony import */ var _runtimeEnv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../runtimeEnv */ "./runtimeEnv.ts");





/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/query
 * @function queryApi()
 * @param {string} studentID
 * @param {boolean} isEng
 * @returns {Promise<IResp>}
 */
var queryApi =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(studentID, isEng) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _config__WEBPACK_IMPORTED_MODULE_2__["mainInstance"].get('/students/query/', {
              params: {
                ID: studentID,
                type: isEng ? 'English' : 'Chinese'
              }
            }).then(function (resp) {
              return resp.data;
            })["catch"](function () {
              return null;
            });

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function queryApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/gradinfo/
 * @function gradinfoApi()
 * @param {string} studentID
 * @returns {Promise<IStudent>}
 */


var gradinfoApi =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(studentID) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _config__WEBPACK_IMPORTED_MODULE_2__["mainInstance"].get('/students/gradinfo/', {
              params: {
                ID: studentID
              }
            }).then(function (resp) {
              return resp.data;
            })["catch"](function () {
              return null;
            });

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data.student_id ? data : null);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function gradinfoApi(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/issue/
 * @function issueApi()
 * @param {string} studentID
 * @param {boolean} isEng
 * @returns {Promise<IResp>}
 */


var issueApi =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(studentID, isEng) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _config__WEBPACK_IMPORTED_MODULE_2__["mainInstance"].get('/students/issue/', {
              params: {
                ID: studentID,
                type: isEng ? 'English' : 'Chinese'
              }
            }).then(function (resp) {
              return resp.data;
            })["catch"](function () {
              return null;
            });

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function issueApi(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Get from MAIN_HOST/students/reissue/
 * @function reissueApi()
 * @param {string} studentID
 * @param {boolean} isEng
 * @returns {Promise<IResp>}
 */


var reissueApi =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(studentID, isEng) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _config__WEBPACK_IMPORTED_MODULE_2__["mainInstance"].get('/students/reissue/', {
              params: {
                ID: studentID,
                type: isEng ? 'English' : 'Chinese'
              }
            }).then(function (resp) {
              return resp.data;
            })["catch"](function () {
              return null;
            });

          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function reissueApi(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * @global
 *  @host MAIN_HOST
 *  @method POST
 * Get from MAIN_HOST/students/reissue/
 * @function renameApi()
 * @param {string} studentID
 * @param {string} name
 * @returns {Promise<IResp>}
 */


var renameApi =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(studentID, newName) {
    var data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _config__WEBPACK_IMPORTED_MODULE_2__["mainInstance"].get('/students/rename/', {
              params: {
                ID: studentID,
                name: newName
              }
            }).then(function (resp) {
              return resp.data;
            })["catch"](function () {
              return null;
            });

          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function renameApi(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * @global
 *  @host MAIN_HOST
 *  @method GET
 * Translate cardId into studentId from NCKU_HOST/ncku/queryno.php.
 * If it is not necessary, this function can be deleted
 * @function cardToStudentID()
 * @param {string} studentID
 */


var cardToStudentID =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(cardID) {
    var re, studentID;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            re = /[A-Z]{1}[0-9]{8}/i;
            studentID = cardID;

            if (cardID.match(re)) {
              _context6.next = 6;
              break;
            }

            _context6.next = 5;
            return _config__WEBPACK_IMPORTED_MODULE_2__["nckuInstance"].get('/ncku/queryno.php', {
              params: {
                octin: cardID
              }
            }).then(function (resp) {
              return resp.data;
            })["catch"]();

          case 5:
            studentID = _context6.sent;

          case 6:
            return _context6.abrupt("return", studentID);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function cardToStudentID(_x10) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * @function getRelativePath()
 * @param {string} path
 * resolve path for assets and links
 */


function getRelativePath(path) {
  if (_runtimeEnv__WEBPACK_IMPORTED_MODULE_3__["default"].GITHUB) {
    var valid = /[^\/].*/g.exec(path);
    return valid ? "/".concat(_runtimeEnv__WEBPACK_IMPORTED_MODULE_3__["default"].PROJ_NAME, "/").concat(valid[0]) : "/".concat(_runtimeEnv__WEBPACK_IMPORTED_MODULE_3__["default"].PROJ_NAME, "/");
  }

  return path;
}



/***/ })

})
//# sourceMappingURL=reissue.js.965b4169508513810205.hot-update.js.map