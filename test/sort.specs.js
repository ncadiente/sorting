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

  it('should have a method quickSort', function() {
    expect(sorter.quickSort).to.exist;
    expect(sorter.quickSort).to.be.a('function');
  });

  it('should have a method selectionSort', function() {
    expect(sorter.selectionSort).to.exist;
    expect(sorter.selectionSort).to.be.a('function');
  });

  it('should have a method getSwaps', function() {
    expect(sorter.getSwaps).to.exist;
    expect(sorter.getSwaps).to.be.a('function');
  });
});