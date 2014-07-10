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

/** log
 *  @function
 *  @name log
 *  @param {value} promise value
 *  @return {value} promise value
 */
module.exports.log = function(value) {
  console.log(value);
  return value;
};
