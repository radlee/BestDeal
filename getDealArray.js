//Returns a list of deals [1,3], [1,7]
var pricePerAvoObj = function(arrayOfQuaAndPrices){
  var prices ={};
  arrayOfQuaAndPrices.forEach(function(item){
    var qua = item[0];
    var price = item[1];
    var ans = Number((price/ qua).toFixed(2));
    prices[qua] = ans;
  })
  return prices;
}
// var obj = pricePerAvoObj(array);
