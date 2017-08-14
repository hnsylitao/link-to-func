(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["linkToFunc"] = factory();
	else
		root["linkToFunc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var argumentsToArray = function argumentsToArray(args) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : args.length;

  return Array.prototype.slice.call(args, start, end);
};

var linkReplace = function linkReplace() {
  var absPath = arguments[0];
  var settingLink = arguments[1];
  var settingArgs = settingLink.match(/(:.*?)(?=[\/\(]|$)|(\(\/:.*?)\)/ig) || [];
  var _replaceLink = function _replaceLink(args) {
    var link = settingLink;

    /*check args*/
    (function () {
      var requireIndex = 0;
      for (var i = 0; i < settingArgs.length; i++) {
        var settingArg = settingArgs[i];
        if (settingArg) {
          if (!/^\(.*?\)$/.test(settingArg)) {
            requireIndex++;
          }
        }
      }
      if (args.length < requireIndex) {
        throw new Error(link + ' URL Args Required');
      }
    })();

    for (var i = 0; i < settingArgs.length; i++) {
      var itemArg = args[i];
      var setingArg = settingArgs[i];
      if (setingArg) {
        if (/^\(.*?\)$/.test(setingArg)) {
          link = link.replace(setingArg, itemArg ? '/' + itemArg : '');
        } else {
          link = link.replace(setingArg, itemArg || setingArg);
        }
      }
    }
    return link;
  };

  var linkObject = function linkObject() {
    return _replaceLink(argumentsToArray(arguments));
  };
  linkObject.toString = function () {
    return _replaceLink(argumentsToArray(arguments));
  };
  if (absPath) {
    linkObject.toAbsPath = function () {
      return '' + absPath + _replaceLink(argumentsToArray(arguments));
    };
  }
  linkObject.getLink = function () {
    return settingLink;
  };
  return linkObject;
};

var Replace = function Replace(link) {
  return linkReplace(false, link);
};
Replace.absPath = function (absPath, link) {
  return linkReplace(absPath, link);
};

exports['default'] = Replace;
module.exports = exports['default'];

/***/ })
/******/ ]);
});