// 1. printReverse() using FOR LOOP
// ================================

// function printReverse(arr) {
//   for (var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }

// 1. printReverse() using FOREACH
// ================================

// function printReverse(arr) {
//   arr
//     .slice()
//     .reverse()
//     .forEach(function(e) {
//       console.log(e);
//     });
// }

// printReverse([1, 2, 3, 4]);

// printReverse(['a', 'b', 'c']);

// 2. isUniform()
// ================================

// function isUniform(arr) {
//   for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// ***** Colt Steele's Solution *****

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
}

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(['a', 'b', 'p']));
console.log(isUniform(['b', 'b', 'b']));

// 3. sumArray()
// ================================

// function sumArray(arr) {
//   arr.forEach(function(e) {
//     console.log(arr.reduce((a, b) => a + b, 0));
//   });
// }

// ***** Colt Steele's Solution *****

function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

// 4. max()
// ================================

// function max(arr) {
//   arr.forEach(function(e) {
//     console.log(Math.max.apply(Math, arr));
//   });
// }

// ***** Colt Steele's Solution *****

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));
