var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50";


function splitString(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	var string = arrayOfStrings.join('');
	// console.log(string);
	return string;
}

var x = splitString(deal, 'for R').split(',');

console.log(x);


var space = ' ';
var comma = ',';
var define=null;

splitString(deal, 'for R')