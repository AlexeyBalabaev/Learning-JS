"use sctrict";

function getMaxSubSum(arr){
  let maxSum = 0;
  let partSum = 0;

  for (let item of arr) {
  	partSum += item;
  	maxSum = Math.max(maxSum, partSum);
  	if (partSum < 0) partSum = 0;
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );      // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );  // 11
alert( getMaxSubSum([-2, -1, 1, 2]) );      // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) );           // 6
alert( getMaxSubSum([-1, -2, -3]) );        // 0