// var colors = ['red', 'orange', 'yellow', 'green'];

// // for (var i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// colors.forEach(function(color) {
//   // color is a placeholder, call it whatever you want
//   console.log('This is your color: ' + color);
// });

// function printColor(color) {
//   console.log('*************');
//   console.log(color);
//   console.log('*************');
// }

// printColor('purple');

// colors.forEach(printColor);

// // Using the WHILE Loop

// var count = 0;

// while (count < colors.length) {
//   console.log(colors[count]);
//   count++;
// }

// // EXERCISE

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var colors = ['red', 'orange', 'yellow', 'green'];

// numbers.forEach(function(color) {
//   if (color % 3 === 0) {
//     console.log(color);
//   }
// });

// // convert into a For Loop

// for (var i = 1; i < numbers.length; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// var nums = [45, 65, 77, 34];

// nums.forEach(function(num) {
//   console.log(num);
// });

function myForEach(arr, func) {
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // call fun for each item in array
    func(arr[i]);
  }
}

var colors = ['red', 'orange', 'yellow'];

myForEach(colors, function(color) {
  console.log(color);
});

Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
};

var friends = ['charlie', 'dave', 'maddy', 'caitlin'];

// friends.myForEach(alert);

friends.myForEach(function(name) {
  console.log('I love ' + name);
});
