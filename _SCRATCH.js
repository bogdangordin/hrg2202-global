/*
_SCRATCH
Bogdan Gordin
2/12/20
Just random scratch codes for future reference across multiple machinces
*/



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

// function sockMerchant(n, ar) {
// ar = ar.sort((a, b) => {return a - b});


//   return ar;
// }


// console.log(sockMerchant(7,[1,1,1,2,2,2,3]));


// function countingValleys(steps, path) {
//   if (typeof(steps) !== 'number' || typeof(path) !== 'string') {
//       return null;
//   } else if (steps <= 1 || path.length <= 1) {
//       return 0;
//   }

//   var counter = 0;
//   var elevation = 0;
//   var arr = [0]

//   for (var n = 0; n <= path.length - 1; n++) {
//     if (path[n] === 'U') {
//       elevation++;

//       if (elevation === 0) {
//         counter++;
//       }

//     } else if (path[n] === 'D') {
//       elevation--;
//     } else {
//       return null;
//     }
//   }

//   return counter;
// }

// console.log(countingValleys(8, 'UDDDUDUU')); // 1
// console.log(countingValleys(8, 'DDUUUUDD')); // 1
// console.log(countingValleys(16, 'UDDDUDUUUDDDUDUU')); // 2

//  _/\      _/\      _
//     \    /   \    /
//      \/\/     \/\/




// function jumpingOnClouds(c) {
//   if (typeof (c) === 'string') {
//     var temp = c.split(' ');
//     temp = temp.join('');
//   } else if (Array.isArray(c)) {
//     var temp = c.join('');
//   } else {
//     return null;
//   }

//   var counter = 0;
//   var n = 0;

//   do {

//     if (temp[n + 2] === '1') {
//       n++;
//       counter++;
//     } else if (temp[n + 2] === undefined) {
//       n++;
//       counter++;
//     } else {
//       n += 2;
//       counter++;
//     }

//   } while (n !== temp.length - 1);

//   return counter;
// }

// console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])); // 3 jumps // jump from: 0-2, 2-4, 4-6
// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4 // jump from: 0-1, 1-3, 3-4, 4-6




// function repeatedString(s, n) {
//   var mySet = new Set(s.split(''));
//   if (mySet.size === 1 && mySet.has('a')) {
//     return n;
//   } else if (mySet.has('a') === false) {
//     return 0;
//   }

//   var counter = 0;
//   var absM = 0;
//   var m = 0;

//   do {
//     if (s[m] === 'a') {
//       counter++;
//     }

//     if (s[m + 1] === undefined) {
//       m = 0;
//     } else {
//       m++;
//     }

//     absM++;
//   } while (absM < n);

//   return counter;
// }

// function repeatedString2(s, n) {

//   let c = 0,
//       ca = 0,
//       r = n % s.length

//   for (let i = s.length; i-- > 0;) {
//     if (s[i] === 'a') {
//       c++;

//       if (i < r) {
//         ca++;
//       }
//     }
//   }

//   return ((n - r) / s.length * c) + ca; 51574523448
// }

// function repeatedString(s, n) { // n = XY // 357,142
//   var numOfA = s.split('a').length - 1;
//   console.log("a: " + numOfA);

//   var maxInStr = s.length;
//   console.log("max: " + maxInStr);

//   console.log("num: " + n);


//   var x = numOfA / maxInStr;
//   console.log(numOfA / maxInStr);

//   // now we have n = (maxInStr/numOfA)Y
//   // next we solve for Y by multiple both sides with (numOfA/maxInStr)

//   var y = n * x;


//   return y;
// }


// console.log(repeatedString('abcac', 10)); // creates abcacabcac cause 10 and counts the a chars// 4
// console.log(repeatedString('baaaaaaabbbbgegdrsgaegeratga', 1000000)) // 357,147

// console.log(repeatedString('ab', 1000000000000));
// console.log(repeatedString('x', 970770));
// console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqaadhyktagjxoanknhgilnm', 736778906400)); // 58,358,725,257

// console.log(repeatedString('baaaaaaabbbbgegdrsgaegeratga', 1000000));
// console.log(repeatedString2('baaaaaaabbbbgegdrsgaegeratga', 1000000));



// console.log(repeatedString('abadaaaabbbbbbbbbb', 11));
// console.log(repeatedString2('abadaaaabbbbbbbbbb', 11));
