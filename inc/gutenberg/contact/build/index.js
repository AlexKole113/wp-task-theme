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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText;
var Fragment = wp.element.Fragment;


function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected;
  var title = attributes.title,
      text = attributes.text,
      backGroundUrl = attributes.backGroundUrl,
      wc7Shortcode = attributes.wc7Shortcode,
      apiKey = attributes.apiKey,
      lat = attributes.lat,
      lng = attributes.lng,
      zoom = attributes.zoom,
      icon = attributes.icon,
      formText = attributes.formText;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Fragment, null, isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: "Background settings",
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref2) {
      var url = _ref2.url;
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        backGroundUrl: url
      }));
    },
    allowedTypes: ['image'],
    render: function render(_ref3) {
      var open = _ref3.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
        className: 'hero-background-image-editor',
        src: backGroundUrl !== null && backGroundUrl !== void 0 ? backGroundUrl : 'https://via.placeholder.com/250x125.png',
        onClick: open
      });
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("section", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["useBlockProps"])({
    className: 'contact editor'
  }), {
    style: {
      backgroundImage: "url(".concat(backGroundUrl, ")")
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "contact__text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h2", {
    className: "contact__title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
    tagName: "span",
    value: title,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(title) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        title: title
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Editable text...')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    className: "contact__excerpt"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
    tagName: "span",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        text: text
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Editable text...')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "contact__group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "contact__map"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "editor-google-data"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h4", null, "Google map options "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: 'editor-google-data__control-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Api key"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "text",
    value: apiKey,
    onChange: function onChange(e) {
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        apiKey: e.target.value
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: 'editor-google-data__control-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Latitude"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "text",
    value: lat,
    onChange: function onChange(e) {
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        lat: e.target.value
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: 'editor-google-data__control-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Longitude"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "text",
    value: lng,
    onChange: function onChange(e) {
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        lng: e.target.value
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: 'editor-google-data__control-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Zoom"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    value: zoom,
    onChange: function onChange(e) {
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        zoom: e.target.value
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: 'editor-google-data__control-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Icon"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(MediaUpload, {
    onSelect: function onSelect(_ref4) {
      var url = _ref4.url;
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        icon: url
      }));
    },
    allowedTypes: ['image'],
    render: function render(_ref5) {
      var open = _ref5.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
        className: 'editor-google-data__icon',
        src: icon !== null && icon !== void 0 ? icon : 'https://via.placeholder.com/16x16.png',
        onClick: open
      });
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "contact__form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "editor-google-data wpcf7-form custom-form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("h3", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(RichText, {
    tagName: "span",
    value: formText,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(formText) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        formText: formText
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Editable text...')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: 'editor-google-data__control-group'
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "WCF7 Shortcode"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: 'text',
    value: wc7Shortcode,
    onChange: function onChange(e) {
      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        wc7Shortcode: e.target.value
      }));
    }
  }))))))));
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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('task-theme/contact', {
  apiVersion: 2,
  title: 'Contact',
  description: 'Block with Map and Contact form',
  category: 'theme',
  icon: 'superhero-alt',
  attributes: {
    title: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    formText: {
      type: 'string'
    },
    backGroundUrl: {
      type: 'string'
    },
    wc7Shortcode: {
      type: 'string'
    },
    apiKey: {
      type: 'string'
    },
    lat: {
      type: 'string'
    },
    lng: {
      type: 'string'
    },
    zoom: {
      type: 'string'
    },
    icon: {
      type: 'string'
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