function PVCalc(money,interest,n){
	return money / (Math.pow(1+interest,n))
}

function NPVCalc(moneys,interest){
	var res = 0
	moneys.forEach(function(money,n){
		res += PVCalc(money,interest,n+1)
	})
	return res
}

function IRRCalc(CArray) {
  var min = -1.0;
  var max = 1.0;
  var guess = (min + max) / 2;
  var lastGuess = 1.0
  var notSame = true
  var NPV = 0;
  do {
  	NPV = 0;
  	guess = (min + max) / 2;
  	// console.log(guess,min,max)
    if (Math.abs(lastGuess-guess)<0.0000000000000000001) notSame = false
    lastGuess = guess
    for (var j=0; j<CArray.length; j++) {
    	NPV += PVCalc(CArray[j],guess,j);
    }
    if (NPV > 0) {
      min = guess;
    } else {
      max = guess;
    }
  } while(notSame && (Math.abs(NPV) > 0.0000000000000000001));
  var raw = parseFloat(guess * 100).toFixed(2);
  return parseFloat(raw);
}

var Engine = {}
Engine.pv = PVCalc
Engine.npv = NPVCalc
Engine.irr = IRRCalc
module.exports = Engine