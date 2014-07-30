'use strict';

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var promiseHelpers = require('../src/index.js');
var wrap = promiseHelpers.wrap;
var notify = promiseHelpers.notify;
var findObjectWithKeyAndValueInArray = promiseHelpers.findObjectWithKeyAndValueInArray;

chai.should();
chai.use(sinonChai);

describe('promise utility functions', function() {
  it('wraps values in objects', function() {
    var obj = {};
    var wrapFunc = wrap(obj, 'property');
    wrapFunc(123).should.have.property('property', 123);
  });

  describe('notify', function() {
    var notifyFunc;
    var spy;

    beforeEach(function() {
      spy = sinon.spy();
      notifyFunc = notify(spy);
    });

    it('calls the passed in function', function() {
      notifyFunc();
      spy.should.have.been.called;
    });

    it('closure returns the value passed to it', function() {
      notifyFunc(321).should.equal(321);
    });
  });

  describe('findObjectWithKeyAndValueInArray', function() {
    var array = [{'name': 'foo', 'value': 'sup'}, {'name': 'bar'}];
    var resultFunc = findObjectWithKeyAndValueInArray('name', 'foo');
    resultFunc(array).should.have.property('value', 'sup');
  });
});
