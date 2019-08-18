webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");

var _jsxFileName = "C:\\Users\\USER\\projectA1Platform\\components\\PostCard.js";






var PostCard = function PostCard(_ref) {
  var post = _ref.post;

  var _leadingZeros = function _leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
      for (var i = 0; i < digits - n.length; i++) {
        zero += '0';
      }
    }

    return zero + n;
  };

  var _getTimeStamp = function _getTimeStamp() {
    var d = new Date();

    var s = _leadingZeros(d.getFullYear(), 4) + '-' + _leadingZeros(d.getMonth() + 1, 2) + '-' + _leadingZeros(d.getDate(), 2) + ' ' + _leadingZeros(d.getHours(), 2) + ':' + _leadingZeros(d.getMinutes(), 2) + ':' + _leadingZeros(d.getSeconds(), 2);

    return s;
  }; //console.dir(post)


  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var fixBtn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fix = _useState2[0],
      setFix = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(post.text),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      fixText = _useState4[0],
      setFixText = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(post.title),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      fixTitle = _useState6[0],
      setFixTitle = _useState6[1];

  var onFix = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    if (me === post.me) {
      setFix(function (pre) {
        return !pre;
      });

      if (!fix) {
        var id = post.me + post.date;
        var index = mainPosts.findIndex(function (r) {
          return r.id === id;
        });
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["FIX_POST"],
          data: {
            index: index,
            fixText: fixText,
            fixTitle: fixTitle,
            date: _getTimeStamp()
          }
        });
      }
    }
  }, [me, fix, fixText, fixTitle]);
  var onChangeFixTitle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setFixTitle(e.target.value);
  }, []);
  var onChangeFixText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setFixText(e.target.value);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      margin: "15px",
      padding: 35
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, fix ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: "70%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, post.title) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      style: {
        width: "70%"
      },
      value: fixTitle,
      onChange: onChangeFixTitle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, post.date)),
    key: post.date,
    extra: me == post.me ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      ref: fixBtn,
      onClick: onFix,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "\uC218\uC815") : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, post.me[0]),
    description: fix ? post.text : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
      value: fixText,
      onChange: onChangeFixText,
      rows: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
};

PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    me: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.0d7ca8d4807b996376a3.hot-update.js.map