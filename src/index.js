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

/** insert
 *  @function
 *  @name insert
 *  @param {string} key
 *  @param {value} insertable
 *  @return {function} insertion helper
 */
module.exports.insert = function(key, value) {
  return function(object) {
    object[key] = value;
    return object;
  };
};

/** log
 *  @function
 *  @name log
 *  @param {value} promise value
 *  @return {value} promise value
 */
module.exports.log = function(promiseValue) {
  console.log(promiseValue);
  return promiseValue;
};
