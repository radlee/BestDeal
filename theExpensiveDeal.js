module.exports  = function(objects){
	var myArray =[];
	for(var key in objects){
		// console.log(objects[key])
		myArray.push(objects[key])

	}
	// console.log(myArray)
	var expensive = 0;
	var Quantity = 0;
	for(var i =0; i<myArray.length; i++){
		if(myArray[i].pricePerAvo > expensive){
			expensive = myArray[i].pricePerAvo
			Quantity = myArray[i].Quantity;
		}
	}
	// console.log(Quantity + " for " + expensive + " per avo");
	return Quantity + " for " + Number(expensive) + " per avo";

}
