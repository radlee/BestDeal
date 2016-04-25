module.exports = function(objects){
	var myArray =[];
	for(var key in objects){
		// console.log(objects[key])
		myArray.push(objects[key])

	}
	// console.log(myArray)
	var cheapest = 10000000;
	var Quantity = 0;
	for(var i =0; i<myArray.length; i++){
		if(myArray[i].pricePerAvo < cheapest){
			cheapest = myArray[i].pricePerAvo;
			Quantity = myArray[i].Quantity;
		}
	}
	// console.log(Quantity + " for " + cheapest + " per avo");
	return Quantity + " for " + Number(cheapest) + " per avo";

}
// theCheapestDeal(obj)
