// treeMethods.contains = function(target) {
// var currChild = {
//  value: this.value
//  children: this.children
// }
//
// var searchInner = function (child) {
//
//  if (child.value === target) {
//    return true;
//  }
//
//  for (var n = 0; n <= child.children.length - 1; n++) {
//    return searchInner(child.children[n]);
//  }
//
//  return false;
// };
//
// return searchInner(currChild);
// };

// var x = 10;

// function f () {
//   x = x + 1;
//   return x;
// }

// var result = f;
// result = result();
// console.log(result);

// function sockMerchant(n, ar) { // [1,1,1,2,2,2,3]
//   if (typeof(n) !== 'number' || Array.isArray(ar) !== true) {
//       return null;
//   } else if (n <= 1 || ar.length <= 1) {
//       return 0;
//   }

//   ar = ar.sort((a, b) => { return a - b; })
//   console.log(ar);

//   var counter = 0;

//   for (var n = 1; n <= ar.length - 1; n += 2) {
//     if (ar[n-1] === ar[n]) {
//       counter++;
//     } else {
//       n--;
//     }
//   }


//   return counter;
// }

// 20

// [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6 ,6, 3 ,6 ,1, 4, 5 ,5, 5] // 9

// console.log(sockMerchant(7, [1,2,1,2,3,1,2])); // 1,1,1,2,2,2,3 // 2
// console.log(sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6 ,6, 3 ,6 ,1, 4, 5 ,5, 5])); // 9



// function hourglassSum(arr) {
//   var currMax = Number.NEGATIVE_INFINITY;

//   for (var n = 0; n <= 3; n++) {
//     for (var m = 0; m <= 3; m++) {
//       var sum = arr[n][m] + arr[n][m + 1] + arr[n][m + 2] + arr[n + 1][m + 1] + arr[n + 2][m] + arr[n + 2][m + 1] + arr[n + 2][m + 2];

//       currMax = currMax < sum ? sum : currMax;
//     }
//   }

//   return currMax;
// }

// console.log(hourglassSum(
//   [
//     [-9, -9, -9, 1, 1, 1],
//     [0, -9, 0, 4, 3, 2],
//     [-9, -9, -9, 1, 2, 3],
//     [0, 0, 8, 6, 6, 0],
//     [0, 0, 0, -2, 0, 0],
//     [0, 0, 1, 2, 4, 0]
//   ])) // 28

// if (arr[n]) {
//   if (arr[n][n]) {
//     var sum = arr[n][n] + arr[n][n+1] + arr[n][n+2] + arr[n+1][n+1] + arr[n+2][n] + arr[n+2][n+1] + arr[n+2][n+2];

//   } else {
//     var sum = undefined;
//   }
// } else {
//   var sum = undefined;
// }

// console.log(sum);

// if (currMax < sum) {
//   currMax = sum;
// }

// 0,0   0,1   0,2
// 1,0   1,1   1,2
// 2,0   2,1   2,2

 
// console.log(rotLeft([
//   41, 73, 89, 7, 10, 1, 59,
//   58, 84, 77, 77, 97, 58, 1,
//   86, 58, 26, 10, 86, 51
// ], 10));
// console.log(rotLeft([
//   33, 47, 70, 37, 8, 53,
//   13, 93, 71, 72, 51, 100,
//   60, 87, 97
// ], 13));