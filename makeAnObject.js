module.exports =  function(arrayOfQuaAndPrices){
    var prices ={};
    arrayOfQuaAndPrices.forEach(function(item){
      var qua = item[0];
      var price = Number(item[1]);
      var ans = Number((price/ qua).toFixed(2));
      prices[qua] = ans;
    })

    var dealOb = [];
    for(var key in prices){
      var result = {
        Quantity : key,
        pricePerAvo : Number(prices[key]).toFixed(2)
      }
      dealOb.push(result)
      // console.log(result)
    }
    return dealOb;
  }
