var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";


function splitString(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	// var string = arrayOfStrings.join(' ');
	// console.log(arrayOfStrings);
	return arrayOfStrings;
}



var space = ' ';
var comma = ',';
var define=null;

var x = splitString(deal, comma)


var a = [];
for (var i =0; i < x.length; i++){
	var n = x[i].split(' for R')
	a.push(n);
}

a.forEach(function(item){
	var qua = item[0];
	var price = item[1];

	var ans = price/ qua;

	console.log(ans)

	// console.log(qua)
	// console.log(price)
})
console.log(a.length);



// splitString(splitString(deal, comma));