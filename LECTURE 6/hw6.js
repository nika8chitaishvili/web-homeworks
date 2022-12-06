/// LECTURE 6
console.log('LECTURE 6');
console.log(' ');
console.log(' ');


/// TASK 1
console.log('-- TASK 1');

const replace = (string, valueToReplace, valueToReplaceWith) =>
  string.slice(0, string.indexOf(valueToReplace)) +
  valueToReplaceWith +
  string.slice(string.indexOf(valueToReplace) +  valueToReplace.length);


console.log("Original sentence: Lorem ipsum dolor sit amet", "ipsum", "optimus");
console.log(replace("Replaced sentence: Lorem ipsum dolor sit amet", "ipsum", "optimus"));



/// TASK 2
console.log(' ');
console.log('-- TASK 2');

const up = "lorem ipsum dolor sit amet";

console.log(up.toUpperCase());



/// TASK 3
console.log(' ');
console.log('-- TASK 3');

const users = [
 { name: "Temo", age: 1 },
 { name: "Lasha", age: 28 },
 { name: "Ana", age: 27 }
];

const sort = (users) => users.sort((a, b) => a.age - b.age);
console.log(sort(users));