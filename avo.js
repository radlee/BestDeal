var deal = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";

var array = deal.split("for R");


	// var obj = {},

	// array = array, 
	// l = array.length;
	// while(l && (obj[--l] = array.pop())){
	// };

	var arrObj = {};

	for(var i=0; i< array.length; i++){
		arrObj[array[i]] = i;
	
	}






console.log(arrObj.length);









//////////////
// var nums = {};

// array.forEach(function(array){
// 	if(nums[array] == undefined){
// 		nums[array] = 0;
// 	}


// 	nums[array] = nums[array] + 1;
// });

// console.log((nums));