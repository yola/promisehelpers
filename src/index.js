'use strict';

/** wrap
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

/** nofitfy
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

/** findObjectWithKeyAndValueInArray
 *  @function
 *  @name findObjectWithKeyAndValueInArray
 *  @param {function} array of objects
 *  @param {function} key
 *  @param {function} value
 *  @return {function} object
 */
module.exports.findObjectWithKeyAndValueInArray = function(key, value) {
  return function(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return;
  };
};
