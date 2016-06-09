var should = require('chai').should();
var Shift = require('../src/shift');

describe('shift', function () {
    it('should return the summary string if run without arguments', function () {
      var output = new Shift;

      output.should.be.a('object');
    });
});