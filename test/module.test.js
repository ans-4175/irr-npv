var expect = require('chai').expect
var irrnpv = require('../index')

describe('IRR-NPV', function() {
  /*before(function () {

  });*/

  it('should calculate pv', function(){
  	var fpv = 1000 * Math.pow(1.1,1)
  	var pv = irrnpv.pv(fpv,0.1,1)
    var expected = Math.ceil(pv)
  	expect(expected).to.equal(1000);
  });
  it('should calculate npv', function(){
  	var moneys = [1000,1000]
  	var npv = irrnpv.npv(moneys,0.1)
  	var expected = Math.ceil(npv)
  	expect(expected).to.equal(1736);
  });
  it('should calculate irr', function(){
  	var moneys = [-1000,1000,1000]
  	var irr = irrnpv.irr(moneys)
  	expect(irr).to.equal(61.8);
  });

  /*after(function() {
    
  });*/
});