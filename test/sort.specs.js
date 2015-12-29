var chai = require('chai');
var mocha = require('mocha');
var expect = chai.expect;
var should = chai.should();
var sorter = require('./../public/js/sort.js');
// var sorter = sorter;

describe('sorter', function () {
  it('should be an object', function () {
    expect(sorter).to.exist;
    expect(sorter).to.be.a('object');
  });

  it('should have a method bubbleSort', function() {
    expect(sorter.bubbleSort).to.exist;
    expect(sorter.bubbleSort).to.be.a('function');
  });
});