(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/actions/auction.js":
/*!***********************************!*\
  !*** ./assets/actions/auction.js ***!
  \***********************************/
/*! exports provided: SET_AUCTION, CLEAR_AUCTION, setAuction, clearAuction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUCTION", function() { return SET_AUCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_AUCTION", function() { return CLEAR_AUCTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuction", function() { return setAuction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAuction", function() { return clearAuction; });
var SET_AUCTION = 'SET_AUCTION';
var CLEAR_AUCTION = 'CLEAR_AUCTION';
/**
 * @param {Object} auction
 */

var setAuction = function setAuction(auction) {
  return {
    type: SET_AUCTION,
    payload: {
      auction: auction
    }
  };
};
var clearAuction = function clearAuction() {
  return {
    type: CLEAR_AUCTION
  };
};

/***/ }),

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
/* harmony import */ var _components_AuctionManagment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AuctionManagment */ "./assets/components/AuctionManagment/index.js");
/* harmony import */ var _components_AuctionsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AuctionsList */ "./assets/components/AuctionsList/index.js");
/* harmony import */ var _components_BidsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BidsList */ "./assets/components/BidsList/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./assets/store.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_9__);










var store = Object(_store__WEBPACK_IMPORTED_MODULE_8__["default"])();
var element = document.getElementById('react-component-root');

var AppComonent = function AppComonent() {
  var loggedUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return element.dataset['loggedUser'];
  });
  var signInPath = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return element.dataset['pathLogOut'];
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loggedUser: loggedUser,
    signInPath: signInPath
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/myBids"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BidsList__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/createAuctions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AuctionManagment__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/auctions/:id"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AuctionManagment__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AuctionsList__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));
};

react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppComonent, null), element);

/***/ }),

/***/ "./assets/components/AuctionManagment/AuctionManagment.component.jsx":
/*!***************************************************************************!*\
  !*** ./assets/components/AuctionManagment/AuctionManagment.component.jsx ***!
  \***************************************************************************/
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Input */ "./assets/components/Input/index.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useApi */ "./assets/hooks/useApi.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_auction__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../selectors/auction */ "./assets/selectors/auction.js");
/* harmony import */ var _actions_auction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../actions/auction */ "./assets/actions/auction.js");
/* harmony import */ var _public_styles_form_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../public/styles/form.css */ "./public/styles/form.css");
/* harmony import */ var _public_styles_form_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_public_styles_form_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../styles/form.css */ "./assets/styles/form.css");
/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_styles_form_css__WEBPACK_IMPORTED_MODULE_23__);
















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var AuctionManagmentComponent = function AuctionManagmentComponent() {
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["useHistory"])();
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_18__["useParams"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["useDispatch"])();
  var auctionSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_19__["useSelector"])(_selectors_auction__WEBPACK_IMPORTED_MODULE_20__["auctionDataSelector"]);

  var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_17__["useApi"])(),
      isLoading = _useApi.isLoading,
      error = _useApi.error,
      execute = _useApi.execute;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      initialValue = _useState6[0],
      setInitialValue = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isDeleted = _useState8[0],
      setIsDeleted = _useState8[1];

  var isNew = Object(react__WEBPACK_IMPORTED_MODULE_15__["useMemo"])(function () {
    return typeof params.id !== 'string';
  }, [params.id]);

  var handleSetName = function handleSetName(ev) {
    return setName(ev.target.value);
  };

  var handleSetDescription = function handleSetDescription(ev) {
    return setDescription(ev.target.value);
  };

  var handleSetInitialValue = function handleSetInitialValue(ev) {
    return setInitialValue(ev.target.value);
  };

  var handleOnsubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {
      var url, method, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ev.preventDefault();
              url = 'http://localhost:8000/auction';
              method = 'POST';

              if (!isNew) {
                url += "/".concat(auctionSelector.id);
                method = 'PUT';
              }

              _context.next = 6;
              return execute(url, {
                method: method,
                body: JSON.stringify({
                  name: name,
                  description: description,
                  initial_value: +initialValue,
                  picture: auctionSelector.picture
                })
              });

            case 6:
              response = _context.sent;
              dispatch(Object(_actions_auction__WEBPACK_IMPORTED_MODULE_21__["setAuction"])(response));
              history.push("/auctions/".concat(response.id));
              ev.stopPropagation();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnsubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleDelete = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ev) {
      var url, method;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ev.preventDefault();
              url = "http://localhost:8000/auction/".concat(auctionSelector.id);
              method = 'DELETE';
              _context2.prev = 3;
              setIsDeleted(true);
              _context2.next = 7;
              return execute(url, {
                method: method
              });

            case 7:
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](3);
              setIsDeleted(false);

            case 12:
              history.push('/');
              ev.stopPropagation();

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 9]]);
    }));

    return function handleDelete(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_15__["useEffect"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(params.id && !isDeleted)) {
              _context3.next = 11;
              break;
            }

            if (!auctionSelector.id) {
              _context3.next = 7;
              break;
            }

            setName(auctionSelector.name);
            setDescription(auctionSelector.description);
            setInitialValue(auctionSelector.initial_value);
            _context3.next = 11;
            break;

          case 7:
            _context3.next = 9;
            return execute("http://localhost:8000/auction/".concat(params.id), {});

          case 9:
            response = _context3.sent;
            dispatch(Object(_actions_auction__WEBPACK_IMPORTED_MODULE_21__["setAuction"])(response));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [auctionSelector]);
  Object(react__WEBPACK_IMPORTED_MODULE_15__["useEffect"])(function () {
    return function () {
      dispatch(Object(_actions_auction__WEBPACK_IMPORTED_MODULE_21__["clearAuction"])());
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("main", {
    className: "formMainWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
    className: "card form-card",
    onSubmit: handleOnsubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("h2", null, "\u270F\uFE0F Auction Managment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "imageWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("img", {
    src: auctionSelector.picture,
    alt: "Auction image",
    className: "image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: name,
    onChange: handleSetName,
    label: "Name (*)",
    placeholder: "Enter auction name",
    isLoading: isLoading,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: description,
    onChange: handleSetDescription,
    label: "Description",
    placeholder: "Enter auction description",
    isLoading: isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: initialValue,
    onChange: handleSetInitialValue,
    label: "Initial value (*)",
    type: "number",
    placeholder: "Enter auction initial value",
    disabled: !isNew,
    isLoading: isLoading,
    required: true
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
    className: "hint-message center"
  }, "\uD83D\uDEA8 An error has ocurred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "flex"
  }, !isNew && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "submit",
    value: "Delete",
    className: "button delete-button ".concat(isLoading && 'loading'),
    disabled: isLoading,
    onClick: handleDelete
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "submit",
    value: "Submit",
    className: "button primary ".concat(isLoading && 'loading'),
    disabled: isLoading
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_15__["memo"])(AuctionManagmentComponent));

/***/ }),

/***/ "./assets/components/AuctionManagment/UserAuction.component.jsx":
/*!**********************************************************************!*\
  !*** ./assets/components/AuctionManagment/UserAuction.component.jsx ***!
  \**********************************************************************/
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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Input */ "./assets/components/Input/index.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useApi */ "./assets/hooks/useApi.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/list.css */ "./assets/styles/list.css");
/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_list_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom/cjs/react-router-dom.min */ "./node_modules/react-router-dom/cjs/react-router-dom.min.js");
/* harmony import */ var react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_16__);












function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var UserAuctionComponent = function UserAuctionComponent(_ref) {
  var user_id = _ref.user_id;
  var bid = Object(react__WEBPACK_IMPORTED_MODULE_11__["useRef"])(null);

  var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_13__["useApi"])(),
      isLoading = _useApi.isLoading,
      data = _useApi.data,
      error = _useApi.error,
      execute = _useApi.execute;

  var history = Object(react_router_dom_cjs_react_router_dom_min__WEBPACK_IMPORTED_MODULE_16__["useHistory"])();
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["useParams"])();

  var handleOnsubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ev.preventDefault();

              if (!(+bid.current.value <= data.last_bid)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return execute("http://localhost:8000/bid", {
                method: 'POST',
                body: JSON.stringify({
                  bid: bid.current.value,
                  auction_id: data.id,
                  user_id: user_id
                })
              });

            case 5:
              history.push('/');
              ev.stopPropagation();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnsubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!params.id) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return execute("http://localhost:8000/auction/".concat(params.id), {});

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [params.id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("main", {
    className: "formMainWrapper"
  }, _typeof(data) === 'object' && Object.keys(data).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "listWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("article", {
    className: "listItem card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "imageWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
    src: data.picture,
    alt: "Auction image",
    className: "image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: "itemDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", null, data.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", null, data.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", null, data.last_bid, "\u20AC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
    onSubmit: handleOnsubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    ref: bid,
    label: "Bid",
    placeholder: "Enter a Bid",
    required: true
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
    className: "hint-message center"
  }, "\uD83D\uDEA8 An error has ocurred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: "submit",
    value: "Bid",
    className: "button primary ".concat(isLoading && 'loading'),
    disabled: isLoading
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_11__["memo"])(UserAuctionComponent));

/***/ }),

/***/ "./assets/components/AuctionManagment/index.js":
/*!*****************************************************!*\
  !*** ./assets/components/AuctionManagment/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _AuctionManagment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuctionManagment.component */ "./assets/components/AuctionManagment/AuctionManagment.component.jsx");
/* harmony import */ var _UserAuction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserAuction.component */ "./assets/components/AuctionManagment/UserAuction.component.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_loggedUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/loggedUser */ "./assets/selectors/loggedUser.js");








var EntryPointComponent = function EntryPointComponent() {
  var loggedUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_selectors_loggedUser__WEBPACK_IMPORTED_MODULE_6__["loggedUserSelector"]);
  var isAdmin = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (Array.isArray(loggedUser.roles) && loggedUser.roles.length) {
      return loggedUser.roles.some(function (role) {
        return role === 'ADMINISTRATOR';
      });
    } else {
      return false;
    }
  }, [loggedUser]);
  return isAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AuctionManagment_component__WEBPACK_IMPORTED_MODULE_3__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UserAuction_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user_id: loggedUser.id
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(EntryPointComponent));

/***/ }),

/***/ "./assets/components/AuctionsList/AuctionsList.component.jsx":
/*!*******************************************************************!*\
  !*** ./assets/components/AuctionsList/AuctionsList.component.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.component */ "./assets/components/AuctionsList/Card.component.jsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../List */ "./assets/components/List/index.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useApi */ "./assets/hooks/useApi.js");
/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/list.css */ "./assets/styles/list.css");
/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_list_css__WEBPACK_IMPORTED_MODULE_4__);





var url = 'http://localhost:8000/auction';

var AuctionsListComponent = function AuctionsListComponent() {
  var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__["useApi"])(),
      isLoading = _useApi.isLoading,
      data = _useApi.data,
      error = _useApi.error,
      execute = _useApi.execute;

  var queryName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleEnter = function handleEnter(ev) {
    if (ev.charCode === 13) {
      handleSearch();
    }
  };

  var handleSearch = function handleSearch() {
    var ulrWithParams = url;

    if (queryName.current.value.length) {
      ulrWithParams += "?name=".concat(queryName.current.value);
    }

    execute(ulrWithParams, {});
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    execute(url, {});
  }, [execute]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "listMainWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filterWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: queryName,
    type: "text",
    className: "input",
    placeholder: "Search by name",
    onKeyPress: handleEnter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleSearch
  }, "\uD83D\uDD0D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isLoading: isLoading,
    error: error,
    data: data,
    item: _Card_component__WEBPACK_IMPORTED_MODULE_1__["default"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(AuctionsListComponent));

/***/ }),

/***/ "./assets/components/AuctionsList/Card.component.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/AuctionsList/Card.component.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ItemCard */ "./assets/components/ItemCard/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







var CardComponent = function CardComponent(_ref) {
  var id = _ref.id,
      name = _ref.name,
      picture = _ref.picture,
      description = _ref.description,
      last_bid = _ref.last_bid;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var handleClickCard = function handleClickCard() {
    return history.push("/auctions/".concat(id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ItemCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: name,
    picture: picture,
    description: description,
    value: last_bid,
    onClick: handleClickCard
  });
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(CardComponent));

/***/ }),

/***/ "./assets/components/AuctionsList/index.js":
/*!*************************************************!*\
  !*** ./assets/components/AuctionsList/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuctionsList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuctionsList.component */ "./assets/components/AuctionsList/AuctionsList.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AuctionsList_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/components/BidsList/BidsList.component.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/BidsList/BidsList.component.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.component */ "./assets/components/BidsList/Card.component.jsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../List */ "./assets/components/List/index.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useApi */ "./assets/hooks/useApi.js");
/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/list.css */ "./assets/styles/list.css");
/* harmony import */ var _styles_list_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_list_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_loggedUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/loggedUser */ "./assets/selectors/loggedUser.js");







var url = 'http://localhost:8000/bid/users';

var BidsListComponent = function BidsListComponent() {
  var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__["useApi"])(),
      isLoading = _useApi.isLoading,
      data = _useApi.data,
      error = _useApi.error,
      execute = _useApi.execute;

  var loggedUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_selectors_loggedUser__WEBPACK_IMPORTED_MODULE_6__["loggedUserSelector"]);
  var getBits = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return loggedUser.id && execute("".concat(url, "/").concat(loggedUser.id), {});
  }, [execute, loggedUser.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getBits();
  }, [getBits]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "listMainWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isLoading: isLoading,
    error: error,
    data: data,
    item: _Card_component__WEBPACK_IMPORTED_MODULE_1__["default"],
    getBits: getBits
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(BidsListComponent));

/***/ }),

/***/ "./assets/components/BidsList/Card.component.jsx":
/*!*******************************************************!*\
  !*** ./assets/components/BidsList/Card.component.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useApi */ "./assets/hooks/useApi.js");
/* harmony import */ var _ItemCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ItemCard */ "./assets/components/ItemCard/index.js");








function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var CardComponent = function CardComponent(_ref) {
  var id = _ref.id,
      value = _ref.value,
      auction = _ref.auction,
      getBits = _ref.getBits;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();

  var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_9__["useApi"])(),
      isLoading = _useApi.isLoading,
      error = _useApi.error,
      execute = _useApi.execute;

  var handleCancel = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ev.preventDefault();
              _context.next = 3;
              return execute("http://localhost:8000/bid/".concat(id), {
                method: 'DELETE'
              });

            case 3:
              if (typeof getBits === 'function') {
                getBits();
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleCancel(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ItemCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: auction.name,
    picture: auction.picture,
    description: auction.description,
    value: "My bit ".concat(value, "\u20AC  | Current bit ").concat(auction.last_bid)
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, "\uD83D\uDEA8 An error has ocurred"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
    className: "button ".concat(isLoading && 'loading'),
    disabled: isLoading,
    onClick: handleCancel
  }, isLoading ? '...' : 'Cancel'));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(CardComponent));

/***/ }),

/***/ "./assets/components/BidsList/index.js":
/*!*********************************************!*\
  !*** ./assets/components/BidsList/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BidsList_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BidsList.component */ "./assets/components/BidsList/BidsList.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BidsList_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var _hooks_useApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useApi */ "./assets/hooks/useApi.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_loggedUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/loggedUser */ "./assets/actions/loggedUser.js");







var LoggedUserComponent = function LoggedUserComponent(_ref) {
  var email = _ref.email;

  var _useApi = Object(_hooks_useApi__WEBPACK_IMPORTED_MODULE_3__["useApi"])(),
      isLoading = _useApi.isLoading,
      data = _useApi.data,
      execute = _useApi.execute,
      error = _useApi.error;

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
    }, "Auctions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItemAuctions_component__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
  }, " Create auctions ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/myBids"
  }, "My bids");
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

/***/ "./assets/components/Input/Input.component.jsx":
/*!*****************************************************!*\
  !*** ./assets/components/Input/Input.component.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5__);





function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var InputComponent = function InputComponent(_ref, ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? Math.random() : _ref$id,
      label = _ref.label,
      isLoading = _ref.isLoading,
      props = _objectWithoutProperties(_ref, ["id", "label", "isLoading"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "formController"
  }, !isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    className: "label",
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", _extends({
    ref: ref,
    className: "input",
    id: id
  }, props))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: "12px",
    width: "40%"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    height: "30px",
    width: "100%"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(InputComponent)));

/***/ }),

/***/ "./assets/components/Input/index.js":
/*!******************************************!*\
  !*** ./assets/components/Input/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.component */ "./assets/components/Input/Input.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/components/ItemCard/ItemCard.component.jsx":
/*!***********************************************************!*\
  !*** ./assets/components/ItemCard/ItemCard.component.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var CardComponent = function CardComponent(_ref) {
  var title = _ref.title,
      picture = _ref.picture,
      description = _ref.description,
      value = _ref.value,
      onClick = _ref.onClick,
      children = _ref.children;

  var handleClickCard = function handleClickCard() {
    return typeof onClick === 'function' && onClick();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    onClick: handleClickCard,
    className: "listItem card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "imageWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: picture,
    alt: "Auction image",
    className: "image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "itemDescription"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, value, "\u20AC")), children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(CardComponent));

/***/ }),

/***/ "./assets/components/ItemCard/index.js":
/*!*********************************************!*\
  !*** ./assets/components/ItemCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemCard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemCard.component */ "./assets/components/ItemCard/ItemCard.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ItemCard_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/components/List/List.component.jsx":
/*!***************************************************!*\
  !*** ./assets/components/List/List.component.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7__);







function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ListComponent = function ListComponent(_ref) {
  var data = _ref.data,
      error = _ref.error,
      isLoading = _ref.isLoading,
      Item = _ref.item,
      props = _objectWithoutProperties(_ref, ["data", "error", "isLoading", "item"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "listWrapper"
  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "hint-message"
  }, "\uD83D\uDEA8 An error has occuredd") : Array.isArray(data) && !isLoading ? data.length > 0 ? data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Item, _extends({
      key: item.id
    }, item, props));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "hint-message"
  }, "\uD83D\uDE31 Empty..") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    count: 6,
    className: "card"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_6__["memo"])(ListComponent));

/***/ }),

/***/ "./assets/components/List/index.js":
/*!*****************************************!*\
  !*** ./assets/components/List/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.component */ "./assets/components/List/List.component.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _List_component__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/hooks/useApi.js":
/*!********************************!*\
  !*** ./assets/hooks/useApi.js ***!
  \********************************/
/*! exports provided: fetchApi, useApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApi", function() { return fetchApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApi", function() { return useApi; });
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


var fetchApi = /*#__PURE__*/function () {
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

  return function fetchApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var useApi = function useApi() {
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
          _yield$fetchApi,
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
              setError(null);
              _context2.next = 6;
              return fetchApi(url, options);

            case 6:
              _yield$fetchApi = _context2.sent;
              _data = _yield$fetchApi.data;
              success = _yield$fetchApi.success;

              if (success) {
                _context2.next = 11;
                break;
              }

              throw new Error('ERROR');

            case 11:
              setData(_data);
              setIsLoading(false);
              return _context2.abrupt("return", _data);

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](1);
              setError(_context2.t0);
              setIsLoading(false);
              throw _context2.t0;

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
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

/***/ "./assets/reducers/auction.js":
/*!************************************!*\
  !*** ./assets/reducers/auction.js ***!
  \************************************/
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
/* harmony import */ var _actions_auction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/auction */ "./assets/actions/auction.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  data: {
    id: null,
    name: '',
    description: '',
    initial_value: 0,
    picture: 'http://localhost:8000/images/art.svg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_auction__WEBPACK_IMPORTED_MODULE_9__["CLEAR_AUCTION"]:
      {
        return _objectSpread(_objectSpread({}, store), {}, {
          data: initialState.data
        });
      }

    case _actions_auction__WEBPACK_IMPORTED_MODULE_9__["SET_AUCTION"]:
      return _objectSpread(_objectSpread({}, store), {}, {
        data: _objectSpread(_objectSpread(_objectSpread({}, store.data), action.payload.auction), {}, {
          picture: 'http://localhost:8000/images/art.svg'
        })
      });

    default:
      return store;
  }
});

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
/* harmony import */ var _auction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auction */ "./assets/reducers/auction.js");



var rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loggedUser: _loggedUser__WEBPACK_IMPORTED_MODULE_1__["default"],
  auction: _auction__WEBPACK_IMPORTED_MODULE_2__["default"]
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

/***/ "./assets/selectors/auction.js":
/*!*************************************!*\
  !*** ./assets/selectors/auction.js ***!
  \*************************************/
/*! exports provided: auctionDataSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auctionDataSelector", function() { return auctionDataSelector; });
var auctionDataSelector = function auctionDataSelector(store) {
  return store.auction.data;
};

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

/***/ }),

/***/ "./assets/styles/form.css":
/*!********************************!*\
  !*** ./assets/styles/form.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/styles/list.css":
/*!********************************!*\
  !*** ./assets/styles/list.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./public/styles/form.css":
/*!********************************!*\
  !*** ./public/styles/form.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWN0aW9ucy9hdWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hY3Rpb25zL2xvZ2dlZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uTWFuYWdtZW50L0F1Y3Rpb25NYW5hZ21lbnQuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uTWFuYWdtZW50L1VzZXJBdWN0aW9uLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXVjdGlvbk1hbmFnbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uc0xpc3QvQXVjdGlvbnNMaXN0LmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXVjdGlvbnNMaXN0L0NhcmQuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmlkc0xpc3QvQmlkc0xpc3QuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CaWRzTGlzdC9DYXJkLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmlkc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9Mb2dnZWRVc2VyLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL01lbnUuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIvTWVudUl0ZW1BdWN0aW9ucy5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbnB1dC9JbnB1dC5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0l0ZW1DYXJkL0l0ZW1DYXJkLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSXRlbUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGlzdC9MaXN0LmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlQXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9taWRkbGV3YXJlcy9lbmhhbmNlcnMvbW9uaXRvclJlZHVjZXJFbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWlkZGxld2FyZXMvdG9vbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWR1Y2Vycy9hdWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVkdWNlcnMvbG9nZ2VkVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VsZWN0b3JzL2F1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlbGVjdG9ycy9sb2dnZWRVc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xpc3QuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvZm9ybS5jc3MiXSwibmFtZXMiOlsiU0VUX0FVQ1RJT04iLCJDTEVBUl9BVUNUSU9OIiwic2V0QXVjdGlvbiIsImF1Y3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImNsZWFyQXVjdGlvbiIsIlNFVF9MT0dHRURfVVNFUiIsInNldExvZ2dlZFVzZXIiLCJsb2dnZWRVc2VyIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwQ29tb25lbnQiLCJ1c2VNZW1vIiwiZGF0YXNldCIsInNpZ25JblBhdGgiLCJSZWFjdERvbSIsInJlbmRlciIsIkF1Y3Rpb25NYW5hZ21lbnRDb21wb25lbnQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInBhcmFtcyIsInVzZVBhcmFtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdWN0aW9uU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsImF1Y3Rpb25EYXRhU2VsZWN0b3IiLCJ1c2VBcGkiLCJpc0xvYWRpbmciLCJlcnJvciIsImV4ZWN1dGUiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImluaXRpYWxWYWx1ZSIsInNldEluaXRpYWxWYWx1ZSIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsImlzTmV3IiwiaWQiLCJoYW5kbGVTZXROYW1lIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNldERlc2NyaXB0aW9uIiwiaGFuZGxlU2V0SW5pdGlhbFZhbHVlIiwiaGFuZGxlT25zdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5pdGlhbF92YWx1ZSIsInBpY3R1cmUiLCJyZXNwb25zZSIsInB1c2giLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVEZWxldGUiLCJ1c2VFZmZlY3QiLCJtZW1vIiwiVXNlckF1Y3Rpb25Db21wb25lbnQiLCJ1c2VyX2lkIiwiYmlkIiwidXNlUmVmIiwiZGF0YSIsImN1cnJlbnQiLCJsYXN0X2JpZCIsImF1Y3Rpb25faWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiRW50cnlQb2ludENvbXBvbmVudCIsImxvZ2dlZFVzZXJTZWxlY3RvciIsImlzQWRtaW4iLCJBcnJheSIsImlzQXJyYXkiLCJyb2xlcyIsInNvbWUiLCJyb2xlIiwiQXVjdGlvbnNMaXN0Q29tcG9uZW50IiwicXVlcnlOYW1lIiwiaGFuZGxlRW50ZXIiLCJjaGFyQ29kZSIsImhhbmRsZVNlYXJjaCIsInVscldpdGhQYXJhbXMiLCJDYXJkIiwiQ2FyZENvbXBvbmVudCIsImhhbmRsZUNsaWNrQ2FyZCIsIkJpZHNMaXN0Q29tcG9uZW50IiwiZ2V0Qml0cyIsInVzZUNhbGxiYWNrIiwiaGFuZGxlQ2FuY2VsIiwiSGVhZGVyQ29tcG9uZW50IiwiTG9nZ2VkVXNlckNvbXBvbmVudCIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJNZW51Q29tcG9uZW50IiwiTWVudUl0ZW1zIiwiTWVudUl0ZW1BdWN0aW9ucyIsIklucHV0Q29tcG9uZW50IiwicmVmIiwiTWF0aCIsInJhbmRvbSIsImxhYmVsIiwicHJvcHMiLCJmb3J3YXJkUmVmIiwidGl0bGUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJMaXN0Q29tcG9uZW50IiwiSXRlbSIsIml0ZW0iLCJtYXAiLCJmZXRjaEFwaSIsIm9wdGlvbnMiLCJmZXRjaCIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImpzb24iLCJzZXRJc0xvYWRpbmciLCJzZXRFcnJvciIsInNldERhdGEiLCJzdWNjZXNzIiwiRXJyb3IiLCJyb3VuZCIsIm51bWJlciIsIm1vbml0b3JSZWR1Y2VyRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJlbmhhbmNlciIsIm1vbml0b3JlZFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJuZXdTdGF0ZSIsImVuZCIsImRpZmYiLCJjb25zb2xlIiwibG9nIiwibG9nZ2VyIiwibmV4dCIsImdyb3VwIiwiaW5mbyIsInJlc3VsdCIsImdldFN0YXRlIiwiZ3JvdXBFbmQiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJwcmVsb2FkZWRTdGF0ZSIsIm1pZGRsZXdhcmVzIiwibWlkZGxld2FyZXNFbmhhbmNlcnMiLCJsb2dnZXJNaWRkbGV3YXJlIiwibWlkZGxld2FyZUVuaGFuY2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiZW5oYW5jZXJzIiwiY29tcG9zZWRFbmhhbmNlcnMiLCJjb21wb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFdBQVcsR0FBRyxhQUFwQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVQO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFFbkMsU0FBTztBQUNIQyxRQUFJLEVBQUVKLFdBREg7QUFFSEssV0FBTyxFQUFFO0FBQ0xGLGFBQU8sRUFBUEE7QUFESztBQUZOLEdBQVA7QUFNSCxDQVJNO0FBVUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQy9CRixRQUFJLEVBQUVIO0FBRHlCLEdBQVA7QUFBQSxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQU8sSUFBTU0sZUFBZSxHQUFHLGlCQUF4QjtBQUVQO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQsRUFBZ0I7QUFFekMsU0FBTztBQUNITCxRQUFJLEVBQUVHLGVBREg7QUFFSEYsV0FBTyxFQUFFO0FBQ0xJLGdCQUFVLEVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNNUQsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDcUosY0FBRCxFQUFvQjtBQUN2QyxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxNQUFJQyxvQkFBb0IsR0FBRyxFQUEzQjtBQUVBRCxhQUFXLENBQUNuRyxJQUFaLENBQWlCcUcsa0VBQWpCO0FBQ0FELHNCQUFvQixDQUFDcEcsSUFBckIsQ0FBMEJ5RSxzRkFBMUI7QUFHQSxNQUFNNkIsa0JBQWtCLEdBQUdDLHNEQUFlLE1BQWYsU0FBbUJKLFdBQW5CLENBQTNCO0FBQ0EsTUFBTUssU0FBUyxJQUFJRixrQkFBSixTQUEyQkYsb0JBQTNCLENBQWY7QUFFQSxNQUFNSyxpQkFBaUIsR0FBR0MsOENBQU8sTUFBUCw0QkFBV0YsU0FBWCxFQUExQjtBQUVBLE1BQU01SixLQUFLLEdBQUc4SCwwREFBVyxDQUFDc0Isa0RBQUQsRUFBZUUsY0FBZixFQUErQk8saUJBQS9CLENBQXpCO0FBRUEsU0FBTzdKLEtBQVA7QUFDSCxDQWhCRDs7QUFrQmVDLDZFQUFmLEU7Ozs7Ozs7Ozs7O0FDekJBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfQVVDVElPTiA9ICdTRVRfQVVDVElPTic7XG5leHBvcnQgY29uc3QgQ0xFQVJfQVVDVElPTiA9ICdDTEVBUl9BVUNUSU9OJztcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXVjdGlvblxuICovXG5leHBvcnQgY29uc3Qgc2V0QXVjdGlvbiA9IChhdWN0aW9uKSA9PiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfQVVDVElPTixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgYXVjdGlvblxuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJBdWN0aW9uID0gKCkgPT4gKHtcbiAgICB0eXBlOiBDTEVBUl9BVUNUSU9OLFxufSk7XG4iLCJleHBvcnQgY29uc3QgU0VUX0xPR0dFRF9VU0VSID0gJ0dFVF9MT0dHRURfVVNFUic7XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IGxvZ2dlZFVzZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHNldExvZ2dlZFVzZXIgPSAobG9nZ2VkVXNlcikgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX0xPR0dFRF9VU0VSLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBsb2dnZWRVc2VyXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgQXVjdGlvbk1hbmFnbWVudCBmcm9tICcuL2NvbXBvbmVudHMvQXVjdGlvbk1hbmFnbWVudCc7XG5pbXBvcnQgQXVjdGlvbnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9BdWN0aW9uc0xpc3QnO1xuaW1wb3J0IEJpZHNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9CaWRzTGlzdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZX0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcbmNvbnN0IGVsZW1lbnQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LWNvbXBvbmVudC1yb290Jyk7XG5cbmNvbnN0IEFwcENvbW9uZW50ID0gKCk9PiB7XG5cbiAgICBjb25zdCBsb2dnZWRVc2VyID0gdXNlTWVtbygoKT0+IGVsZW1lbnQuZGF0YXNldFsnbG9nZ2VkVXNlciddKTtcbiAgICBjb25zdCBzaWduSW5QYXRoID0gdXNlTWVtbygoKT0+IGVsZW1lbnQuZGF0YXNldFsncGF0aExvZ091dCddKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGxvZ2dlZFVzZXI9e2xvZ2dlZFVzZXJ9IHNpZ25JblBhdGg9e3NpZ25JblBhdGh9Lz5cbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9teUJpZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCaWRzTGlzdCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jcmVhdGVBdWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1Y3Rpb25NYW5hZ21lbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXVjdGlvbnMvOmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXVjdGlvbk1hbmFnbWVudCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXVjdGlvbnNMaXN0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApXG59XG5cblJlYWN0RG9tLnJlbmRlcig8QXBwQ29tb25lbnQgLz4sIGVsZW1lbnQpOyIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQXBpJztcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYXVjdGlvbkRhdGFTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9hdWN0aW9uJztcbmltcG9ydCB7IHNldEF1Y3Rpb24sIGNsZWFyQXVjdGlvbiB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXVjdGlvbic7XG5cbmltcG9ydCAnLi4vLi4vLi4vcHVibGljL3N0eWxlcy9mb3JtLmNzcyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9mb3JtLmNzcyc7XG5cbmNvbnN0IEF1Y3Rpb25NYW5hZ21lbnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gICAgbGV0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGF1Y3Rpb25TZWxlY3RvciA9IHVzZVNlbGVjdG9yKGF1Y3Rpb25EYXRhU2VsZWN0b3IpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZXhlY3V0ZSB9ID0gdXNlQXBpKCk7XG5cbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2luaXRpYWxWYWx1ZSwgc2V0SW5pdGlhbFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBpc05ldyA9IHVzZU1lbW8oKCkgPT4gdHlwZW9mIHBhcmFtcy5pZCAhPT0gJ3N0cmluZycsIFtwYXJhbXMuaWRdKTtcblxuICAgIGNvbnN0IGhhbmRsZVNldE5hbWUgPSAoZXYpID0+IHNldE5hbWUoZXYudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVTZXREZXNjcmlwdGlvbiA9IChldikgPT4gc2V0RGVzY3JpcHRpb24oZXYudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBoYW5kbGVTZXRJbml0aWFsVmFsdWUgPSAoZXYpID0+IHNldEluaXRpYWxWYWx1ZShldi50YXJnZXQudmFsdWUpO1xuXG4gICAgY29uc3QgaGFuZGxlT25zdWJtaXQgPSBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdWN0aW9uJztcblxuICAgICAgICBsZXQgbWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgICAgIGlmICghaXNOZXcpIHtcbiAgICAgICAgICAgIHVybCArPSBgLyR7YXVjdGlvblNlbGVjdG9yLmlkfWA7XG4gICAgICAgICAgICBtZXRob2QgPSAnUFVUJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXhlY3V0ZSh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBpbml0aWFsX3ZhbHVlOiAraW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IGF1Y3Rpb25TZWxlY3Rvci5waWN0dXJlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpc3BhdGNoKHNldEF1Y3Rpb24ocmVzcG9uc2UpKTtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvYXVjdGlvbnMvJHtyZXNwb25zZS5pZH1gKTtcblxuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdWN0aW9uLyR7YXVjdGlvblNlbGVjdG9yLmlkfWA7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9ICdERUxFVEUnO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRJc0RlbGV0ZWQodHJ1ZSk7XG4gICAgICAgICAgICBhd2FpdCBleGVjdXRlKHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2V0SXNEZWxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xuXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLmlkICYmICFpc0RlbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChhdWN0aW9uU2VsZWN0b3IuaWQpIHtcbiAgICAgICAgICAgICAgICBzZXROYW1lKGF1Y3Rpb25TZWxlY3Rvci5uYW1lKTtcbiAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihhdWN0aW9uU2VsZWN0b3IuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIHNldEluaXRpYWxWYWx1ZShhdWN0aW9uU2VsZWN0b3IuaW5pdGlhbF92YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZXhlY3V0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1Y3Rpb24vJHtwYXJhbXMuaWR9YCwge30pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEF1Y3Rpb24ocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFthdWN0aW9uU2VsZWN0b3JdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChjbGVhckF1Y3Rpb24oKSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmb3JtTWFpbldyYXBwZXInPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjYXJkIGZvcm0tY2FyZCcgb25TdWJtaXQ9e2hhbmRsZU9uc3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aDI+4pyP77iPIEF1Y3Rpb24gTWFuYWdtZW50PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VXcmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F1Y3Rpb25TZWxlY3Rvci5waWN0dXJlfSBhbHQ9J0F1Y3Rpb24gaW1hZ2UnIGNsYXNzTmFtZT0naW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTmFtZSAoKiknXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhdWN0aW9uIG5hbWUnXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNldERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBhdWN0aW9uIGRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5pdGlhbFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0SW5pdGlhbFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW5pdGlhbCB2YWx1ZSAoKiknXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGF1Y3Rpb24gaW5pdGlhbCB2YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc05ld31cbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9J2hpbnQtbWVzc2FnZSBjZW50ZXInPvCfmqggQW4gZXJyb3IgaGFzIG9jdXJyZWQ8L3NwYW4+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgeyFpc05ldyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J0RlbGV0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gZGVsZXRlLWJ1dHRvbiAke2lzTG9hZGluZyAmJiAnbG9hZGluZyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J1N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBwcmltYXJ5ICR7aXNMb2FkaW5nICYmICdsb2FkaW5nJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEF1Y3Rpb25NYW5hZ21lbnRDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9JbnB1dCc7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBcGknO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9saXN0LmNzcyc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbS9janMvcmVhY3Qtcm91dGVyLWRvbS5taW4nO1xuXG5jb25zdCBVc2VyQXVjdGlvbkNvbXBvbmVudCA9ICh7IHVzZXJfaWQgfSkgPT4ge1xuICAgIGNvbnN0IGJpZCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgZXJyb3IsIGV4ZWN1dGUgfSA9IHVzZUFwaSgpO1xuXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICAgIGxldCBwYXJhbXMgPSB1c2VQYXJhbXMoKTtcblxuICAgIGNvbnN0IGhhbmRsZU9uc3VibWl0ID0gYXN5bmMgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCtiaWQuY3VycmVudC52YWx1ZSA8PSBkYXRhLmxhc3RfYmlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBleGVjdXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYmlkYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgYmlkOiBiaWQuY3VycmVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICBhdWN0aW9uX2lkOiBkYXRhLmlkLFxuICAgICAgICAgICAgICAgIHVzZXJfaWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG5cbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuaWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdWN0aW9uLyR7cGFyYW1zLmlkfWAsIHt9KTtcbiAgICAgICAgfVxuICAgIH0sIFtwYXJhbXMuaWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nZm9ybU1haW5XcmFwcGVyJz5cbiAgICAgICAgICAgIHt0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RXcmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPSdsaXN0SXRlbSBjYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZVdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnBpY3R1cmV9IGFsdD0nQXVjdGlvbiBpbWFnZScgY2xhc3NOYW1lPSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1EZXNjcmlwdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntkYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntkYXRhLmxhc3RfYmlkfeKCrDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPbnN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHJlZj17YmlkfSBsYWJlbD0nQmlkJyBwbGFjZWhvbGRlcj0nRW50ZXIgYSBCaWQnIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT0naGludC1tZXNzYWdlIGNlbnRlcic+8J+aqCBBbiBlcnJvciBoYXMgb2N1cnJlZDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J0JpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIHByaW1hcnkgJHtpc0xvYWRpbmcgJiYgJ2xvYWRpbmcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFVzZXJBdWN0aW9uQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwge21lbW8sIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdWN0aW9uTWFuYWdtZW50IGZyb20gXCIuL0F1Y3Rpb25NYW5hZ21lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgVXNlckF1Y3Rpb24gZnJvbSBcIi4vVXNlckF1Y3Rpb24uY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBsb2dnZWRVc2VyU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc2VsZWN0b3JzL2xvZ2dlZFVzZXJcIjtcblxuXG5jb25zdCBFbnRyeVBvaW50Q29tcG9uZW50ID0gKCk9PiB7XG5cbiAgICBjb25zdCBsb2dnZWRVc2VyID0gdXNlU2VsZWN0b3IobG9nZ2VkVXNlclNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobG9nZ2VkVXNlci5yb2xlcykgJiYgbG9nZ2VkVXNlci5yb2xlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2dnZWRVc2VyLnJvbGVzLnNvbWUoKHJvbGUpID0+IHJvbGUgPT09ICdBRE1JTklTVFJBVE9SJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCBbbG9nZ2VkVXNlcl0pO1xuXG4gICAgcmV0dXJuIGlzQWRtaW4/IDxBdWN0aW9uTWFuYWdtZW50Lz4gOiA8VXNlckF1Y3Rpb24gIHVzZXJfaWQ9e2xvZ2dlZFVzZXIuaWR9Lz5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVudHJ5UG9pbnRDb21wb25lbnQpOyIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0JztcblxuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQXBpJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2xpc3QuY3NzJztcblxuY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hdWN0aW9uJztcblxuY29uc3QgQXVjdGlvbnNMaXN0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciwgZXhlY3V0ZSB9ID0gdXNlQXBpKCk7XG5cbiAgICBjb25zdCBxdWVyeU5hbWUgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVFbnRlciA9IChldikgPT4ge1xuICAgICAgICBpZiAoZXYuY2hhckNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBoYW5kbGVTZWFyY2goKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIGxldCB1bHJXaXRoUGFyYW1zID0gdXJsO1xuXG4gICAgICAgIGlmIChxdWVyeU5hbWUuY3VycmVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHVscldpdGhQYXJhbXMgKz0gYD9uYW1lPSR7cXVlcnlOYW1lLmN1cnJlbnQudmFsdWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4ZWN1dGUodWxyV2l0aFBhcmFtcywge30pO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBleGVjdXRlKHVybCwge30pO1xuICAgIH0sIFtleGVjdXRlXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2xpc3RNYWluV3JhcHBlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyV3JhcHBlcic+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17cXVlcnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0J1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGJ5IG5hbWUnXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUVudGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PvCflI08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPExpc3QgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGVycm9yPXtlcnJvcn0gZGF0YT17ZGF0YX0gaXRlbT17Q2FyZH0gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEF1Y3Rpb25zTGlzdENvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJdGVtQ2FyZCBmcm9tICcuLi9JdGVtQ2FyZCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IENhcmRDb21wb25lbnQgPSAoeyBpZCwgbmFtZSwgcGljdHVyZSwgZGVzY3JpcHRpb24sIGxhc3RfYmlkIH0pID0+IHtcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tDYXJkID0gKCkgPT4gaGlzdG9yeS5wdXNoKGAvYXVjdGlvbnMvJHtpZH1gKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJdGVtQ2FyZCB0aXRsZT17bmFtZX0gcGljdHVyZT17cGljdHVyZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSB2YWx1ZT17bGFzdF9iaWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2FyZH0gLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDYXJkQ29tcG9uZW50KTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSBcIi4vQXVjdGlvbnNMaXN0LmNvbXBvbmVudFwiOyIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0JztcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFwaSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9saXN0LmNzcyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ2dlZFVzZXJTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9sb2dnZWRVc2VyJztcblxuY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iaWQvdXNlcnMnO1xuXG5jb25zdCBCaWRzTGlzdENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgZXJyb3IsIGV4ZWN1dGUgfSA9IHVzZUFwaSgpO1xuXG4gICAgY29uc3QgbG9nZ2VkVXNlciA9IHVzZVNlbGVjdG9yKGxvZ2dlZFVzZXJTZWxlY3Rvcik7XG5cbiAgICBjb25zdCBnZXRCaXRzID0gdXNlQ2FsbGJhY2soKCkgPT4gbG9nZ2VkVXNlci5pZCAmJiBleGVjdXRlKGAke3VybH0vJHtsb2dnZWRVc2VyLmlkfWAsIHt9KSwgW1xuICAgICAgICBleGVjdXRlLFxuICAgICAgICBsb2dnZWRVc2VyLmlkLFxuICAgIF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0Qml0cygpO1xuICAgIH0sIFtnZXRCaXRzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2xpc3RNYWluV3JhcHBlcic+XG4gICAgICAgICAgICA8TGlzdCBpc0xvYWRpbmc9e2lzTG9hZGluZ30gZXJyb3I9e2Vycm9yfSBkYXRhPXtkYXRhfSBpdGVtPXtDYXJkfSBnZXRCaXRzPXtnZXRCaXRzfSAvPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQmlkc0xpc3RDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBcGknO1xuaW1wb3J0IEl0ZW1DYXJkIGZyb20gJy4uL0l0ZW1DYXJkJztcblxuY29uc3QgQ2FyZENvbXBvbmVudCA9ICh7IGlkLCB2YWx1ZSwgYXVjdGlvbiwgZ2V0Qml0cyB9KSA9PiB7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZXhlY3V0ZSB9ID0gdXNlQXBpKCk7XG5cbiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBhd2FpdCBleGVjdXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYmlkLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgICAgICBpZiAodHlwZW9mIGdldEJpdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGdldEJpdHMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SXRlbUNhcmRcbiAgICAgICAgICAgIHRpdGxlPXthdWN0aW9uLm5hbWV9XG4gICAgICAgICAgICBwaWN0dXJlPXthdWN0aW9uLnBpY3R1cmV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17YXVjdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHZhbHVlPXtgTXkgYml0ICR7dmFsdWV94oKsICB8IEN1cnJlbnQgYml0ICR7YXVjdGlvbi5sYXN0X2JpZH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHNwYW4+8J+aqCBBbiBlcnJvciBoYXMgb2N1cnJlZDwvc3Bhbj59XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ1dHRvbiAke2lzTG9hZGluZyAmJiAnbG9hZGluZyd9YH0gZGlzYWJsZWQ9e2lzTG9hZGluZ30gb25DbGljaz17aGFuZGxlQ2FuY2VsfT5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJy4uLicgOiAnQ2FuY2VsJ31cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0l0ZW1DYXJkPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENhcmRDb21wb25lbnQpO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9CaWRzTGlzdC5jb21wb25lbnRcIjsiLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dnZWRVc2VyIGZyb20gJy4vTG9nZ2VkVXNlci5jb21wb25lbnQnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51LmNvbXBvbmVudCc7XG5cbmNvbnN0IEhlYWRlckNvbXBvbmVudCA9ICh7IGxvZ2dlZFVzZXIsIHNpZ25JblBhdGggfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JyYW5kJz5cbiAgICAgICAgICAgICAgICA8aDE+8J+SuCBBdWN0aW9ucyE8L2gxPlxuICAgICAgICAgICAgICAgIDxMb2dnZWRVc2VyIGVtYWlsPXtsb2dnZWRVc2VyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TWVudSBzaWduSW5QYXRoPXtzaWduSW5QYXRofSAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIZWFkZXJDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFwaSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNldExvZ2dlZFVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2xvZ2dlZFVzZXInO1xuXG5jb25zdCBMb2dnZWRVc2VyQ29tcG9uZW50ID0gKHsgZW1haWwgfSkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBleGVjdXRlLCBlcnJvciB9ID0gdXNlQXBpKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZXhlY3V0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzLyR7ZW1haWx9YCwge30pO1xuICAgIH0sIFtleGVjdXRlXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2dnZWRVc2VyKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRhXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dCBsYXJnZSc+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBoZWlnaHQ9JzEycHgnIHdpZHRoPScxMDBweCcgLz5cbiAgICAgICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPScvJz7wn5qoIEFuIGVycm9yIGhhcyBvY3VycmVkLCB0cnkgYWdhaW48L2E+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIGDwn6eR8J+PvOKAjfCfjqggJHtkYXRhLmRpc3BsYXlOYW1lfWBcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKExvZ2dlZFVzZXJDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudUl0ZW1BdWN0aW9ucyBmcm9tICcuL01lbnVJdGVtQXVjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTWVudUNvbXBvbmVudCA9ICh7IHNpZ25JblBhdGggfSkgPT4ge1xuICAgIGNvbnN0IE1lbnVJdGVtcyA9IHVzZU1lbW8oXG4gICAgICAgICgpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nPkF1Y3Rpb25zPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbUF1Y3Rpb25zIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17c2lnbkluUGF0aH0+U2lnbiBvdXQ8L2E+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKSxcbiAgICAgICAgW11cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdtZW51Jz57TWVudUl0ZW1zfTwvbmF2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J21lbnUtY29sbGFwc2UnPlxuICAgICAgICAgICAgICAgIDxkZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT7wn5OaIE1lbnU8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcyc+e01lbnVJdGVtc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oTWVudUNvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9nZ2VkVXNlclNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2xvZ2dlZFVzZXInO1xuXG5jb25zdCBNZW51SXRlbUF1Y3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSB1c2VTZWxlY3Rvcihsb2dnZWRVc2VyU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgaXNBZG1pbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2dnZWRVc2VyLnJvbGVzKSAmJiBsb2dnZWRVc2VyLnJvbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlZFVzZXIucm9sZXMuc29tZSgocm9sZSkgPT4gcm9sZSA9PT0gJ0FETUlOSVNUUkFUT1InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtsb2dnZWRVc2VyXSk7XG5cbiAgICByZXR1cm4gaXNBZG1pbiA/IDxMaW5rIHRvPScvY3JlYXRlQXVjdGlvbnMnPiBDcmVhdGUgYXVjdGlvbnMgPC9MaW5rPiA6IDxMaW5rIHRvPScvbXlCaWRzJz5NeSBiaWRzPC9MaW5rPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oTWVudUl0ZW1BdWN0aW9ucyk7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gXCIuL0hlYWRlci5jb21wb25lbnRcIjsiLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcblxuY29uc3QgSW5wdXRDb21wb25lbnQgPSAoeyBpZCA9IE1hdGgucmFuZG9tKCksIGxhYmVsLCBpc0xvYWRpbmcsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtQ29udHJvbGxlcic+XG4gICAgICAgICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCcgaHRtbEZvcj17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVmPXtyZWZ9IGNsYXNzTmFtZT0naW5wdXQnIGlkPXtpZH0gey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PScxMnB4JyB3aWR0aD0nNDAlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PSczMHB4JyB3aWR0aD0nMTAwJScgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKGZvcndhcmRSZWYoSW5wdXRDb21wb25lbnQpKTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9JbnB1dC5jb21wb25lbnQnOyIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDYXJkQ29tcG9uZW50ID0gKHsgdGl0bGUsIHBpY3R1cmUsIGRlc2NyaXB0aW9uLCB2YWx1ZSwgb25DbGljaywgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrQ2FyZCA9ICgpID0+IHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nICYmIG9uQ2xpY2soKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ2FyZH0gY2xhc3NOYW1lPSdsaXN0SXRlbSBjYXJkJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZVdyYXBwZXInPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWN0dXJlfSBhbHQ9J0F1Y3Rpb24gaW1hZ2UnIGNsYXNzTmFtZT0naW1hZ2UnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtRGVzY3JpcHRpb24nPlxuICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxoMz57dmFsdWV94oKsPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ2FyZENvbXBvbmVudCk7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gXCIuL0l0ZW1DYXJkLmNvbXBvbmVudFwiOyIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xuXG5jb25zdCBMaXN0Q29tcG9uZW50ID0gKHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZywgaXRlbTogSXRlbSwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0V3JhcHBlcic+XG4gICAgICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdoaW50LW1lc3NhZ2UnPvCfmqggQW4gZXJyb3IgaGFzIG9jY3VyZWRkPC9zcGFuPlxuICAgICAgICAgICAgKSA6IEFycmF5LmlzQXJyYXkoZGF0YSkgJiYgIWlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICBkYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKChpdGVtKSA9PiA8SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSB7Li4ucHJvcHN9IC8+KVxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGludC1tZXNzYWdlJz7wn5ixIEVtcHR5Li48L3NwYW4+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gY291bnQ9ezZ9IGNsYXNzTmFtZT0nY2FyZCcgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKExpc3RDb21wb25lbnQpO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9MaXN0LmNvbXBvbmVudFwiOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGZldGNoQXBpID0gYXN5bmMgKHVybCwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcblxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwic2lnbk91dFwiO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwaSA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgY29uc3QgZXhlY3V0ZSA9IGFzeW5jICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHtkYXRhLCBzdWNjZXNzfSA9IGF3YWl0IGZldGNoQXBpKHVybCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGlmKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFUlJPUicpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBkYXRhLFxuICAgICAgICBleGVjdXRlOiB1c2VDYWxsYmFjayhleGVjdXRlLCBbXSlcbiAgICB9O1xufTsiLCJjb25zdCByb3VuZCA9IChudW1iZXIpID0+IE1hdGgucm91bmQobnVtYmVyICogMTAwKSAvIDEwMDtcblxuY29uc3QgbW9uaXRvclJlZHVjZXJFbmhhbmNlciA9IChjcmVhdGVTdG9yZSkgPT4gKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpID0+IHtcbiAgICBjb25zdCBtb25pdG9yZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgICAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgY29uc3QgZGlmZiA9IHJvdW5kKGVuZCAtIHN0YXJ0KTtcblxuICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwcm9jZXNzIHRpbWU6JywgZGlmZik7XG5cbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH07XG5cbiAgICByZXR1cm4gY3JlYXRlU3RvcmUobW9uaXRvcmVkUmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb25pdG9yUmVkdWNlckVuaGFuY2VyO1xuIiwiY29uc3QgbG9nZ2VyID0gKHN0b3JlKSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUuZ3JvdXAoYWN0aW9uLnR5cGUpO1xuICAgIGNvbnNvbGUuaW5mbygnZGlzcGF0Y2hpbmcnLCBhY3Rpb24pO1xuICAgIGxldCByZXN1bHQgPSBuZXh0KGFjdGlvbik7XG4gICAgY29uc29sZS5sb2coJ25leHQgc3RhdGUnLCBzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiIsImltcG9ydCB7IFNFVF9BVUNUSU9OLCBDTEVBUl9BVUNUSU9OIH0gZnJvbSAnLi4vYWN0aW9ucy9hdWN0aW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIG5hbWU6JycsXG4gICAgICAgIGRlc2NyaXB0aW9uOicnLFxuICAgICAgICBpbml0aWFsX3ZhbHVlOjAsXG4gICAgICAgIHBpY3R1cmU6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvaW1hZ2VzL2FydC5zdmcnXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdG9yZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIENMRUFSX0FVQ1RJT046IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RvcmUsXG4gICAgICAgICAgICAgICAgZGF0YTogaW5pdGlhbFN0YXRlLmRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNlIFNFVF9BVUNUSU9OOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdG9yZSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0b3JlLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLmF1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmU6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAvaW1hZ2VzL2FydC5zdmcnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgbG9nZ2VkVXNlciBmcm9tICcuL2xvZ2dlZFVzZXInO1xuaW1wb3J0IGF1Y3Rpb24gZnJvbSAnLi9hdWN0aW9uJztcblxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgbG9nZ2VkVXNlciwgYXVjdGlvbiB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJzO1xuIiwiaW1wb3J0IHsgU0VUX0xPR0dFRF9VU0VSIH0gZnJvbSAnLi4vYWN0aW9ucy9sb2dnZWRVc2VyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIGRpc3BsYXlOYW1lOicnLFxuICAgICAgICBlbWFpbDonJyxcbiAgICAgICAgcm9sZXM6W11cbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0b3JlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgU0VUX0xPR0dFRF9VU0VSOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdG9yZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24ucGF5bG9hZC5sb2dnZWRVc2VyLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY29uc3QgYXVjdGlvbkRhdGFTZWxlY3RvciA9IChzdG9yZSkgPT4gc3RvcmUuYXVjdGlvbi5kYXRhO1xuIiwiZXhwb3J0IGNvbnN0IGxvZ2dlZFVzZXJTZWxlY3RvciA9IChzdG9yZSkgPT4gc3RvcmUubG9nZ2VkVXNlci5kYXRhO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGxvZ2dlck1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlcy90b29scy9sb2dnZXInO1xuaW1wb3J0IG1vbml0b3JSZWR1Y2VyRW5oYW5jZXIgZnJvbSAnLi9taWRkbGV3YXJlcy9lbmhhbmNlcnMvbW9uaXRvclJlZHVjZXJFbmhhbmNlcic7XG5cbmltcG9ydCByb290UmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gICAgbGV0IG1pZGRsZXdhcmVzID0gW107XG4gICAgbGV0IG1pZGRsZXdhcmVzRW5oYW5jZXJzID0gW107XG5cbiAgICBtaWRkbGV3YXJlcy5wdXNoKGxvZ2dlck1pZGRsZXdhcmUpO1xuICAgIG1pZGRsZXdhcmVzRW5oYW5jZXJzLnB1c2gobW9uaXRvclJlZHVjZXJFbmhhbmNlcik7XG5cblxuICAgIGNvbnN0IG1pZGRsZXdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyk7XG4gICAgY29uc3QgZW5oYW5jZXJzID0gW21pZGRsZXdhcmVFbmhhbmNlciwgLi4ubWlkZGxld2FyZXNFbmhhbmNlcnNdO1xuXG4gICAgY29uc3QgY29tcG9zZWRFbmhhbmNlcnMgPSBjb21wb3NlKC4uLmVuaGFuY2Vycyk7XG5cbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VycywgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VkRW5oYW5jZXJzKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==