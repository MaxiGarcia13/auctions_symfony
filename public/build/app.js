(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/actions/loggedUser.js":
/*!**************************************!*\
  !*** ./assets/actions/loggedUser.js ***!
  \**************************************/
/*! exports provided: SET_LOGGED_USER, setLoggedUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGGED_USER", function() { return SET_LOGGED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoggedUser", function() { return setLoggedUser; });
var SET_LOGGED_USER = 'GET_LOGGED_USER';
/**
 * @param {Object} loggedUser
 */

var setLoggedUser = function setLoggedUser(loggedUser) {
  return {
    type: SET_LOGGED_USER,
    payload: {
      loggedUser: loggedUser
    }
  };
};

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./assets/components/Header/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./assets/store.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_6__);







var store = Object(_store__WEBPACK_IMPORTED_MODULE_5__["default"])();
var element = document.getElementById('react-component-root');

var AppComonent = function AppComonent() {
  var loggedUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return element.dataset['loggedUser'];
  });
  var signInPath = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return element.dataset['pathLogOut'];
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loggedUser: loggedUser,
    signInPath: signInPath
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/myAuctions"
  }, "My Auctions..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/createAuctions"
  }, "Create Auctions..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: "/"
  }, "Auctions..."))));
};

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppComonent, null), element);

/***/ }),

/***/ "./assets/components/Header/Header.component.jsx":
/*!*******************************************************!*\
  !*** ./assets/components/Header/Header.component.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoggedUser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoggedUser.component */ "./assets/components/Header/LoggedUser.component.jsx");
/* harmony import */ var _Menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.component */ "./assets/components/Header/Menu.component.jsx");




var HeaderComponent = function HeaderComponent(_ref) {
  var loggedUser = _ref.loggedUser,
      signInPath = _ref.signInPath;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\uD83D\uDCB8 Auctions!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoggedUser_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    email: loggedUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    signInPath: signInPath
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(HeaderComponent));

/***/ }),

/***/ "./assets/components/Header/LoggedUser.component.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/Header/LoggedUser.component.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useGetApi */ "./assets/hooks/useGetApi.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_loggedUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/loggedUser */ "./assets/actions/loggedUser.js");







var LoggedUserComponent = function LoggedUserComponent(_ref) {
  var email = _ref.email;

  var _useGetApi = Object(_hooks_useGetApi__WEBPACK_IMPORTED_MODULE_3__["useGetApi"])(),
      isLoading = _useGetApi.isLoading,
      data = _useGetApi.data,
      execute = _useGetApi.execute,
      error = _useGetApi.error;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    execute("http://localhost:8000/users/".concat(email), {});
  }, [execute]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.keys(data).length) {
      dispatch(Object(_actions_loggedUser__WEBPACK_IMPORTED_MODULE_5__["setLoggedUser"])(data));
    }
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "text large"
  }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: "12px",
    width: "100px"
  }) : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/"
  }, "\uD83D\uDEA8 An error has ocurred, try again") : "\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83C\uDFA8 ".concat(data.displayName));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(LoggedUserComponent));

/***/ }),

/***/ "./assets/components/Header/Menu.component.jsx":
/*!*****************************************************!*\
  !*** ./assets/components/Header/Menu.component.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItemAuctions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItemAuctions.component */ "./assets/components/Header/MenuItemAuctions.component.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");




var MenuComponent = function MenuComponent(_ref) {
  var signInPath = _ref.signInPath;
  var MenuItems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/"
    }, "Auctions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/myAuctions"
    }, "My auctions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItemAuctions_component__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: signInPath
    }, "Sign out"));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "menu"
  }, MenuItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "menu-collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("details", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("summary", null, "\uD83D\uDCDA Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "items"
  }, MenuItems))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(MenuComponent));

/***/ }),

/***/ "./assets/components/Header/MenuItemAuctions.component.jsx":
/*!*****************************************************************!*\
  !*** ./assets/components/Header/MenuItemAuctions.component.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_loggedUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../selectors/loggedUser */ "./assets/selectors/loggedUser.js");







var MenuItemAuctions = function MenuItemAuctions() {
  var loggedUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_selectors_loggedUser__WEBPACK_IMPORTED_MODULE_5__["loggedUserSelector"]);
  var isAdmin = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (Array.isArray(loggedUser.roles) && loggedUser.roles.length) {
      return loggedUser.roles.some(function (role) {
        return role === 'ADMINISTRATOR';
      });
    } else {
      return false;
    }
  }, [loggedUser]);
  return isAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/createAuctions"
  }, " Create auctions ") : null;
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(MenuItemAuctions));

/***/ }),

/***/ "./assets/components/Header/index.js":
/*!*******************************************!*\
  !*** ./assets/components/Header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.component */ "./assets/components/Header/Header.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/hooks/useGetApi.js":
/*!***********************************!*\
  !*** ./assets/hooks/useGetApi.js ***!
  \***********************************/
/*! exports provided: getApi, useGetApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApi", function() { return getApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetApi", function() { return useGetApi; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getApi = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, options) {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, options);

          case 2:
            response = _context.sent;
            if (response.status === 403) window.location.href = "signOut";
            _context.next = 6;
            return response.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var useGetApi = function useGetApi() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var execute = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url) {
      var options,
          _yield$getApi,
          _data,
          success,
          _args2 = arguments;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              _context2.prev = 1;
              setIsLoading(true);
              _context2.next = 5;
              return getApi(url, options);

            case 5:
              _yield$getApi = _context2.sent;
              _data = _yield$getApi.data;
              success = _yield$getApi.success;

              if (success) {
                _context2.next = 10;
                break;
              }

              throw new Error('ERROR');

            case 10:
              setData(_data);
              setIsLoading(false);
              return _context2.abrupt("return", _data);

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              setError(_context2.t0);
              setIsLoading(false);
              throw _context2.t0;

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
    }));

    return function execute(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  return {
    isLoading: isLoading,
    error: error,
    data: data,
    execute: Object(react__WEBPACK_IMPORTED_MODULE_15__["useCallback"])(execute, [])
  };
};

/***/ }),

/***/ "./assets/middlewares/enhancers/monitorReducerEnhancer.js":
/*!****************************************************************!*\
  !*** ./assets/middlewares/enhancers/monitorReducerEnhancer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var round = function round(number) {
  return Math.round(number * 100) / 100;
};

var monitorReducerEnhancer = function monitorReducerEnhancer(createStore) {
  return function (reducer, initialState, enhancer) {
    var monitoredReducer = function monitoredReducer(state, action) {
      var start = performance.now();
      var newState = reducer(state, action);
      var end = performance.now();
      var diff = round(end - start);
      console.log('reducer process time:', diff);
      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (monitorReducerEnhancer);

/***/ }),

/***/ "./assets/middlewares/tools/logger.js":
/*!********************************************!*\
  !*** ./assets/middlewares/tools/logger.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      console.groupEnd();
      return result;
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (logger);

/***/ }),

/***/ "./assets/reducers/index.js":
/*!**********************************!*\
  !*** ./assets/reducers/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _loggedUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loggedUser */ "./assets/reducers/loggedUser.js");


var rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loggedUser: _loggedUser__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducers);

/***/ }),

/***/ "./assets/reducers/loggedUser.js":
/*!***************************************!*\
  !*** ./assets/reducers/loggedUser.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_loggedUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/loggedUser */ "./assets/actions/loggedUser.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: {
    id: null,
    displayName: '',
    email: '',
    roles: []
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_loggedUser__WEBPACK_IMPORTED_MODULE_9__["SET_LOGGED_USER"]:
      return _objectSpread(_objectSpread({}, store), {}, {
        data: action.payload.loggedUser
      });

    default:
      return store;
  }
});

/***/ }),

/***/ "./assets/selectors/loggedUser.js":
/*!****************************************!*\
  !*** ./assets/selectors/loggedUser.js ***!
  \****************************************/
/*! exports provided: loggedUserSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedUserSelector", function() { return loggedUserSelector; });
var loggedUserSelector = function loggedUserSelector(store) {
  return store.loggedUser.data;
};

/***/ }),

/***/ "./assets/store.js":
/*!*************************!*\
  !*** ./assets/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _middlewares_tools_logger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./middlewares/tools/logger */ "./assets/middlewares/tools/logger.js");
/* harmony import */ var _middlewares_enhancers_monitorReducerEnhancer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./middlewares/enhancers/monitorReducerEnhancer */ "./assets/middlewares/enhancers/monitorReducerEnhancer.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducers */ "./assets/reducers/index.js");















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var configureStore = function configureStore(preloadedState) {
  var middlewares = [];
  var middlewaresEnhancers = [];
  middlewares.push(_middlewares_tools_logger__WEBPACK_IMPORTED_MODULE_15__["default"]);
  middlewaresEnhancers.push(_middlewares_enhancers_monitorReducerEnhancer__WEBPACK_IMPORTED_MODULE_16__["default"]);
  var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_14__["applyMiddleware"].apply(void 0, middlewares);
  var enhancers = [middlewareEnhancer].concat(middlewaresEnhancers);
  var composedEnhancers = redux__WEBPACK_IMPORTED_MODULE_14__["compose"].apply(void 0, _toConsumableArray(enhancers));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_14__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_17__["default"], preloadedState, composedEnhancers);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWN0aW9ucy9sb2dnZWRVc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9Mb2dnZWRVc2VyLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL01lbnUuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIvTWVudUl0ZW1BdWN0aW9ucy5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlR2V0QXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9taWRkbGV3YXJlcy9lbmhhbmNlcnMvbW9uaXRvclJlZHVjZXJFbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWlkZGxld2FyZXMvdG9vbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVkdWNlcnMvbG9nZ2VkVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VsZWN0b3JzL2xvZ2dlZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyJdLCJuYW1lcyI6WyJTRVRfTE9HR0VEX1VTRVIiLCJzZXRMb2dnZWRVc2VyIiwibG9nZ2VkVXNlciIsInR5cGUiLCJwYXlsb2FkIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwQ29tb25lbnQiLCJ1c2VNZW1vIiwiZGF0YXNldCIsInNpZ25JblBhdGgiLCJSZWFjdERvbSIsInJlbmRlciIsIkhlYWRlckNvbXBvbmVudCIsIm1lbW8iLCJMb2dnZWRVc2VyQ29tcG9uZW50IiwiZW1haWwiLCJ1c2VHZXRBcGkiLCJpc0xvYWRpbmciLCJkYXRhIiwiZXhlY3V0ZSIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsIk1lbnVDb21wb25lbnQiLCJNZW51SXRlbXMiLCJNZW51SXRlbUF1Y3Rpb25zIiwidXNlU2VsZWN0b3IiLCJsb2dnZWRVc2VyU2VsZWN0b3IiLCJpc0FkbWluIiwiQXJyYXkiLCJpc0FycmF5Iiwicm9sZXMiLCJzb21lIiwicm9sZSIsImdldEFwaSIsInVybCIsIm9wdGlvbnMiLCJmZXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwianNvbiIsInVzZVN0YXRlIiwic2V0SXNMb2FkaW5nIiwic2V0RXJyb3IiLCJzZXREYXRhIiwic3VjY2VzcyIsIkVycm9yIiwidXNlQ2FsbGJhY2siLCJyb3VuZCIsIm51bWJlciIsIk1hdGgiLCJtb25pdG9yUmVkdWNlckVuaGFuY2VyIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiZW5oYW5jZXIiLCJtb25pdG9yZWRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwibmV3U3RhdGUiLCJlbmQiLCJkaWZmIiwiY29uc29sZSIsImxvZyIsImxvZ2dlciIsIm5leHQiLCJncm91cCIsImluZm8iLCJyZXN1bHQiLCJnZXRTdGF0ZSIsImdyb3VwRW5kIiwicm9vdFJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwiaWQiLCJwcmVsb2FkZWRTdGF0ZSIsIm1pZGRsZXdhcmVzIiwibWlkZGxld2FyZXNFbmhhbmNlcnMiLCJwdXNoIiwibG9nZ2VyTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVFbmhhbmNlciIsImFwcGx5TWlkZGxld2FyZSIsImVuaGFuY2VycyIsImNvbXBvc2VkRW5oYW5jZXJzIiwiY29tcG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLGVBQWUsR0FBRyxpQkFBeEI7QUFFUDtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxVQUFELEVBQWdCO0FBRXpDLFNBQU87QUFDSEMsUUFBSSxFQUFFSCxlQURIO0FBRUhJLFdBQU8sRUFBRTtBQUNMRixnQkFBVSxFQUFWQTtBQURLO0FBRk4sR0FBUDtBQU1ILENBUk0sQzs7Ozs7Ozs7Ozs7O0FDTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUcsS0FBSyxHQUFHQyxzREFBYyxFQUE1QjtBQUNBLElBQU1DLE9BQU8sR0FBSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLHNCQUF4QixDQUFqQjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQ3JCLE1BQU1SLFVBQVUsR0FBR1MscURBQU8sQ0FBQztBQUFBLFdBQUtKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixZQUFoQixDQUFMO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0YscURBQU8sQ0FBQztBQUFBLFdBQUtKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixZQUFoQixDQUFMO0FBQUEsR0FBRCxDQUExQjtBQUVBLHNCQUNJLDJEQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFUDtBQUFqQixrQkFDSSwyREFBQyw4REFBRCxxQkFDSSwyREFBQywwREFBRDtBQUFRLGNBQVUsRUFBRUgsVUFBcEI7QUFBZ0MsY0FBVSxFQUFFVztBQUE1QyxJQURKLGVBRUksMkRBQUMsdURBQUQs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TE9HR0VEX1VTRVIgPSAnR0VUX0xPR0dFRF9VU0VSJztcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gbG9nZ2VkVXNlclxuICovXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkVXNlciA9IChsb2dnZWRVc2VyKSA9PiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfTE9HR0VEX1VTRVIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7QnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5jb25zdCBlbGVtZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1jb21wb25lbnQtcm9vdCcpO1xuXG5jb25zdCBBcHBDb21vbmVudCA9ICgpPT4ge1xuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSB1c2VNZW1vKCgpPT4gZWxlbWVudC5kYXRhc2V0Wydsb2dnZWRVc2VyJ10pO1xuICAgIGNvbnN0IHNpZ25JblBhdGggPSB1c2VNZW1vKCgpPT4gZWxlbWVudC5kYXRhc2V0WydwYXRoTG9nT3V0J10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgbG9nZ2VkVXNlcj17bG9nZ2VkVXNlcn0gc2lnbkluUGF0aD17c2lnbkluUGF0aH0vPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL215QXVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE15IEF1Y3Rpb25zLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NyZWF0ZUF1Y3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgQXVjdGlvbnMuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQXVjdGlvbnMuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbn1cblxuUmVhY3REb20ucmVuZGVyKDxBcHBDb21vbmVudCAvPiwgZWxlbWVudCk7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nZ2VkVXNlciBmcm9tICcuL0xvZ2dlZFVzZXIuY29tcG9uZW50JztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudS5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXJDb21wb25lbnQgPSAoeyBsb2dnZWRVc2VyLCBzaWduSW5QYXRoIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZCc+XG4gICAgICAgICAgICAgICAgPGgxPvCfkrggQXVjdGlvbnMhPC9oMT5cbiAgICAgICAgICAgICAgICA8TG9nZ2VkVXNlciBlbWFpbD17bG9nZ2VkVXNlcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1lbnUgc2lnbkluUGF0aD17c2lnbkluUGF0aH0gLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVhZGVyQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5pbXBvcnQgeyB1c2VHZXRBcGkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VHZXRBcGknO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRMb2dnZWRVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dnZWRVc2VyJztcblxuY29uc3QgTG9nZ2VkVXNlckNvbXBvbmVudCA9ICh7IGVtYWlsIH0pID0+IHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgZXhlY3V0ZSwgZXJyb3IgfSA9IHVzZUdldEFwaSgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy8ke2VtYWlsfWAsIHt9KTtcbiAgICB9LCBbZXhlY3V0ZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9nZ2VkVXNlcihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQgbGFyZ2UnPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PScxMnB4JyB3aWR0aD0nMTAwcHgnIC8+XG4gICAgICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLyc+8J+aqCBBbiBlcnJvciBoYXMgb2N1cnJlZCwgdHJ5IGFnYWluPC9hPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBg8J+nkfCfj7zigI3wn46oICR7ZGF0YS5kaXNwbGF5TmFtZX1gXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhMb2dnZWRVc2VyQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVJdGVtQXVjdGlvbnMgZnJvbSAnLi9NZW51SXRlbUF1Y3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE1lbnVDb21wb25lbnQgPSAoeyBzaWduSW5QYXRoIH0pID0+IHtcbiAgICBjb25zdCBNZW51SXRlbXMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5BdWN0aW9uczwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz0nL215QXVjdGlvbnMnPk15IGF1Y3Rpb25zPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbUF1Y3Rpb25zIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17c2lnbkluUGF0aH0+U2lnbiBvdXQ8L2E+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKSxcbiAgICAgICAgW11cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdtZW51Jz57TWVudUl0ZW1zfTwvbmF2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J21lbnUtY29sbGFwc2UnPlxuICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT7wn5OaIE1lbnU8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcyc+e01lbnVJdGVtc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oTWVudUNvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9nZ2VkVXNlclNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2xvZ2dlZFVzZXInO1xuXG5jb25zdCBNZW51SXRlbUF1Y3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSB1c2VTZWxlY3Rvcihsb2dnZWRVc2VyU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgaXNBZG1pbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2dnZWRVc2VyLnJvbGVzKSAmJiBsb2dnZWRVc2VyLnJvbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlZFVzZXIucm9sZXMuc29tZSgocm9sZSkgPT4gcm9sZSA9PT0gJ0FETUlOSVNUUkFUT1InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtsb2dnZWRVc2VyXSk7XG5cbiAgICByZXR1cm4gaXNBZG1pbiA/IDxMaW5rIHRvPScvY3JlYXRlQXVjdGlvbnMnPiBDcmVhdGUgYXVjdGlvbnMgPC9MaW5rPiA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1lbnVJdGVtQXVjdGlvbnMpO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9IZWFkZXIuY29tcG9uZW50XCI7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBpID0gYXN5bmMgKHVybCwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwic2lnbk91dFwiO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEFwaSA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY29uc3Qge2RhdGEsIHN1Y2Nlc3N9ID0gYXdhaXQgZ2V0QXBpKHVybCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGlmKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFUlJPUicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZXhlY3V0ZTogdXNlQ2FsbGJhY2soZXhlY3V0ZSwgW10pXG4gICAgfTtcbn07IiwiY29uc3Qgcm91bmQgPSAobnVtYmVyKSA9PiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDA7XG5cbmNvbnN0IG1vbml0b3JSZWR1Y2VyRW5oYW5jZXIgPSAoY3JlYXRlU3RvcmUpID0+IChyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSA9PiB7XG4gICAgY29uc3QgbW9uaXRvcmVkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGRpZmYgPSByb3VuZChlbmQgLSBzdGFydCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcHJvY2VzcyB0aW1lOicsIGRpZmYpO1xuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKG1vbml0b3JlZFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uaXRvclJlZHVjZXJFbmhhbmNlcjtcbiIsImNvbnN0IGxvZ2dlciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmdyb3VwKGFjdGlvbi50eXBlKTtcbiAgICBjb25zb2xlLmluZm8oJ2Rpc3BhdGNoaW5nJywgYWN0aW9uKTtcbiAgICBsZXQgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuICAgIGNvbnNvbGUubG9nKCduZXh0IHN0YXRlJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBsb2dnZWRVc2VyIGZyb20gJy4vbG9nZ2VkVXNlcic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7IGxvZ2dlZFVzZXIgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VycztcbiIsImltcG9ydCB7IFNFVF9MT0dHRURfVVNFUiB9IGZyb20gJy4uL2FjdGlvbnMvbG9nZ2VkVXNlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBkaXNwbGF5TmFtZTonJyxcbiAgICAgICAgZW1haWw6JycsXG4gICAgICAgIHJvbGVzOltdXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdG9yZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNFVF9MT0dHRURfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RvcmUsXG4gICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQubG9nZ2VkVXNlcixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGxvZ2dlZFVzZXJTZWxlY3RvciA9IChzdG9yZSkgPT4gc3RvcmUubG9nZ2VkVXNlci5kYXRhO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGxvZ2dlck1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlcy90b29scy9sb2dnZXInO1xuaW1wb3J0IG1vbml0b3JSZWR1Y2VyRW5oYW5jZXIgZnJvbSAnLi9taWRkbGV3YXJlcy9lbmhhbmNlcnMvbW9uaXRvclJlZHVjZXJFbmhhbmNlcic7XG5cbmltcG9ydCByb290UmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gICAgbGV0IG1pZGRsZXdhcmVzID0gW107XG4gICAgbGV0IG1pZGRsZXdhcmVzRW5oYW5jZXJzID0gW107XG5cbiAgICBtaWRkbGV3YXJlcy5wdXNoKGxvZ2dlck1pZGRsZXdhcmUpO1xuICAgIG1pZGRsZXdhcmVzRW5oYW5jZXJzLnB1c2gobW9uaXRvclJlZHVjZXJFbmhhbmNlcik7XG5cblxuICAgIGNvbnN0IG1pZGRsZXdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyk7XG4gICAgY29uc3QgZW5oYW5jZXJzID0gW21pZGRsZXdhcmVFbmhhbmNlciwgLi4ubWlkZGxld2FyZXNFbmhhbmNlcnNdO1xuXG4gICAgY29uc3QgY29tcG9zZWRFbmhhbmNlcnMgPSBjb21wb3NlKC4uLmVuaGFuY2Vycyk7XG5cbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VkRW5oYW5jZXJzKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==