var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";


function splitString(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

var x = splitString(deal, ',')
//Removing 'for R' from each
var a = [];
for (var i =0; i < x.length; i++){
	var n = x[i].split(' for R')
	a.push(n);
}

//Pushing prices for each deal to an array
var prices =[];
a.forEach(function(item){
	var qua = item[0];
	var price = item[1];
	var ans = Number((price/ qua).toFixed(2));
	prices.push(ans)
})

// Find out about Accessing the last item in the list 
var sorted = prices.sort();

console.log("\n---------------------");
console.log(sorted)
console.log("---------------------\n");

console.log("----------------");
console.log("Cheap : " + sorted[0]) ;
console.log("Expensive : " + sorted[sorted.length - 1])
console.log("----------------\n");

//Sum all numbers in the array
var sum = 0;
sorted.forEach(function(item){
	sum += item;
})
//Get the average of the prices
var average = sum / prices.length;
console.log("----------------------------");
console.log("The average price is :" + average.toFixed(2) + " |");
console.log("----------------------------\n");