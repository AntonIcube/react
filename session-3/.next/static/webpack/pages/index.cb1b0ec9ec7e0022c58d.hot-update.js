webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _this = undefined,
    _jsxFileName = "D:\\belajarReactjs\\react\\session-3\\components\\layout\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var layout = function layout(props) {
  _s();

  var styles = useStyles();
  var children = props.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: styles.navSytle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: styles.liStytle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/logo.jpg",
    alt: "icon",
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  })))), __jsx("li", {
    className: styles.cartRight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Cart")))), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, children));
};

_s(layout, "zVPK1Fl4Bwv5QMpdtl/TqRJ7TWE=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

var footer = function footer() {
  return __jsx("div", {
    className: "footer-v2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  btnTest: {
    color: "green",
    background: "salmon"
  },
  navSytle: {
    background: "#0e0423f2",
    display: "inline-block",
    listStyleType: "none",
    width: "100%",
    color: "whitesmoke",
    paddingRight: 25,
    paddingLeft: 25
  },
  liStytle: {
    display: "inline-block"
  },
  cartRight: {
    "float": "right",
    height: "100%",
    display: "inline-block"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (layout);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsibGF5b3V0IiwicHJvcHMiLCJzdHlsZXMiLCJ1c2VTdHlsZXMiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hdlN5dGxlIiwibGlTdHl0bGUiLCJjYXJ0UmlnaHQiLCJmb290ZXIiLCJtYWtlU3R5bGVzIiwiYnRuVGVzdCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJsaXN0U3R5bGVUeXBlIiwid2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN4QixNQUFNQyxNQUFNLEdBQUdDLFNBQVMsRUFBeEI7QUFEd0IsTUFFaEJDLFFBRmdCLEdBRUhILEtBRkcsQ0FFaEJHLFFBRmdCO0FBR3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUosTUFBTSxDQUFDSyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVMLE1BQU0sQ0FBQ00sUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLE1BQXpCO0FBQWdDLGFBQVMsRUFBQyxNQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBREYsRUFRRTtBQUFJLGFBQVMsRUFBRU4sTUFBTSxDQUFDTyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsQ0FERixDQVJGLENBREYsRUFlRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJMLFFBQTVCLENBZkYsQ0FERjtBQW1CRCxDQXpCRDs7R0FBTUosTTtVQUNXRyxTLEVBRUFHLHFEOzs7QUF5QmpCLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQU9ELENBUkQ7O0FBVUEsSUFBTVAsU0FBUyxHQUFHUSwyRUFBVSxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLE9BREE7QUFFUEMsY0FBVSxFQUFFO0FBRkwsR0FEa0I7QUFLM0JQLFVBQVEsRUFBRTtBQUNSTyxjQUFVLEVBQUUsV0FESjtBQUVSQyxXQUFPLEVBQUUsY0FGRDtBQUdSQyxpQkFBYSxFQUFFLE1BSFA7QUFJUkMsU0FBSyxFQUFFLE1BSkM7QUFLUkosU0FBSyxFQUFFLFlBTEM7QUFNUkssZ0JBQVksRUFBRSxFQU5OO0FBT1JDLGVBQVcsRUFBRTtBQVBMLEdBTGlCO0FBYzNCWCxVQUFRLEVBQUU7QUFDUk8sV0FBTyxFQUFFO0FBREQsR0FkaUI7QUFpQjNCTixXQUFTLEVBQUU7QUFDVCxhQUFPLE9BREU7QUFFVFcsVUFBTSxFQUFFLE1BRkM7QUFHVEwsV0FBTyxFQUFFO0FBSEE7QUFqQmdCLENBQUQsQ0FBNUI7QUF1QmVmLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiMWIwZWM5ZWM3ZTAwMjJjNThkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgbGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZTeXRsZX0+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpU3R5dGxlfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPiBcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLmpwZ1wiIGFsdD1cImljb25cIiBjbGFzc05hbWU9XCJpY29uXCIvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuY2FydFJpZ2h0fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICA8YT5DYXJ0PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci12MlwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgYnRuVGVzdDoge1xyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGJhY2tncm91bmQ6IFwic2FsbW9uXCIsXHJcbiAgfSxcclxuICBuYXZTeXRsZToge1xyXG4gICAgYmFja2dyb3VuZDogXCIjMGUwNDIzZjJcIixcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGNvbG9yOiBcIndoaXRlc21va2VcIixcclxuICAgIHBhZGRpbmdSaWdodDogMjUsXHJcbiAgICBwYWRkaW5nTGVmdDogMjUsXHJcbiAgfSxcclxuICBsaVN0eXRsZToge1xyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG4gIGNhcnRSaWdodDoge1xyXG4gICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==