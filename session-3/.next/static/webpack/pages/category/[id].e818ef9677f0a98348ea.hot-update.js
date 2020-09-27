webpackHotUpdate_N_E("pages/category/[id]",{

/***/ "./pages/category/[id].js":
/*!********************************!*\
  !*** ./pages/category/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/apollo */ "./lib/apollo/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "D:\\belajarReactjs\\react\\session-3\\pages\\category\\[id].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query Category($id: String!) {\n    categoryList(filters: { url_key: { eq: $id } }) {\n      id\n      name\n      description\n      products {\n        items {\n          id\n          name\n          url_key\n          image {\n            url\n          }\n          price_range {\n            maximum_price {\n              final_price {\n                value\n                currency\n              }\n            }\n            minimum_price {\n              final_price {\n                value\n                currency\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var CATEGORY_LIST = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    pagetitle: {
      marginTop: 20
    },
    categorydesc: {
      fontSize: 14
    },
    categorytitle: {
      marginBottom: 40,
      paddingBottom: 50,
      textAlign: "center"
    },
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3)
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(5)
    },
    productimage: {
      width: "100%"
    },
    productTitle: {
      fontSize: "18px",
      color: "#000"
    },
    price: {
      fontWeight: "bold",
      fontSize: "16px",
      color: "#000"
    }
  };
});

function CategoryId() {
  _s();

  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var response = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(CATEGORY_LIST, {
    variables: {
      id: id
    }
  });
  var loading = response.loading,
      error = response.error,
      data = response.data;

  if (loading) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }
    });
  }

  if (error) {
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 12
      }
    }, "Error...");
  }

  var category = data.categoryList;
  var products = data.categoryList[0].products.items;
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.categorytitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, category[0].name), __jsx("div", {
    className: classes.categorydesc,
    dangerouslySetInnerHTML: {
      __html: category[0].description
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, products.map(function (val, key) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      key: key,
      item: true,
      xs: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Paper"], {
      className: classes.paper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: classes.productimage,
      src: val.image.url,
      alt: val.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }), __jsx("p", {
      className: classes.productTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, val.name), __jsx("p", {
      className: classes.price,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, "".concat(val.price_range.minimum_price.final_price.currency, " ").concat(val.price_range.minimum_price.final_price.value.toFixed(2))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/product/[id]",
      as: "/product/".concat(val.url_key),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 23
      }
    }, "Detail")))));
  }), ";")));
}

_s(CategoryId, "QqYYVUGqhk7nISbI4Kf+q6F3Ero=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = CategoryId;
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_5__["withApollo"])({
  ssr: true
})(CategoryId));

var _c;

$RefreshReg$(_c, "CategoryId");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvLmpzIl0sIm5hbWVzIjpbIkNBVEVHT1JZX0xJU1QiLCJncWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYWdldGl0bGUiLCJtYXJnaW5Ub3AiLCJjYXRlZ29yeWRlc2MiLCJmb250U2l6ZSIsImNhdGVnb3J5dGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidGV4dEFsaWduIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwic3BhY2luZyIsInBhcGVyIiwicGFkZGluZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJ3aGl0ZVNwYWNlIiwicHJvZHVjdGltYWdlIiwid2lkdGgiLCJwcm9kdWN0VGl0bGUiLCJwcmljZSIsImZvbnRXZWlnaHQiLCJDYXRlZ29yeUlkIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJyZXNwb25zZSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNhdGVnb3J5IiwiY2F0ZWdvcnlMaXN0IiwicHJvZHVjdHMiLCJpdGVtcyIsIm5hbWUiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInZhbCIsImtleSIsImltYWdlIiwidXJsIiwicHJpY2VfcmFuZ2UiLCJtaW5pbXVtX3ByaWNlIiwiZmluYWxfcHJpY2UiLCJjdXJyZW5jeSIsInZhbHVlIiwidG9GaXhlZCIsInVybF9rZXkiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwREFBSCxtQkFBbkI7QUFrQ0EsSUFBTUMsU0FBUyxHQUFHQywy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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsZUFBWDtBQUEyQixRQUFFLHFCQUFjVCxHQUFHLENBQUNVLE9BQWxCLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsQ0FkRixDQURGLENBREY7QUEwQkQsR0EzQkEsQ0FESCxNQURGLENBVkYsQ0FERjtBQThDRDs7R0FoRVE5QixVO1VBQ1M1QixTLEVBQ0QrQixxRCxFQUVFSSx1RDs7O0tBSlZQLFU7QUFrRU0rQiw2SEFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQmhDLFVBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW2lkXS5lODE4ZWY5Njc3ZjBhOTgzNDhlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCIuLi8uLi9saWIvYXBvbGxvXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCwgQnV0dG9uLCBQYXBlciwgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgQ0FURUdPUllfTElTVCA9IGdxbGBcclxuICBxdWVyeSBDYXRlZ29yeSgkaWQ6IFN0cmluZyEpIHtcclxuICAgIGNhdGVnb3J5TGlzdChmaWx0ZXJzOiB7IHVybF9rZXk6IHsgZXE6ICRpZCB9IH0pIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwcm9kdWN0cyB7XHJcbiAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHVybF9rZXlcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwcmljZV9yYW5nZSB7XHJcbiAgICAgICAgICAgIG1heGltdW1fcHJpY2Uge1xyXG4gICAgICAgICAgICAgIGZpbmFsX3ByaWNlIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaW5pbXVtX3ByaWNlIHtcclxuICAgICAgICAgICAgICBmaW5hbF9wcmljZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYWdldGl0bGU6IHtcclxuICAgIG1hcmdpblRvcDogMjAsXHJcbiAgfSxcclxuICBjYXRlZ29yeWRlc2M6IHtcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG4gIGNhdGVnb3J5dGl0bGU6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogNDAsXHJcbiAgICBwYWRkaW5nQm90dG9tOiA1MCxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcInJlcGVhdCgxMiwgMWZyKVwiLFxyXG4gICAgZ3JpZEdhcDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGltYWdlOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgfSxcclxuICBwcm9kdWN0VGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiBcIjE4cHhcIixcclxuICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIGZvbnRTaXplOiBcIjE2cHhcIixcclxuICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeUlkKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcclxuICBjb25zdCByZXNwb25zZSA9IHVzZVF1ZXJ5KENBVEVHT1JZX0xJU1QsIHtcclxuICAgIHZhcmlhYmxlczogeyBpZDogaWQgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gcmVzcG9uc2U7XHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcclxuICB9XHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPExheW91dD5FcnJvci4uLjwvTGF5b3V0PjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeUxpc3Q7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLmNhdGVnb3J5TGlzdFswXS5wcm9kdWN0cy5pdGVtcztcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnl0aXRsZX0+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAge2NhdGVnb3J5WzBdLm5hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2F0ZWdvcnlkZXNjfVxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjYXRlZ29yeVswXS5kZXNjcmlwdGlvbiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHZhbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQga2V5PXtrZXl9IGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdGltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dmFsLmltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3ZhbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdFRpdGxlfT57dmFsLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgJHtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbC5wcmljZV9yYW5nZS5taW5pbXVtX3ByaWNlLmZpbmFsX3ByaWNlLmN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICAgICAgfSAke3ZhbC5wcmljZV9yYW5nZS5taW5pbXVtX3ByaWNlLmZpbmFsX3ByaWNlLnZhbHVlLnRvRml4ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9baWRdXCIgYXM9e2AvcHJvZHVjdC8ke3ZhbC51cmxfa2V5fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgO1xyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKENhdGVnb3J5SWQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9