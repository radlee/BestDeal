module.exports = function (stringToSplit){

		var arrayOfStrings = stringToSplit.split(', ');
		// console.log(arrayOfStrings)

		var array1 = []
		for(var i =0; i < arrayOfStrings.length; i++){
			var splitted = arrayOfStrings[i].split(' for R');
			array1.push(splitted)
		}
		// console.log(array1)
		return array1;
	}


	// var arrayOfSplittedStrings = geTheArray(deal)
