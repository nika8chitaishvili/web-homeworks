/// EXERCISE 1

console.log('-- EXERCISE 1');

const users = [
 { name: "Temo", age: 25 },
 { name: "Lasha", age: 21 },
 { name: "Ana", age: 28 },
];


function checkMin(users) {
 let minAge = users[0].age;
 let name = users['0'].name;

 for (let item of users) {
   if (item.age < minAge) {
     minAge = item.age;
     name = item.name;
   }
 }

 return 'Youngest age: ' + minAge + ', Name: ' + name;

}

function checkMax(users) {
  let maxAge = users[0].age;
  let name = users['0'].name;
 
  for (let item of users) {
    if (item.age > maxAge) {
      maxAge = item.age;
      name = item.name;
    }
  }
 
  return 'Oldest age: ' + maxAge + ', Name: ' + name;
 
 }

console.log(checkMin(users)); // Lasha
console.log(checkMax(users)); // Ana



/// EXERCISE 2

console.log(' ');
console.log('-- EXERCISE 2');


const user1 = {
  name: 'Nika',
  lastName: 'Chitaishvili',
  age: 28,
  about: 'React Developer'
}
const user2 = {
  ...user1
}
console.log('User 1 info:', user1);
console.log('User 2 info:', user2);



/// EXERCISE 3

console.log(' ');
console.log('-- EXERCISE 3');

let round = 0;
let player1 = 0;
let player2 = 0;

function rollDice(){
 return parseInt(Math.random() * 6)+1;
}

while (player1 !== 3 && player2 !== 3 ) {
  round++;
  player1 = rollDice();
  player2 = rollDice();
 console.log('ROUND ' + round + ': ', player1, player2);
 result();
}

function result(){
 if(player1 == 3 && player2 !==3){
  console.log('WINNER: Player 1 - in ROUND ' + round);
 }else if(player1 !==3 && player2 ==3){
  console.log('WINNER: Player 2 - in ROUND ' + round);
 }else if(player1 ==3 && player2 ==3) {
  console.log('DRAW: in ROUND ' + round);
 }
}

