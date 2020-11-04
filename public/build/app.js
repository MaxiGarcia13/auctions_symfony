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
    return execute("".concat(url, "/").concat(loggedUser.id), {});
  }, [execute]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (loggedUser.id) {
      getBits();
    }
  }, [getBits, loggedUser.id]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWN0aW9ucy9hdWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hY3Rpb25zL2xvZ2dlZFVzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uTWFuYWdtZW50L0F1Y3Rpb25NYW5hZ21lbnQuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uTWFuYWdtZW50L1VzZXJBdWN0aW9uLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXVjdGlvbk1hbmFnbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uc0xpc3QvQXVjdGlvbnNMaXN0LmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQXVjdGlvbnNMaXN0L0NhcmQuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BdWN0aW9uc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmlkc0xpc3QvQmlkc0xpc3QuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CaWRzTGlzdC9DYXJkLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQmlkc0xpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9Mb2dnZWRVc2VyLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSGVhZGVyL01lbnUuY29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9IZWFkZXIvTWVudUl0ZW1BdWN0aW9ucy5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbnB1dC9JbnB1dC5jb21wb25lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0l0ZW1DYXJkL0l0ZW1DYXJkLmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSXRlbUNhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGlzdC9MaXN0LmNvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9va3MvdXNlQXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9taWRkbGV3YXJlcy9lbmhhbmNlcnMvbW9uaXRvclJlZHVjZXJFbmhhbmNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWlkZGxld2FyZXMvdG9vbHMvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWR1Y2Vycy9hdWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVkdWNlcnMvbG9nZ2VkVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VsZWN0b3JzL2F1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlbGVjdG9ycy9sb2dnZWRVc2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2xpc3QuY3NzIiwid2VicGFjazovLy8uL3B1YmxpYy9zdHlsZXMvZm9ybS5jc3MiXSwibmFtZXMiOlsiU0VUX0FVQ1RJT04iLCJDTEVBUl9BVUNUSU9OIiwic2V0QXVjdGlvbiIsImF1Y3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImNsZWFyQXVjdGlvbiIsIlNFVF9MT0dHRURfVVNFUiIsInNldExvZ2dlZFVzZXIiLCJsb2dnZWRVc2VyIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQXBwQ29tb25lbnQiLCJ1c2VNZW1vIiwiZGF0YXNldCIsInNpZ25JblBhdGgiLCJSZWFjdERvbSIsInJlbmRlciIsIkF1Y3Rpb25NYW5hZ21lbnRDb21wb25lbnQiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInBhcmFtcyIsInVzZVBhcmFtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhdWN0aW9uU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsImF1Y3Rpb25EYXRhU2VsZWN0b3IiLCJ1c2VBcGkiLCJpc0xvYWRpbmciLCJlcnJvciIsImV4ZWN1dGUiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImluaXRpYWxWYWx1ZSIsInNldEluaXRpYWxWYWx1ZSIsImlzRGVsZXRlZCIsInNldElzRGVsZXRlZCIsImlzTmV3IiwiaWQiLCJoYW5kbGVTZXROYW1lIiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNldERlc2NyaXB0aW9uIiwiaGFuZGxlU2V0SW5pdGlhbFZhbHVlIiwiaGFuZGxlT25zdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5pdGlhbF92YWx1ZSIsInBpY3R1cmUiLCJyZXNwb25zZSIsInB1c2giLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVEZWxldGUiLCJ1c2VFZmZlY3QiLCJtZW1vIiwiVXNlckF1Y3Rpb25Db21wb25lbnQiLCJ1c2VyX2lkIiwiYmlkIiwidXNlUmVmIiwiZGF0YSIsImN1cnJlbnQiLCJsYXN0X2JpZCIsImF1Y3Rpb25faWQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiRW50cnlQb2ludENvbXBvbmVudCIsImxvZ2dlZFVzZXJTZWxlY3RvciIsImlzQWRtaW4iLCJBcnJheSIsImlzQXJyYXkiLCJyb2xlcyIsInNvbWUiLCJyb2xlIiwiQXVjdGlvbnNMaXN0Q29tcG9uZW50IiwicXVlcnlOYW1lIiwiaGFuZGxlRW50ZXIiLCJjaGFyQ29kZSIsImhhbmRsZVNlYXJjaCIsInVscldpdGhQYXJhbXMiLCJDYXJkIiwiQ2FyZENvbXBvbmVudCIsImhhbmRsZUNsaWNrQ2FyZCIsIkJpZHNMaXN0Q29tcG9uZW50IiwiZ2V0Qml0cyIsInVzZUNhbGxiYWNrIiwiaGFuZGxlQ2FuY2VsIiwiSGVhZGVyQ29tcG9uZW50IiwiTG9nZ2VkVXNlckNvbXBvbmVudCIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJNZW51Q29tcG9uZW50IiwiTWVudUl0ZW1zIiwiTWVudUl0ZW1BdWN0aW9ucyIsIklucHV0Q29tcG9uZW50IiwicmVmIiwiTWF0aCIsInJhbmRvbSIsImxhYmVsIiwicHJvcHMiLCJmb3J3YXJkUmVmIiwidGl0bGUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJMaXN0Q29tcG9uZW50IiwiSXRlbSIsIml0ZW0iLCJtYXAiLCJmZXRjaEFwaSIsIm9wdGlvbnMiLCJmZXRjaCIsInN0YXR1cyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImpzb24iLCJzZXRJc0xvYWRpbmciLCJzZXRFcnJvciIsInNldERhdGEiLCJzdWNjZXNzIiwiRXJyb3IiLCJyb3VuZCIsIm51bWJlciIsIm1vbml0b3JSZWR1Y2VyRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJlbmhhbmNlciIsIm1vbml0b3JlZFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJuZXdTdGF0ZSIsImVuZCIsImRpZmYiLCJjb25zb2xlIiwibG9nIiwibG9nZ2VyIiwibmV4dCIsImdyb3VwIiwiaW5mbyIsInJlc3VsdCIsImdldFN0YXRlIiwiZ3JvdXBFbmQiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJwcmVsb2FkZWRTdGF0ZSIsIm1pZGRsZXdhcmVzIiwibWlkZGxld2FyZXNFbmhhbmNlcnMiLCJsb2dnZXJNaWRkbGV3YXJlIiwibWlkZGxld2FyZUVuaGFuY2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwiZW5oYW5jZXJzIiwiY29tcG9zZWRFbmhhbmNlcnMiLCJjb21wb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFdBQVcsR0FBRyxhQUFwQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUVQO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFFbkMsU0FBTztBQUNIQyxRQUFJLEVBQUVKLFdBREg7QUFFSEssV0FBTyxFQUFFO0FBQ0xGLGFBQU8sRUFBUEE7QUFESztBQUZOLEdBQVA7QUFNSCxDQVJNO0FBVUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQy9CRixRQUFJLEVBQUVIO0FBRHlCLEdBQVA7QUFBQSxDQUFyQixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQU8sSUFBTU0sZUFBZSxHQUFHLGlCQUF4QjtBQUVQO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFVBQUQsRUFBZ0I7QUFFekMsU0FBTztBQUNITCxRQUFJLEVBQUVHLGVBREg7QUFFSEYsV0FBTyxFQUFFO0FBQ0xJLGdCQUFVLEVB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QUFBLENBQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU01RCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNxSixjQUFELEVBQW9CO0FBQ3ZDLE1BQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBLE1BQUlDLG9CQUFvQixHQUFHLEVBQTNCO0FBRUFELGFBQVcsQ0FBQ25HLElBQVosQ0FBaUJxRyxrRUFBakI7QUFDQUQsc0JBQW9CLENBQUNwRyxJQUFyQixDQUEwQnlFLHNGQUExQjtBQUdBLE1BQU02QixrQkFBa0IsR0FBR0Msc0RBQWUsTUFBZixTQUFtQkosV0FBbkIsQ0FBM0I7QUFDQSxNQUFNSyxTQUFTLElBQUlGLGtCQUFKLFNBQTJCRixvQkFBM0IsQ0FBZjtBQUVBLE1BQU1LLGlCQUFpQixHQUFHQyw4Q0FBTyxNQUFQLDRCQUFXRixTQUFYLEVBQTFCO0FBRUEsTUFBTTVKLEtBQUssR0FBRzhILDBEQUFXLENBQUNzQixrREFBRCxFQUFlRSxjQUFmLEVBQStCTyxpQkFBL0IsQ0FBekI7QUFFQSxTQUFPN0osS0FBUDtBQUNILENBaEJEOztBQWtCZUMsNkVBQWYsRTs7Ozs7Ozs7Ozs7QUN6QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9BVUNUSU9OID0gJ1NFVF9BVUNUSU9OJztcbmV4cG9ydCBjb25zdCBDTEVBUl9BVUNUSU9OID0gJ0NMRUFSX0FVQ1RJT04nO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBhdWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBdWN0aW9uID0gKGF1Y3Rpb24pID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFVF9BVUNUSU9OLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBhdWN0aW9uXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckF1Y3Rpb24gPSAoKSA9PiAoe1xuICAgIHR5cGU6IENMRUFSX0FVQ1RJT04sXG59KTtcbiIsImV4cG9ydCBjb25zdCBTRVRfTE9HR0VEX1VTRVIgPSAnR0VUX0xPR0dFRF9VU0VSJztcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gbG9nZ2VkVXNlclxuICovXG5leHBvcnQgY29uc3Qgc2V0TG9nZ2VkVXNlciA9IChsb2dnZWRVc2VyKSA9PiB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfTE9HR0VEX1VTRVIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGxvZ2dlZFVzZXJcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBBdWN0aW9uTWFuYWdtZW50IGZyb20gJy4vY29tcG9uZW50cy9BdWN0aW9uTWFuYWdtZW50JztcbmltcG9ydCBBdWN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0F1Y3Rpb25zTGlzdCc7XG5pbXBvcnQgQmlkc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0JpZHNMaXN0JztcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge0Jyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuY29uc3QgZWxlbWVudCA9ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtY29tcG9uZW50LXJvb3QnKTtcblxuY29uc3QgQXBwQ29tb25lbnQgPSAoKT0+IHtcblxuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSB1c2VNZW1vKCgpPT4gZWxlbWVudC5kYXRhc2V0Wydsb2dnZWRVc2VyJ10pO1xuICAgIGNvbnN0IHNpZ25JblBhdGggPSB1c2VNZW1vKCgpPT4gZWxlbWVudC5kYXRhc2V0WydwYXRoTG9nT3V0J10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgbG9nZ2VkVXNlcj17bG9nZ2VkVXNlcn0gc2lnbkluUGF0aD17c2lnbkluUGF0aH0vPlxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL215Qmlkc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJpZHNMaXN0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NyZWF0ZUF1Y3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXVjdGlvbk1hbmFnbWVudCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdWN0aW9ucy86aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdWN0aW9uTWFuYWdtZW50IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdWN0aW9uc0xpc3QgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbn1cblxuUmVhY3REb20ucmVuZGVyKDxBcHBDb21vbmVudCAvPiwgZWxlbWVudCk7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9JbnB1dCc7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBcGknO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhdWN0aW9uRGF0YVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2F1Y3Rpb24nO1xuaW1wb3J0IHsgc2V0QXVjdGlvbiwgY2xlYXJBdWN0aW9uIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdWN0aW9uJztcblxuaW1wb3J0ICcuLi8uLi8uLi9wdWJsaWMvc3R5bGVzL2Zvcm0uY3NzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2Zvcm0uY3NzJztcblxuY29uc3QgQXVjdGlvbk1hbmFnbWVudENvbXBvbmVudCA9ICgpID0+IHtcbiAgICBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBsZXQgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgYXVjdGlvblNlbGVjdG9yID0gdXNlU2VsZWN0b3IoYXVjdGlvbkRhdGFTZWxlY3Rvcik7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yLCBleGVjdXRlIH0gPSB1c2VBcGkoKTtcblxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaW5pdGlhbFZhbHVlLCBzZXRJbml0aWFsVmFsdWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2lzRGVsZXRlZCwgc2V0SXNEZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGlzTmV3ID0gdXNlTWVtbygoKSA9PiB0eXBlb2YgcGFyYW1zLmlkICE9PSAnc3RyaW5nJywgW3BhcmFtcy5pZF0pO1xuXG4gICAgY29uc3QgaGFuZGxlU2V0TmFtZSA9IChldikgPT4gc2V0TmFtZShldi50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGhhbmRsZVNldERlc2NyaXB0aW9uID0gKGV2KSA9PiBzZXREZXNjcmlwdGlvbihldi50YXJnZXQudmFsdWUpO1xuICAgIGNvbnN0IGhhbmRsZVNldEluaXRpYWxWYWx1ZSA9IChldikgPT4gc2V0SW5pdGlhbFZhbHVlKGV2LnRhcmdldC52YWx1ZSk7XG5cbiAgICBjb25zdCBoYW5kbGVPbnN1Ym1pdCA9IGFzeW5jIChldikgPT4ge1xuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1Y3Rpb24nO1xuXG4gICAgICAgIGxldCBtZXRob2QgPSAnUE9TVCc7XG5cbiAgICAgICAgaWYgKCFpc05ldykge1xuICAgICAgICAgICAgdXJsICs9IGAvJHthdWN0aW9uU2VsZWN0b3IuaWR9YDtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdQVVQnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBleGVjdXRlKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGluaXRpYWxfdmFsdWU6ICtpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogYXVjdGlvblNlbGVjdG9yLnBpY3R1cmUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlzcGF0Y2goc2V0QXVjdGlvbihyZXNwb25zZSkpO1xuICAgICAgICBoaXN0b3J5LnB1c2goYC9hdWN0aW9ucy8ke3Jlc3BvbnNlLmlkfWApO1xuXG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1Y3Rpb24vJHthdWN0aW9uU2VsZWN0b3IuaWR9YDtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gJ0RFTEVURSc7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldElzRGVsZXRlZCh0cnVlKTtcbiAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGUodXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRJc0RlbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XG5cbiAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwYXJhbXMuaWQgJiYgIWlzRGVsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGF1Y3Rpb25TZWxlY3Rvci5pZCkge1xuICAgICAgICAgICAgICAgIHNldE5hbWUoYXVjdGlvblNlbGVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKGF1Y3Rpb25TZWxlY3Rvci5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgc2V0SW5pdGlhbFZhbHVlKGF1Y3Rpb25TZWxlY3Rvci5pbml0aWFsX3ZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBleGVjdXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXVjdGlvbi8ke3BhcmFtcy5pZH1gLCB7fSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QXVjdGlvbihyZXNwb25zZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW2F1Y3Rpb25TZWxlY3Rvcl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGNsZWFyQXVjdGlvbigpKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2Zvcm1NYWluV3JhcHBlcic+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2NhcmQgZm9ybS1jYXJkJyBvblN1Ym1pdD17aGFuZGxlT25zdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoMj7inI/vuI8gQXVjdGlvbiBNYW5hZ21lbnQ8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWFnZVdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXVjdGlvblNlbGVjdG9yLnBpY3R1cmV9IGFsdD0nQXVjdGlvbiBpbWFnZScgY2xhc3NOYW1lPSdpbWFnZScgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNldE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOYW1lICgqKSdcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGF1Y3Rpb24gbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGF1Y3Rpb24gZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbml0aWFsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXRJbml0aWFsVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbml0aWFsIHZhbHVlICgqKSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgYXVjdGlvbiBpbml0aWFsIHZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzTmV3fVxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxzcGFuIGNsYXNzTmFtZT0naGludC1tZXNzYWdlIGNlbnRlcic+8J+aqCBBbiBlcnJvciBoYXMgb2N1cnJlZDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgICAgICB7IWlzTmV3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nRGVsZXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ1dHRvbiBkZWxldGUtYnV0dG9uICR7aXNMb2FkaW5nICYmICdsb2FkaW5nJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nU3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uIHByaW1hcnkgJHtpc0xvYWRpbmcgJiYgJ2xvYWRpbmcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQXVjdGlvbk1hbmFnbWVudENvbXBvbmVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0JztcbmltcG9ydCB7IHVzZUFwaSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFwaSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2xpc3QuY3NzJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tL2Nqcy9yZWFjdC1yb3V0ZXItZG9tLm1pbic7XG5cbmNvbnN0IFVzZXJBdWN0aW9uQ29tcG9uZW50ID0gKHsgdXNlcl9pZCB9KSA9PiB7XG4gICAgY29uc3QgYmlkID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciwgZXhlY3V0ZSB9ID0gdXNlQXBpKCk7XG5cbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gICAgbGV0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuXG4gICAgY29uc3QgaGFuZGxlT25zdWJtaXQgPSBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoK2JpZC5jdXJyZW50LnZhbHVlIDw9IGRhdGEubGFzdF9iaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGV4ZWN1dGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9iaWRgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBiaWQ6IGJpZC5jdXJyZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGF1Y3Rpb25faWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcblxuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5pZCkge1xuICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1Y3Rpb24vJHtwYXJhbXMuaWR9YCwge30pO1xuICAgICAgICB9XG4gICAgfSwgW3BhcmFtcy5pZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmb3JtTWFpbldyYXBwZXInPlxuICAgICAgICAgICAge3R5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdFdyYXBwZXInPlxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9J2xpc3RJdGVtIGNhcmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlV3JhcHBlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucGljdHVyZX0gYWx0PSdBdWN0aW9uIGltYWdlJyBjbGFzc05hbWU9J2ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbURlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2RhdGEubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2RhdGEubGFzdF9iaWR94oKsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uc3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcmVmPXtiaWR9IGxhYmVsPSdCaWQnIHBsYWNlaG9sZGVyPSdFbnRlciBhIEJpZCcgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHNwYW4gY2xhc3NOYW1lPSdoaW50LW1lc3NhZ2UgY2VudGVyJz7wn5qoIEFuIGVycm9yIGhhcyBvY3VycmVkPC9zcGFuPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nQmlkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidXR0b24gcHJpbWFyeSAke2lzTG9hZGluZyAmJiAnbG9hZGluZyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oVXNlckF1Y3Rpb25Db21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7bWVtbywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1Y3Rpb25NYW5hZ21lbnQgZnJvbSBcIi4vQXVjdGlvbk1hbmFnbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCBVc2VyQXVjdGlvbiBmcm9tIFwiLi9Vc2VyQXVjdGlvbi5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ2dlZFVzZXJTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9zZWxlY3RvcnMvbG9nZ2VkVXNlclwiO1xuXG5cbmNvbnN0IEVudHJ5UG9pbnRDb21wb25lbnQgPSAoKT0+IHtcblxuICAgIGNvbnN0IGxvZ2dlZFVzZXIgPSB1c2VTZWxlY3Rvcihsb2dnZWRVc2VyU2VsZWN0b3IpO1xuXG4gICAgY29uc3QgaXNBZG1pbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2dnZWRVc2VyLnJvbGVzKSAmJiBsb2dnZWRVc2VyLnJvbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvZ2dlZFVzZXIucm9sZXMuc29tZSgocm9sZSkgPT4gcm9sZSA9PT0gJ0FETUlOSVNUUkFUT1InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFtsb2dnZWRVc2VyXSk7XG5cbiAgICByZXR1cm4gaXNBZG1pbj8gPEF1Y3Rpb25NYW5hZ21lbnQvPiA6IDxVc2VyQXVjdGlvbiAgdXNlcl9pZD17bG9nZ2VkVXNlci5pZH0vPlxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRW50cnlQb2ludENvbXBvbmVudCk7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQuY29tcG9uZW50JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL0xpc3QnO1xuXG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBcGknO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvbGlzdC5jc3MnO1xuXG5jb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2F1Y3Rpb24nO1xuXG5jb25zdCBBdWN0aW9uc0xpc3RDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIGRhdGEsIGVycm9yLCBleGVjdXRlIH0gPSB1c2VBcGkoKTtcblxuICAgIGNvbnN0IHF1ZXJ5TmFtZSA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZUVudGVyID0gKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi5jaGFyQ29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIGhhbmRsZVNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHVscldpdGhQYXJhbXMgPSB1cmw7XG5cbiAgICAgICAgaWYgKHF1ZXJ5TmFtZS5jdXJyZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdWxyV2l0aFBhcmFtcyArPSBgP25hbWU9JHtxdWVyeU5hbWUuY3VycmVudC52YWx1ZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhlY3V0ZSh1bHJXaXRoUGFyYW1zLCB7fSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUodXJsLCB7fSk7XG4gICAgfSwgW2V4ZWN1dGVdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nbGlzdE1haW5XcmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXJXcmFwcGVyJz5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtxdWVyeU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQnXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggYnkgbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+8J+UjTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGlzdCBpc0xvYWRpbmc9e2lzTG9hZGluZ30gZXJyb3I9e2Vycm9yfSBkYXRhPXtkYXRhfSBpdGVtPXtDYXJkfSAvPlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oQXVjdGlvbnNMaXN0Q29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEl0ZW1DYXJkIGZyb20gJy4uL0l0ZW1DYXJkJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgQ2FyZENvbXBvbmVudCA9ICh7IGlkLCBuYW1lLCBwaWN0dXJlLCBkZXNjcmlwdGlvbiwgbGFzdF9iaWQgfSkgPT4ge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgICBjb25zdCBoYW5kbGVDbGlja0NhcmQgPSAoKSA9PiBoaXN0b3J5LnB1c2goYC9hdWN0aW9ucy8ke2lkfWApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEl0ZW1DYXJkIHRpdGxlPXtuYW1lfSBwaWN0dXJlPXtwaWN0dXJlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IHZhbHVlPXtsYXN0X2JpZH0gb25DbGljaz17aGFuZGxlQ2xpY2tDYXJkfSAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENhcmRDb21wb25lbnQpO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9BdWN0aW9uc0xpc3QuY29tcG9uZW50XCI7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQuY29tcG9uZW50JztcbmltcG9ydCBMaXN0IGZyb20gJy4uL0xpc3QnO1xuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQXBpJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2xpc3QuY3NzJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbG9nZ2VkVXNlclNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL2xvZ2dlZFVzZXInO1xuXG5jb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2JpZC91c2Vycyc7XG5cbmNvbnN0IEJpZHNMaXN0Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciwgZXhlY3V0ZSB9ID0gdXNlQXBpKCk7XG5cbiAgICBjb25zdCBsb2dnZWRVc2VyID0gdXNlU2VsZWN0b3IobG9nZ2VkVXNlclNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGdldEJpdHMgPSB1c2VDYWxsYmFjaygoKSA9PiBleGVjdXRlKGAke3VybH0vJHtsb2dnZWRVc2VyLmlkfWAsIHt9KSwgW2V4ZWN1dGVdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChsb2dnZWRVc2VyLmlkKSB7XG4gICAgICAgICAgICBnZXRCaXRzKCk7XG4gICAgICAgIH1cbiAgICB9LCBbZ2V0Qml0cywgbG9nZ2VkVXNlci5pZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdsaXN0TWFpbldyYXBwZXInPlxuICAgICAgICAgICAgPExpc3QgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IGVycm9yPXtlcnJvcn0gZGF0YT17ZGF0YX0gaXRlbT17Q2FyZH0gZ2V0Qml0cz17Z2V0Qml0c30gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJpZHNMaXN0Q29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXBpIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQXBpJztcbmltcG9ydCBJdGVtQ2FyZCBmcm9tICcuLi9JdGVtQ2FyZCc7XG5cbmNvbnN0IENhcmRDb21wb25lbnQgPSAoeyBpZCwgdmFsdWUsIGF1Y3Rpb24sIGdldEJpdHMgfSkgPT4ge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IsIGV4ZWN1dGUgfSA9IHVzZUFwaSgpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gYXN5bmMgKGV2KSA9PiB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgYXdhaXQgZXhlY3V0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2JpZC8ke2lkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRCaXRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBnZXRCaXRzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEl0ZW1DYXJkXG4gICAgICAgICAgICB0aXRsZT17YXVjdGlvbi5uYW1lfVxuICAgICAgICAgICAgcGljdHVyZT17YXVjdGlvbi5waWN0dXJlfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2F1Y3Rpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICB2YWx1ZT17YE15IGJpdCAke3ZhbHVlfeKCrCAgfCBDdXJyZW50IGJpdCAke2F1Y3Rpb24ubGFzdF9iaWR9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Vycm9yICYmIDxzcGFuPvCfmqggQW4gZXJyb3IgaGFzIG9jdXJyZWQ8L3NwYW4+fVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidXR0b24gJHtpc0xvYWRpbmcgJiYgJ2xvYWRpbmcnfWB9IGRpc2FibGVkPXtpc0xvYWRpbmd9IG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH0+XG4gICAgICAgICAgICAgICAge2lzTG9hZGluZyA/ICcuLi4nIDogJ0NhbmNlbCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9JdGVtQ2FyZD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDYXJkQ29tcG9uZW50KTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSBcIi4vQmlkc0xpc3QuY29tcG9uZW50XCI7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nZ2VkVXNlciBmcm9tICcuL0xvZ2dlZFVzZXIuY29tcG9uZW50JztcbmltcG9ydCBNZW51IGZyb20gJy4vTWVudS5jb21wb25lbnQnO1xuXG5jb25zdCBIZWFkZXJDb21wb25lbnQgPSAoeyBsb2dnZWRVc2VyLCBzaWduSW5QYXRoIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmFuZCc+XG4gICAgICAgICAgICAgICAgPGgxPvCfkrggQXVjdGlvbnMhPC9oMT5cbiAgICAgICAgICAgICAgICA8TG9nZ2VkVXNlciBlbWFpbD17bG9nZ2VkVXNlcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1lbnUgc2lnbkluUGF0aD17c2lnbkluUGF0aH0gLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVhZGVyQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBcGknO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRMb2dnZWRVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9sb2dnZWRVc2VyJztcblxuY29uc3QgTG9nZ2VkVXNlckNvbXBvbmVudCA9ICh7IGVtYWlsIH0pID0+IHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgZXhlY3V0ZSwgZXJyb3IgfSA9IHVzZUFwaSgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGV4ZWN1dGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC91c2Vycy8ke2VtYWlsfWAsIHt9KTtcbiAgICB9LCBbZXhlY3V0ZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9nZ2VkVXNlcihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQgbGFyZ2UnPlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PScxMnB4JyB3aWR0aD0nMTAwcHgnIC8+XG4gICAgICAgICAgICApIDogZXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nLyc+8J+aqCBBbiBlcnJvciBoYXMgb2N1cnJlZCwgdHJ5IGFnYWluPC9hPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBg8J+nkfCfj7zigI3wn46oICR7ZGF0YS5kaXNwbGF5TmFtZX1gXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhMb2dnZWRVc2VyQ29tcG9uZW50KTtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVJdGVtQXVjdGlvbnMgZnJvbSAnLi9NZW51SXRlbUF1Y3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE1lbnVDb21wb25lbnQgPSAoeyBzaWduSW5QYXRoIH0pID0+IHtcbiAgICBjb25zdCBNZW51SXRlbXMgPSB1c2VNZW1vKFxuICAgICAgICAoKSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5BdWN0aW9uczwvTGluaz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1BdWN0aW9ucyAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NpZ25JblBhdGh9PlNpZ24gb3V0PC9hPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICksXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbWVudSc+e01lbnVJdGVtc308L25hdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSdtZW51LWNvbGxhcHNlJz5cbiAgICAgICAgICAgICAgICA8ZGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+8J+TmiBNZW51PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbXMnPntNZW51SXRlbXN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1lbnVDb21wb25lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGxvZ2dlZFVzZXJTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9sb2dnZWRVc2VyJztcblxuY29uc3QgTWVudUl0ZW1BdWN0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBsb2dnZWRVc2VyID0gdXNlU2VsZWN0b3IobG9nZ2VkVXNlclNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobG9nZ2VkVXNlci5yb2xlcykgJiYgbG9nZ2VkVXNlci5yb2xlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2dnZWRVc2VyLnJvbGVzLnNvbWUoKHJvbGUpID0+IHJvbGUgPT09ICdBRE1JTklTVFJBVE9SJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCBbbG9nZ2VkVXNlcl0pO1xuXG4gICAgcmV0dXJuIGlzQWRtaW4gPyA8TGluayB0bz0nL2NyZWF0ZUF1Y3Rpb25zJz4gQ3JlYXRlIGF1Y3Rpb25zIDwvTGluaz4gOiA8TGluayB0bz0nL215Qmlkcyc+TXkgYmlkczwvTGluaz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKE1lbnVJdGVtQXVjdGlvbnMpO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9IZWFkZXIuY29tcG9uZW50XCI7IiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5cbmNvbnN0IElucHV0Q29tcG9uZW50ID0gKHsgaWQgPSBNYXRoLnJhbmRvbSgpLCBsYWJlbCwgaXNMb2FkaW5nLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybUNvbnRyb2xsZXInPlxuICAgICAgICAgICAgeyFpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnIGh0bWxGb3I9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVmfSBjbGFzc05hbWU9J2lucHV0JyBpZD17aWR9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIGhlaWdodD0nMTJweCcgd2lkdGg9JzQwJScgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIGhlaWdodD0nMzBweCcgd2lkdGg9JzEwMCUnIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhmb3J3YXJkUmVmKElucHV0Q29tcG9uZW50KSk7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vSW5wdXQuY29tcG9uZW50JzsiLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2FyZENvbXBvbmVudCA9ICh7IHRpdGxlLCBwaWN0dXJlLCBkZXNjcmlwdGlvbiwgdmFsdWUsIG9uQ2xpY2ssIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja0NhcmQgPSAoKSA9PiB0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJyAmJiBvbkNsaWNrKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBvbkNsaWNrPXtoYW5kbGVDbGlja0NhcmR9IGNsYXNzTmFtZT0nbGlzdEl0ZW0gY2FyZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VXcmFwcGVyJz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljdHVyZX0gYWx0PSdBdWN0aW9uIGltYWdlJyBjbGFzc05hbWU9J2ltYWdlJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbURlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8aDM+e3ZhbHVlfeKCrDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vKENhcmRDb21wb25lbnQpO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tIFwiLi9JdGVtQ2FyZC5jb21wb25lbnRcIjsiLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcblxuY29uc3QgTGlzdENvbXBvbmVudCA9ICh7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcsIGl0ZW06IEl0ZW0sIC4uLnByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdFdyYXBwZXInPlxuICAgICAgICAgICAge2Vycm9yID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGludC1tZXNzYWdlJz7wn5qoIEFuIGVycm9yIGhhcyBvY2N1cmVkZDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBBcnJheS5pc0FycmF5KGRhdGEpICYmICFpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgZGF0YS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoaXRlbSkgPT4gPEl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gey4uLnByb3BzfSAvPilcbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hpbnQtbWVzc2FnZSc+8J+YsSBFbXB0eS4uPC9zcGFuPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGNvdW50PXs2fSBjbGFzc05hbWU9J2NhcmQnIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhMaXN0Q29tcG9uZW50KTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSBcIi4vTGlzdC5jb21wb25lbnRcIjsiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFwaSA9IGFzeW5jICh1cmwsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgb3B0aW9ucyk7XG5cbiAgICBpZihyZXNwb25zZS5zdGF0dXMgPT09IDQwMykgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInNpZ25PdXRcIjtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBcGkgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcblxuICAgIGNvbnN0IGV4ZWN1dGUgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuXG4gICAgICAgICAgICBjb25zdCB7ZGF0YSwgc3VjY2Vzc30gPSBhd2FpdCBmZXRjaEFwaSh1cmwsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBpZighc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRVJST1InKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZXhlY3V0ZTogdXNlQ2FsbGJhY2soZXhlY3V0ZSwgW10pXG4gICAgfTtcbn07IiwiY29uc3Qgcm91bmQgPSAobnVtYmVyKSA9PiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDA7XG5cbmNvbnN0IG1vbml0b3JSZWR1Y2VyRW5oYW5jZXIgPSAoY3JlYXRlU3RvcmUpID0+IChyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSA9PiB7XG4gICAgY29uc3QgbW9uaXRvcmVkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgY29uc3QgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGRpZmYgPSByb3VuZChlbmQgLSBzdGFydCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcHJvY2VzcyB0aW1lOicsIGRpZmYpO1xuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKG1vbml0b3JlZFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uaXRvclJlZHVjZXJFbmhhbmNlcjtcbiIsImNvbnN0IGxvZ2dlciA9IChzdG9yZSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmdyb3VwKGFjdGlvbi50eXBlKTtcbiAgICBjb25zb2xlLmluZm8oJ2Rpc3BhdGNoaW5nJywgYWN0aW9uKTtcbiAgICBsZXQgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xuICAgIGNvbnNvbGUubG9nKCduZXh0IHN0YXRlJywgc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXI7XG4iLCJpbXBvcnQgeyBTRVRfQVVDVElPTiwgQ0xFQVJfQVVDVElPTiB9IGZyb20gJy4uL2FjdGlvbnMvYXVjdGlvbic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBuYW1lOicnLFxuICAgICAgICBkZXNjcmlwdGlvbjonJyxcbiAgICAgICAgaW5pdGlhbF92YWx1ZTowLFxuICAgICAgICBwaWN0dXJlOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ltYWdlcy9hcnQuc3ZnJ1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RvcmUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBDTEVBUl9BVUNUSU9OOiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0b3JlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGluaXRpYWxTdGF0ZS5kYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBTRVRfQVVDVElPTjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RvcmUsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAuLi5zdG9yZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5hdWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2ltYWdlcy9hcnQuc3ZnJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfVxufTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGxvZ2dlZFVzZXIgZnJvbSAnLi9sb2dnZWRVc2VyJztcbmltcG9ydCBhdWN0aW9uIGZyb20gJy4vYXVjdGlvbic7XG5cbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7IGxvZ2dlZFVzZXIsIGF1Y3Rpb24gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VycztcbiIsImltcG9ydCB7IFNFVF9MT0dHRURfVVNFUiB9IGZyb20gJy4uL2FjdGlvbnMvbG9nZ2VkVXNlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBkaXNwbGF5TmFtZTonJyxcbiAgICAgICAgZW1haWw6JycsXG4gICAgICAgIHJvbGVzOltdXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdG9yZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNFVF9MT0dHRURfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RvcmUsXG4gICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQubG9nZ2VkVXNlcixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGF1Y3Rpb25EYXRhU2VsZWN0b3IgPSAoc3RvcmUpID0+IHN0b3JlLmF1Y3Rpb24uZGF0YTtcbiIsImV4cG9ydCBjb25zdCBsb2dnZWRVc2VyU2VsZWN0b3IgPSAoc3RvcmUpID0+IHN0b3JlLmxvZ2dlZFVzZXIuZGF0YTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBsb2dnZXJNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZXMvdG9vbHMvbG9nZ2VyJztcbmltcG9ydCBtb25pdG9yUmVkdWNlckVuaGFuY2VyIGZyb20gJy4vbWlkZGxld2FyZXMvZW5oYW5jZXJzL21vbml0b3JSZWR1Y2VyRW5oYW5jZXInO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICAgIGxldCBtaWRkbGV3YXJlcyA9IFtdO1xuICAgIGxldCBtaWRkbGV3YXJlc0VuaGFuY2VycyA9IFtdO1xuXG4gICAgbWlkZGxld2FyZXMucHVzaChsb2dnZXJNaWRkbGV3YXJlKTtcbiAgICBtaWRkbGV3YXJlc0VuaGFuY2Vycy5wdXNoKG1vbml0b3JSZWR1Y2VyRW5oYW5jZXIpO1xuXG5cbiAgICBjb25zdCBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpO1xuICAgIGNvbnN0IGVuaGFuY2VycyA9IFttaWRkbGV3YXJlRW5oYW5jZXIsIC4uLm1pZGRsZXdhcmVzRW5oYW5jZXJzXTtcblxuICAgIGNvbnN0IGNvbXBvc2VkRW5oYW5jZXJzID0gY29tcG9zZSguLi5lbmhhbmNlcnMpO1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcnMsIHByZWxvYWRlZFN0YXRlLCBjb21wb3NlZEVuaGFuY2Vycyk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=