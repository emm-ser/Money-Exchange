// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } else if (currency <= 0) {
    return {};
  }
  
  var h = Math.floor(currency / 50);
  currency  = currency - h * 50;
  var q = Math.floor(currency / 25);
  currency = currency - q * 25;
  var d = Math.floor(currency / 10);
  currency = currency - d * 10;
  var n = Math.floor(currency / 5);
  currency = currency - n * 5;
  var p = currency;

  var obj = {"H":h,"Q":q,"D":d,"N":n,"P":p};
  if (!h) delete obj.H;
  if (!q) delete obj.Q;
  if (!d) delete obj.D;
  if (!n) delete obj.N;
  if (!p) delete obj.P;

  return obj;
}
