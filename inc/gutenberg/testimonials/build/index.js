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

/***/ "./src/components/TestimonialFormField.js":
/*!************************************************!*\
  !*** ./src/components/TestimonialFormField.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var TestimonialFormField = function TestimonialFormField(_ref) {
  var name = _ref.name,
      setFieldName = _ref.setFieldName,
      label = _ref.label,
      setFieldLabel = _ref.setFieldLabel,
      type = _ref.type,
      setFieldType = _ref.setFieldType,
      showOnFront = _ref.showOnFront,
      setShowOnFront = _ref.setShowOnFront,
      deleteField = _ref.deleteField;
  var fieldTypes = ['text', 'number', 'email', 'tel', 'date'];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "single-input-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "fields-data-set"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "fields-data-set__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "fields-data-set__item_label"
  }, "Field Name"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "fields-data-set__item_input",
    type: "text",
    value: name,
    onChange: function onChange(e) {
      setFieldName(e.target.value);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "fields-data-set__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "fields-data-set__item_label"
  }, "Field Label"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    className: "fields-data-set__item_input",
    type: "text",
    value: label,
    onChange: function onChange(e) {
      setFieldLabel(e.target.value);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "fields-data-set__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "fields-data-set__item_label"
  }, "Field Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
    onChange: function onChange(e) {
      setFieldType(e.target.value);
    }
  }, fieldTypes.map(function (allowedType) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
      selected: allowedType === type,
      key: allowedType,
      value: allowedType
    }, allowedType);
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "fields-data-set__item-show-on-front"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Show data from this field in reviews",
    help: showOnFront ? 'The data from this field will be shown in reviews in the public part of the site' : 'Data from this field is visible only in the admin panel',
    checked: showOnFront,
    onChange: function onChange() {
      setShowOnFront(!showOnFront);
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "single-input-group__delete-field"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      deleteField();
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
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
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimonialFormField);

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
/* harmony import */ var _components_TestimonialFormField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/TestimonialFormField */ "./src/components/TestimonialFormField.js");





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
  var title = attributes.title,
      text = attributes.text,
      backGroundUrl = attributes.backGroundUrl,
      formTitle = attributes.formTitle,
      formButtonTitle = attributes.formButtonTitle,
      testimonialsPerPage = attributes.testimonialsPerPage,
      formFields = attributes.formFields; //features

  var addField = function addField() {
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      formFields: [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formFields), [{
        name: '',
        label: '',
        type: 'text'
      }])
    }));
  };

  var _deleteField = function deleteField(fieldNum) {
    var newformFields = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formFields);

    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      formFields: newformFields.filter(function (v, i) {
        return i !== fieldNum;
      })
    }));
  };

  var _setFieldName = function setFieldName(fieldNum, name) {
    console.log(fieldNum, name);

    var newFields = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formFields);

    newFields[fieldNum].name = name;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      formFields: newFields
    }));
  };

  var _setFieldLabel = function setFieldLabel(fieldNum, label) {
    var newFields = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formFields);

    newFields[fieldNum].label = label;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      formFields: newFields
    }));
  };

  var _setFieldType = function setFieldType(fieldNum, fieldType) {
    var newFields = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formFields);

    newFields[fieldNum].type = fieldType;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      formFields: newFields
    }));
  };

  var _setShowOnFront = function setShowOnFront(fieldNum, showOnFront) {
    var newFields = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formFields);

    newFields[fieldNum].showOnFront = showOnFront;
    setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
      formFields: newFields
    }));
  };

  console.log(attributes);
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
    className: 'testimonials'
  }), {
    style: {
      backgroundImage: "url(".concat(backGroundUrl, ")")
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "testimonials__text"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h2", {
    className: "testimonials__title"
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
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("p", {
    className: "testimonials__excerpt"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    tagName: "span",
    value: text,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(text) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        text: text
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editable text...')
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "testimonials__group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "testimonials-collection"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "editor-testimonials-options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("label", {
    className: "editor-testimonials-options__item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "editor-testimonials-options__item_label"
  }, "Testimonials per page"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("input", {
    className: "editor-testimonials-options__item_input",
    type: "number",
    value: testimonialsPerPage,
    onChange: function onChange(e) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        testimonialsPerPage: e.target.value
      }));
    }
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "testimonials__form"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("form", {
    className: "wpcf7-form custom-form",
    noValidate: "novalidate",
    "data-status": "init"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("h3", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    tagName: "span",
    value: formTitle,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(formTitle) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        formTitle: formTitle
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editable text...')
  })), formFields.map(function (opts, fieldNum) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_components_TestimonialFormField__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: fieldNum
    }, opts, {
      deleteField: function deleteField() {
        return _deleteField(fieldNum);
      },
      setFieldName: function setFieldName(text) {
        _setFieldName(fieldNum, text);
      },
      setFieldLabel: function setFieldLabel(text) {
        _setFieldLabel(fieldNum, text);
      },
      setFieldType: function setFieldType(text) {
        _setFieldType(fieldNum, text);
      },
      setShowOnFront: function setShowOnFront(val) {
        _setShowOnFront(fieldNum, val);
      }
    }));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "editor-testimonials-fields-add-button__container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
    className: "editor-testimonials-fields-add-button__link",
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      addField();
    }
  }, "+ add Field")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "single-input-group"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wpcf7-form-control has-spinner wpcf7-submit single-input-group__submit theme-button button-big success-white"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    tagName: "span",
    value: formButtonTitle,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: function onChange(formButtonTitle) {
      return setAttributes(_objectSpread(_objectSpread({}, attributes), {}, {
        formButtonTitle: formButtonTitle
      }));
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Editable text...')
  })))))))));
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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('task-theme/testimonials', {
  apiVersion: 2,
  title: 'Testimonials',
  description: 'Second Section block',
  category: 'theme',
  icon: 'buddicons-groups',
  attributes: {
    title: {
      type: 'string'
    },
    text: {
      type: 'string'
    },
    backGroundUrl: {
      type: 'string'
    },
    formTitle: {
      type: 'string'
    },
    formButtonTitle: {
      type: 'string'
    },
    testimonialsPerPage: {
      type: 'string',
      default: '5'
    },
    formFields: {
      type: 'array',
      query: {
        name: {
          type: 'string'
        },
        label: {
          type: 'string'
        },
        type: {
          type: 'string'
        },
        showOnFront: {
          type: 'boolean',
          default: true
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