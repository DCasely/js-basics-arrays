var colors = ['red', 'orange', 'yellow', 'green'];

// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

colors.forEach(function(color) {
  // color is a placeholder, call it whatever you want
  console.log('This is your color: ' + color);
});

function printColor(color) {
  console.log('*************');
  console.log(color);
  console.log('*************');
}

printColor('purple');

colors.forEach(printColor);

// Using the WHILE Loop

var count = 0;

while (count < colors.length) {
  console.log(colors[count]);
  count++;
}

// EXERCISE

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ['red', 'orange', 'yellow', 'green'];

numbers.forEach(function(color) {
  if (color % 3 === 0) {
    console.log(color);
  }
});

// convert into a For Loop

for (var i = 1; i < numbers.length; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
