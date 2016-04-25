var assert = require('assert');
var getArray = require('../getArray');
var makeAnObject = require('../makeAnObject');
var theCheapestDeal = require('../theCheapestDeal');
var theExpensiveDeal = require('../theExpensiveDeal');
var averageDeal = require('../averageDeal');

var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50"

var array = getArray(deal);
var obj = makeAnObject(array);


describe('Get the Best Deal--->', function(){
  it('should retun an array of Quantities and Prices', function(){
    assert.deepEqual(array,
  [
    ['1','3'],
    ['2','7'],
    ['3','10'],
    ['5','14.50']
  ]
);
  });

  it('should retun a list of deals with prices per avo', function(){
    assert.deepEqual(makeAnObject(array),

    [
      {
        Quantity : '1',
        pricePerAvo : 3.00
      },
      {
        Quantity : '2',
        pricePerAvo : 3.50
      },
      {
        Quantity : '3',
        pricePerAvo : 3.33
      },
      {
        Quantity : '5',
        pricePerAvo : 2.90
      }
    ]
  );
  });

  it('should retun the cheapest deal', function(){
    assert.deepEqual(theCheapestDeal(obj),
    5 + " for " + 2.90 + " per avo"

);
  });

  it('should return the most Expensive Deal', function(){
    assert.equal(theExpensiveDeal(obj),
    2 + " for " + 3.50 + " per avo"

);
  });

  it('should return the average of all the deal prices', function(){
    assert.equal(averageDeal(array), 3.14);
  });
});
