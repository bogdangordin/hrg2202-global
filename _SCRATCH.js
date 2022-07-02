/*
_SCRATCH
Bogdan Gordin
2/12/20
Just random scratch codes for future reference across multiple machinces
*/

// ------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------

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

// ------------------------------------------------------------------------------------------------------------------------


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

// ------------------------------------------------------------------------------------------------------------------------



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

// ------------------------------------------------------------------------------------------------------------------------



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

//   return ((n - r) / s.length * c) + ca; // 51574523448
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


// ------------------------------------------------------------------------------------------------------------------------


// function editor(operations) {
//   var myStr = '';
//   var curs_at = 0;

//   var undone = false;
//   var myStr_prev = '';
//   var curs_at_prev = 0;

//   var selected = [0, 0];


//   for (var n = 0; n <= operations.length - 1; n++) {
//     var op = operations[n].split(' ');

//     switch (op[0]) {
//       case 'TYPE':
//         myStr_prevs = myStr;
//         curs_at_prev = curs_at;
//         undone = false;


//         if (selected[0] !== 0 && selected[1] !== 0) {
//           var up_to_curs = myStr.slice(0, selected[0]+1);
//           var rest_from_curs = myStr.slice(selected[1]);

//           myStr = up_to_curs + op[1] + rest_from_curs;

//           curs_at = curs_at + op[1].length;
//         } else {
//           var up_to_curs = myStr.slice(0, curs_at);
//           var rest_from_curs = myStr.slice(curs_at);
//           myStr = up_to_curs + op[1] + rest_from_curs;
//           curs_at = curs_at + op[1].length;
//         }



//         console.log(myStr);
//         break;


//       case 'MOVE_CURSOR':
//         undone = false;
//         selected = [0, 0];
//         curs_at_prev = curs_at;

//         curs_at = curs_at + parseInt(op[1]);

//         if (curs_at < 0) {
//           curs_at = 0;
//         } else if (curs_at > myStr.length) {
//           curs_at = myStr.length;
//         }

//         break;


//       case 'SELECT':
//         undone = false;
//         selected = [0, 0];

//         curs_at_prev = curs_at;

//         selected = [parseInt(op[1]), parseInt(op[2])];
//         curs_at = parseInt(op[2]);

//         if (curs_at < 0) {
//           curs_at = 0;
//         } else if (curs_at > myStr.length) {
//           curs_at = myStr.length;
//         }
//         break;


//       case 'UNDO':
//         if (undone === false) {
//           undone = true;
//           selected = [0, 0];
//           myStr = myStr_prevs;
//           curs_at = curs_at_prev;
//         }
//         selected = [0, 0];


//         break;


//       default:
//         console.log('error');
//         return null;
//     }



//   }



//   return myStr;
// }



// console.log(editor([
//   "TYPE hello",
//   "TYPE world",
//   "MOVE_CURSOR -5",
//   "TYPE there"])); // hellothereworld

// console.log(editor([
//   "TYPE Code", // Code|
//   "TYPE Signal", // CodeSignal|
//   "MOVE_CURSOR -3", // CodeSig|nal
//   "SELECT 5 8", // CodeS[igna]|l // CodeSl
//   "TYPE ou", // CodeSou|l
//   "UNDO", // CodeSou|l // CodeSigna|l
//   "TYPE nio"])); // CodeSignaniol


// ------------------------------------------------------------------------------------------------------------------------


// function solution(cntProducts, quantities, costs, meals) {
//   //      int === total prods to use
//   //      arr[product][shop] === amount in shop
//   //      arr2[product][shop] === costed in shop
//   //      arr3[product][meal] === prods need to make a meal
//   var arr = [];
//   var max_shops = quantities.length - 1;

//   meals.forEach((meal, index) => {
//       var lowest_meal_costs = Number.POSITIVE_INFINITY;

//       for (var n = 0; n <= max_shops; n++){
//           var products = quantities[n];
//           var costing = costs[n];


//       }


//   });



//   return arr;
// }


// ------------------------------------------------------------------------------------------------------------------------


// function minimumBribes(q) { // arr === que of numbers
//   var counter = 0;

//   var curr_person = undefined;
//   var curr_person_bribes = 0;
//   var chaotic = false;

//   for (var n = 0; n <= q.length-2; n++) {
//     console.log('-----' + counter);

//     curr_person = q[n];

//     if ((curr_person - (n+1)) >= 3) {
//       var chaotic = true;
//       break;
//     }

//   };

//   console.log('-----' + counter);

//   console.log(chaotic ? 'Too chaotic' : counter);
// }




// // minimumBribes([ 2, 1, 5, 3, 4 ]); // 3
// // minimumBribes([ 2, 5, 1, 3, 4 ]); // Too chaotic'
// // minimumBribes([5 ,1 ,2, 3, 7 ,8 ,6, 4]); // Too chaotic
// minimumBribes([1, 2, 5, 3 ,7 ,8 ,6 ,4]); // 7

// [1, 2, 5, 3 ,7 ,8 ,6 ,4]

// ------------------------------------------------------------------------------------------------------------------------


// function isBalanced(s) {
//   s = s.split('');
//   if (s.length <= 1) return 'NO';
//   if (s.length % 2 === 1) return 'NO';

//   var arr = [];
//   var broken = false;

//   s.forEach((ele) => {

//     switch(ele) {
//       case '[':
//         arr.unshift(']');
//         break;

//       case '{':
//         arr.unshift('}');
//         break;

//       case '(':
//         arr.unshift(')');
//         break;

//       default:
//         var temp = arr.shift();
//         if (temp !== ele) {
//           broken = true;
//           return;
//         }
//     }

//   });

//   return broken || arr.length > 0 ? 'NO' : 'YES';
// }



// console.log(isBalanced('({[()]})')); // YES
// console.log(isBalanced('{[(])}')); // NO
// console.log(isBalanced('{{[[(())]]}}')); // YES
// console.log(isBalanced(       '{({}[])}'        )); // yes

// console.log(isBalanced('[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}'));

// ------------------------------------------------------------------------------------------------------------------------


// function processData(input) {
//   var commands = input.split('\n');
//   commands.shift();
//   var arr = [];

//   commands.forEach((ele) => {
//     var comm = ele.split(' ');
//     switch(comm[0]) {
//       case '1':
//         arr.push(comm[1]);
//         break;

//       case '2':
//         arr.shift();
//         break;

//       case '3':
//         console.log(arr[0]);
//         break;

//       default:
//           return;
//     }
//   });
// }



// var data = `10
// 1 42
// 2
// 1 14
// 3
// 1 28
// 3
// 1 60
// 1 78
// 2
// 2`;

// processData(data);

// ------------------------------------------------------------------------------------------------------------------------


function largestRectangle(h) {
  var max_area = 0;

  h.forEach((height, index) => {
    var lowest_height = height;
    var length = 1;

    // skip some heights depending on somethin? to make the prog faster

    for (var n = index+1; n <= h.length-1; n++){
      length++;
      if (h[n] < lowest_height) lowest_height = h[n];
      if (lowest_height * length > max_area) max_area = lowest_height * length;

    }

  });

  return max_area;
}

// Math.min(...arr).toString()
//arr.indexOf();

// console.log(largestRectangle([ 1, 2, 3, 4, 5 ])); // 9 // 3 * [3,4,5].length
// console.log(largestRectangle([ 1, 3, 5, 9, 11 ])); // 18 // 9 * [9,11].length
// console.log(largestRectangle([ 11, 11, 10, 10, 10 ])); // 50 // 11 - 1 * [11,11,10,10,10].length

// var arr = [
//   17251,  111021, 468274, 103217, 350415, 61669,  796450, 156297,
//   953054, 440459, 2535,   286823, 298241, 387365, 223650, 332004,
//   425095
// ];

// console.log(largestRectangle(arr)); // 10,414,422
