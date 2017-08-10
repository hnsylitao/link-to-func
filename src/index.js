const argumentsToArray = function (args, start = 0, end = args.length) {
  return Array.prototype.slice.call(args, start, end);
};

const linkReplace = function () {
  let absPath = arguments[0];
  let settingLink = arguments[1];
  let settingArgs = (settingLink.match(/(:.*?)(?=[\/\(]|$)|(\(\/:.*?)\)/ig) || []);
  const _replaceLink = function (args) {
    let link = settingLink;

    /*check args*/
    (() => {
      let requireIndex = 0;
      for (let i = 0; i < settingArgs.length; i++) {
        let settingArg = settingArgs[i];
        if (settingArg) {
          if (!(/^\(.*?\)$/.test(settingArg))) {
            requireIndex++;
          }
        }
      }
      if (args.length < requireIndex) {
        throw new Error(`${link} URL Args Required`);
      }
    })()

    for (let i = 0; i < settingArgs.length; i++) {
      let itemArg = args[i];
      let setingArg = settingArgs[i];
      if (setingArg) {
        if (/^\(.*?\)$/.test(setingArg)) {
          link = link.replace(setingArg, itemArg ? `/${itemArg}` : '');
        } else {
          link = link.replace(setingArg, itemArg || setingArg);
        }
      }
    }
    return link;
  };

  let linkObject = function () {
    return _replaceLink(argumentsToArray(arguments));
  };
  linkObject.toString = function () {
    return _replaceLink(argumentsToArray(arguments));
  };
  if (absPath) {
    linkObject.toAbsPath = function () {
      return `${absPath}${_replaceLink(argumentsToArray(arguments))}`;
    };
  }
  linkObject.getLink = function () {
    return settingLink;
  };
  return linkObject;
}

const Replace = function (link) {
  return linkReplace(false, link);
};
Replace.absPath = function (absPath, link) {
  return linkReplace(absPath,link)
}

exports['default'] = Replace;
module.exports = exports['default'];