// function add (a, b) {
//   return a + b;
// }

// console.log(add(1,3));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Artis', 25];
var personTwo = ['Jen', 29];
// Hi Artis, you are 25

function greet (name, age) {
 console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Jen', 'Cory'];
var final = ['Vikram', ...names];

final.forEach(function (name) {
  console.log('Hi ' +  name);
});