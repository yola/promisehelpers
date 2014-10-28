'use strict';

var isArray = require('isarray');

var insertHelper = function(keys, value, object) {
  var index;
  var key;
  var nestedObject = object;

  for(index = 0; index < keys.length; index++) {
    key = keys[index];

    if(!nestedObject[key]) {
      nestedObject[key] = {};
    }

    if(index === keys.length - 1) {
      nestedObject[key] = value;
    } else {
      nestedObject = nestedObject[key];
    }
  }

  return object;
};

/** Takes a promise value and "wraps" it inside
 *  the wrapperObject passed to wrap, at the
 *  propertyName passed to wrap.
 *  @function
 *  @name wrap
 *  @param {object} wrapperObject
 *  @param {string} propertyName
 *  @return {function} doWrap
 */
module.exports.wrap = function(obj, property) {
  return function(value) {
    obj[property] = value;
    return obj;
  };
};

/** Calls the funciton passed to notify with no arguments
 *  @function
 *  @name notify
 *  @param {function} callback
 *  @return {function} notifyWrapper
 */
module.exports.notify = function(func) {
  return function(value) {
    func();
    return value;
  };
};

/** Places a value in an object at an arbitrary depth
 *  specified by a keyPath.
 *  @function
 *  @name insert
 *  @param {string|array<string>} keyPath
 *  @param {value} insertable
 *  @return {function} insertion helper
 */
module.exports.insert = function(key, value) {
  return function(object) {
    if(isArray(key)) {
      return insertHelper(key, value, object);
    }

    object[key] = value;
    return object;
  };
};

/** log the promise value to the console
 *  @function
 *  @name log
 *  @param {value} promise value
 *  @return {value} promise value
 */
module.exports.log = function(promiseValue) {
  console.log(promiseValue);
  return promiseValue;
};
