# IRR-NPV

Node JS modules for calculating net present value and internal return rate of a series.
Install it with `npm install irr-npv`
Just require `var irrnpv = require('irr-npv')`

## How to use

### Present Value
```
var future_value = 40000
var rate = 0.01
var nYears = 2
var pv = irrnpv.pv(future_value,rate,nYears)
```
It will calculate present value of future value after (n) years with a rate specified

### Net Present Value
```
var moneys = [5000,3000]
var rate = 0.01
var npv = irrnpv.npv(moneys,rate)
```
It will calculate net present value of a series values with a rate specified

### Internal Return Rate
```
var moneys = [-1000,1000,1000]
var irr = irrnpv.irr(moneys)
```
It will calculate whats the closest value of internal return rate betweem -1.0 to 1.0

## Next Development
Feel free to [fork](https://github.com/ans-4175/irr-npv) and make a pull request, or [contact me](mailto:ans4175@gmail.com)