'use strict';

var argumentsToArray = function argumentsToArray(args) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : args.length;

  return Array.prototype.slice.call(args, start, end);
};

var linkReplace = function linkReplace() {
  var absPath = arguments[0];
  var settingLink = arguments[1];
  var settingArgs = argumentsToArray(arguments, 2);
  settingArgs = settingArgs.length ? settingArgs : settingLink.match(/(:.*?)(?=[\/\(]|$)|(\(\/:.*?)\)/ig) || [];
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
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return linkReplace.apply(null, ['', link].concat(args));
};
Replace.absPath = function (absPath, link) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return linkReplace.apply(null, [absPath, link].concat(args));
};

exports['default'] = Replace;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map