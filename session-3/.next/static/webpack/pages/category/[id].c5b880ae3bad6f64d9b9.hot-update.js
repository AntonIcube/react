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
    return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }
    }, "Loading...");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvLmpzIl0sIm5hbWVzIjpbIkNBVEVHT1JZX0xJU1QiLCJncWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJwYWdldGl0bGUiLCJtYXJnaW5Ub3AiLCJjYXRlZ29yeWRlc2MiLCJmb250U2l6ZSIsImNhdGVnb3J5dGl0bGUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidGV4dEFsaWduIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJncmlkR2FwIiwic3BhY2luZyIsInBhcGVyIiwicGFkZGluZyIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJ3aGl0ZVNwYWNlIiwicHJvZHVjdGltYWdlIiwid2lkdGgiLCJwcm9kdWN0VGl0bGUiLCJwcmljZSIsImZvbnRXZWlnaHQiLCJDYXRlZ29yeUlkIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJyZXNwb25zZSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImNhdGVnb3J5IiwiY2F0ZWdvcnlMaXN0IiwicHJvZHVjdHMiLCJpdGVtcyIsIm5hbWUiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiIsIm1hcCIsInZhbCIsImtleSIsImltYWdlIiwidXJsIiwicHJpY2VfcmFuZ2UiLCJtaW5pbXVtX3ByaWNlIiwiZmluYWxfcHJpY2UiLCJjdXJyZW5jeSIsInZhbHVlIiwidG9GaXhlZCIsInVybF9rZXkiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywwREFBSCxtQkFBbkI7QUFrQ0EsSUFBTUMsU0FBUyxHQUFHQywy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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGVBQVg7QUFBMkIsUUFBRSxxQkFBY1QsR0FBRyxDQUFDVSxPQUFsQixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBZEYsQ0FERixDQURGO0FBMEJELEdBM0JBLENBREgsTUFERixDQVZGLENBREY7QUE4Q0Q7O0dBaEVROUIsVTtVQUNTNUIsUyxFQUNEK0IscUQsRUFFRUksdUQ7OztLQUpWUCxVO0FBa0VNK0IsNkhBQVUsQ0FBQztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFELENBQVYsQ0FBMEJoQyxVQUExQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tpZF0uYzViODgwYWUzYmFkNmY2NGQ5YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vbGliL2Fwb2xsb1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEdyaWQsIEJ1dHRvbiwgUGFwZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IENBVEVHT1JZX0xJU1QgPSBncWxgXHJcbiAgcXVlcnkgQ2F0ZWdvcnkoJGlkOiBTdHJpbmchKSB7XHJcbiAgICBjYXRlZ29yeUxpc3QoZmlsdGVyczogeyB1cmxfa2V5OiB7IGVxOiAkaWQgfSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcHJvZHVjdHMge1xyXG4gICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICB1cmxfa2V5XHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcHJpY2VfcmFuZ2Uge1xyXG4gICAgICAgICAgICBtYXhpbXVtX3ByaWNlIHtcclxuICAgICAgICAgICAgICBmaW5hbF9wcmljZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWluaW11bV9wcmljZSB7XHJcbiAgICAgICAgICAgICAgZmluYWxfcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFnZXRpdGxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IDIwLFxyXG4gIH0sXHJcbiAgY2F0ZWdvcnlkZXNjOiB7XHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxuICBjYXRlZ29yeXRpdGxlOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IDQwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogNTAsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogXCJyZXBlYXQoMTIsIDFmcilcIixcclxuICAgIGdyaWRHYXA6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcclxuICB9LFxyXG4gIHByb2R1Y3RpbWFnZToge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnlJZCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB1c2VRdWVyeShDQVRFR09SWV9MSVNULCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IGlkIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHJlc3BvbnNlO1xyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPExheW91dD5Mb2FkaW5nLi4uPC9MYXlvdXQ+O1xyXG4gIH1cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8TGF5b3V0PkVycm9yLi4uPC9MYXlvdXQ+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3J5TGlzdDtcclxuICBjb25zdCBwcm9kdWN0cyA9IGRhdGEuY2F0ZWdvcnlMaXN0WzBdLnByb2R1Y3RzLml0ZW1zO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeXRpdGxlfT5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICB7Y2F0ZWdvcnlbMF0ubmFtZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeWRlc2N9XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNhdGVnb3J5WzBdLmRlc2NyaXB0aW9uIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgodmFsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8R3JpZCBrZXk9e2tleX0gaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt2YWwuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dmFsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0VGl0bGV9Pnt2YWwubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsLnByaWNlX3JhbmdlLm1pbmltdW1fcHJpY2UuZmluYWxfcHJpY2UuY3VycmVuY3lcclxuICAgICAgICAgICAgICAgICAgICB9ICR7dmFsLnByaWNlX3JhbmdlLm1pbmltdW1fcHJpY2UuZmluYWxfcHJpY2UudmFsdWUudG9GaXhlZChcclxuICAgICAgICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1tpZF1cIiBhcz17YC9wcm9kdWN0LyR7dmFsLnVybF9rZXl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICA7XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSkoQ2F0ZWdvcnlJZCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=