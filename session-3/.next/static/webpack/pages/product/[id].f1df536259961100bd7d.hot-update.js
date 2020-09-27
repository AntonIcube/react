webpackHotUpdate_N_E("pages/product/[id]",{

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
}; // const footer = () => {
//   return (
//     <div className="footer-v2">
//       <div>
//       </div>
//     </div>
//   )
// }


_s(layout, "zVPK1Fl4Bwv5QMpdtl/TqRJ7TWE=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  btnTest: {
    color: "green",
    background: "salmon"
  },
  navSytle: {
    background: "#FA4B4B",
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
    fontSize: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsibGF5b3V0IiwicHJvcHMiLCJzdHlsZXMiLCJ1c2VTdHlsZXMiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hdlN5dGxlIiwibGlTdHl0bGUiLCJjYXJ0UmlnaHQiLCJtYWtlU3R5bGVzIiwiYnRuVGVzdCIsImNvbG9yIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJsaXN0U3R5bGVUeXBlIiwid2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsU0FBUyxFQUF4QjtBQUR3QixNQUVoQkMsUUFGZ0IsR0FFSEgsS0FGRyxDQUVoQkcsUUFGZ0I7QUFHeEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFSixNQUFNLENBQUNLLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUwsTUFBTSxDQUFDTSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsV0FBVDtBQUFxQixPQUFHLEVBQUMsTUFBekI7QUFBZ0MsYUFBUyxFQUFDLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixFQVFFO0FBQUksYUFBUyxFQUFFTixNQUFNLENBQUNPLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLENBUkYsQ0FERixFQWVFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkwsUUFBNUIsQ0FmRixDQURGO0FBbUJELENBekJELEMsQ0E0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0dBcENNSixNO1VBQ1dHLFMsRUFFQUcscUQ7OztBQW1DakIsSUFBTUgsU0FBUyxHQUFHTywyRUFBVSxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLE9BREE7QUFFUEMsY0FBVSxFQUFFO0FBRkwsR0FEa0I7QUFLM0JOLFVBQVEsRUFBRTtBQUNSTSxjQUFVLEVBQUUsU0FESjtBQUVSQyxXQUFPLEVBQUUsY0FGRDtBQUdSQyxpQkFBYSxFQUFFLE1BSFA7QUFJUkMsU0FBSyxFQUFFLE1BSkM7QUFLUkosU0FBSyxFQUFFLFlBTEM7QUFNUkssZ0JBQVksRUFBRSxFQU5OO0FBT1JDLGVBQVcsRUFBRTtBQVBMLEdBTGlCO0FBYzNCVixVQUFRLEVBQUU7QUFDUk0sV0FBTyxFQUFFO0FBREQsR0FkaUI7QUFpQjNCTCxXQUFTLEVBQUU7QUFDVCxhQUFPLE9BREU7QUFFVFUsWUFBUSxFQUFFLEVBRkQ7QUFHVEwsV0FBTyxFQUFFO0FBSEE7QUFqQmdCLENBQUQsQ0FBNUI7QUF1QmVkLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS5mMWRmNTM2MjU5OTYxMTAwYmQ3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IGxheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2U3l0bGV9PlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saVN0eXRsZX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT4gXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5qcGdcIiBhbHQ9XCJpY29uXCIgY2xhc3NOYW1lPVwiaWNvblwiLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcnRSaWdodH0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPGE+Q2FydDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbi8vIGNvbnN0IGZvb3RlciA9ICgpID0+IHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdjJcIj5cclxuLy8gICAgICAgPGRpdj5cclxuICAgICAgICBcclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGJ0blRlc3Q6IHtcclxuICAgIGNvbG9yOiBcImdyZWVuXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiBcInNhbG1vblwiLFxyXG4gIH0sXHJcbiAgbmF2U3l0bGU6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI0ZBNEI0QlwiLFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgIGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgY29sb3I6IFwid2hpdGVzbW9rZVwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAyNSxcclxuICAgIHBhZGRpbmdMZWZ0OiAyNSxcclxuICB9LFxyXG4gIGxpU3R5dGxlOiB7XHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gIH0sXHJcbiAgY2FydFJpZ2h0OiB7XHJcbiAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgZm9udFNpemU6IDUwLFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgbGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=