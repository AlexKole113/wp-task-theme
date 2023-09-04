/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/Buttons/ButtonMenu.js":
/*!*******************************************!*\
  !*** ../components/Buttons/ButtonMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var ButtonMenu = function ButtonMenu(_ref) {
  var deleteButton = _ref.deleteButton,
      buttonType = _ref.buttonType,
      setButtonType = _ref.setButtonType,
      linkUrl = _ref.linkUrl,
      setButtonUrl = _ref.setButtonUrl;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "button-menu"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'button-options-section'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: '#',
    onClick: function onClick(e) {
      e.preventDefault();
      deleteButton();
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Delete button"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "trash-alt",
    className: "svg-inline--fa fa-trash-alt fa-w-14",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    fill: "currentColor",
    d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'button-url-section'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: 'title-menu'
  }, "URL"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    value: linkUrl,
    onChange: function onChange(e) {
      setButtonUrl(e.target.value);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: 'button-type-section'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: 'title-menu'
  }, "Button Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: buttonType === 'hero-video' ? 'active-button-type' : null,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setButtonType('hero-video');
    }
  }, " Hero video"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: buttonType === 'success-green' ? 'active-button-type' : null,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setButtonType('success-green');
    }
  }, " Success green"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: buttonType === 'success-white' ? 'active-button-type' : null,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setButtonType('success-white');
    }
  }, " Success white"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    className: buttonType === 'success-big' ? 'active-button-type' : null,
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setButtonType('success-big');
    }
  }, " Success big")));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonMenu);

/***/ }),

/***/ "../components/Buttons/ButtonTheme.js":
/*!********************************************!*\
  !*** ../components/Buttons/ButtonTheme.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonMenu */ "../components/Buttons/ButtonMenu.js");


var RichText = wp.blockEditor.RichText;

var ButtonTheme = function ButtonTheme(_ref) {
  var text = _ref.text,
      setButtonText = _ref.setButtonText,
      linkUrl = _ref.linkUrl,
      setButtonUrl = _ref.setButtonUrl,
      deleteButton = _ref.deleteButton,
      buttonType = _ref.buttonType,
      setButtonType = _ref.setButtonType;
  var types = ['hero-video', 'success-white', 'success-green', 'success-big'];
  if (!types.includes(buttonType)) return null;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-button-with-menu"
  }, buttonType === 'hero-video' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "theme-button hero-video"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    width: "40",
    height: "30",
    viewBox: "0 0 40 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M38.9427 4.00767C38.4853 2.431 37.137 1.188 35.4267 0.766334C32.3243 3.82463e-07 19.887 0 19.887 0C19.887 0 7.44967 3.82463e-07 4.3473 0.766334C2.63702 1.188 1.28868 2.431 0.831277 4.00767C-5.92679e-08 6.86767 0 14.6667 0 14.6667C0 14.6667 -5.92679e-08 22.4657 0.831277 25.3257C1.28868 26.9023 2.63702 28.1453 4.3473 28.567C7.44967 29.3333 19.887 29.3333 19.887 29.3333C19.887 29.3333 32.3243 29.3333 35.4267 28.567C37.139 28.1453 38.4853 26.9023 38.9427 25.3257C39.774 22.4657 39.774 14.6667 39.774 14.6667C39.774 14.6667 39.774 6.86767 38.9427 4.00767ZM15.9096 21.0173V8.316L27.8418 14.6667L15.9096 21.0173Z",
    fill: "#109CF1"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "span",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setButtonText(text);
    },
    placeholder: 'button text...'
  })), buttonType === 'success-white' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "theme-button success-white"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "span",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setButtonText(text);
    },
    placeholder: 'button text...'
  })), buttonType === 'success-green' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "theme-button success"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "span",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setButtonText(text);
    },
    placeholder: 'button text...'
  })), buttonType === 'success-big' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "theme-button button-big success "
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "span",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setButtonText(text);
    },
    placeholder: 'button text...'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_ButtonMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    deleteButton: deleteButton,
    buttonType: buttonType,
    setButtonType: setButtonType,
    linkUrl: linkUrl,
    setButtonUrl: setButtonUrl
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonTheme);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return edit; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Buttons_ButtonTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Buttons/ButtonTheme */ "../components/Buttons/ButtonTheme.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var Fragment = wp.element.Fragment;



function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;
  var preTitle = attributes.preTitle,
      title = attributes.title,
      text = attributes.text,
      imgUrl = attributes.imgUrl,
      backGroundUrl = attributes.backGroundUrl,
      imageOrder = attributes.imageOrder,
      buttons = attributes.buttons;

  var toggleImageOrder = function toggleImageOrder() {
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      imageOrder: imageOrder === 'L' ? 'R' : 'L'
    }));
  }; //buttons


  var addButton = function addButton() {
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      buttons: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(buttons), [{
        text: '',
        linkUrl: '#',
        buttonType: 'success-green'
      }])
    }));
  };

  var _deleteButton = function deleteButton(buttonNum) {
    var newButtons = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(buttons);

    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      buttons: newButtons.filter(function (v, i) {
        return i !== buttonNum;
      })
    }));
  };

  var _setButtonText = function setButtonText(buttonNum, text) {
    var newButtons = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(buttons);

    newButtons[buttonNum].text = text;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      buttons: newButtons
    }));
  };

  var _setButtonUrl = function setButtonUrl(buttonNum, url) {
    var newButtons = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(buttons);

    newButtons[buttonNum].linkUrl = url;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      buttons: newButtons
    }));
  };

  var _setButtonType = function setButtonType(buttonNum, type) {
    var newButtons = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(buttons);

    newButtons[buttonNum].buttonType = type;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      buttons: newButtons
    }));
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Fragment, null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Background settings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref2) {
      var url = _ref2.url;
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        backGroundUrl: url
      }));
    },
    allowedTypes: ['image'],
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
        className: 'hero-background-image-editor',
        src: backGroundUrl !== null && backGroundUrl !== void 0 ? backGroundUrl : 'https://via.placeholder.com/250x125.png',
        onClick: open
      });
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("section", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["useBlockProps"])({
    className: 'second-section'
  }), {
    style: {
      backgroundImage: "url(".concat(backGroundUrl, ")")
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "second-section__group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "second-section-picture ".concat(imageOrder, "-order")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
    className: "change-picture-order",
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      toggleImageOrder();
    }
  }, imageOrder === 'L' ? "\u2192" : "\u2190"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("picture", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var url = _ref4.url;
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        imgUrl: url
      }));
    },
    allowedTypes: ['image'],
    render: function render(_ref5) {
      var open = _ref5.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
        className: 'second-section-background-image-editor',
        src: imgUrl !== null && imgUrl !== void 0 ? imgUrl : 'https://via.placeholder.com/600x400.png',
        onClick: open
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "second-section-text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("header", {
    className: "second-section-text__subtitle"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    tagName: "span",
    value: preTitle,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(preTitle) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        preTitle: preTitle
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editable text...')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h2", {
    className: "second-section-text__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    tagName: "span",
    value: title,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(title) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        title: title
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editable text...')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "second-section-text__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    tagName: "p",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        text: text
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editable text...')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("footer", {
    className: "second-section-text-buttons"
  }, buttons.map(function (opts, i) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_Buttons_ButtonTheme__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: i
    }, opts, {
      deleteButton: function deleteButton() {
        _deleteButton(i);
      },
      setButtonText: function setButtonText(val) {
        _setButtonText(i, val);
      },
      setButtonUrl: function setButtonUrl(val) {
        _setButtonUrl(i, val);
      },
      setButtonType: function setButtonType(val) {
        _setButtonType(i, val);
      }
    }));
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
    className: "editor-hero-add-button",
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      addButton();
    }
  }, "+ add Button"))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/editor.scss */ "./src/styles/editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_2__);



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('task-theme/second-section', {
  apiVersion: 2,
  title: 'Second Section',
  description: 'Second Section block',
  category: 'theme',
  icon: 'align-right',
  attributes: {
    preTitle: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    imgUrl: {
      type: 'string'
    },
    backGroundUrl: {
      type: 'string'
    },
    imageOrder: {
      type: 'string',
      default: 'L'
    },
    buttons: {
      type: 'array',
      query: {
        text: {
          type: 'string'
        },
        linkUrl: {
          type: 'string'
        },
        buttonType: {
          type: 'string'
        }
      },
      default: [{}]
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/styles/editor.scss":
/*!********************************!*\
  !*** ./src/styles/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map