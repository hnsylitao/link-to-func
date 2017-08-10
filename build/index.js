'use strict';

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
//# sourceMappingURL=index.js.map