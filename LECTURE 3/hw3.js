/// LECTURE 3
console.log('LECTURE 3');
console.log(' ');
console.log(' ');

/// TASK 1
console.log('--- TASK 1');

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


/// TASK 2
console.log(' ');
console.log('--- TASK 2');

const user1 = {
  name: "Nika",
  lastName: "Chitaishvili",
  age: 28,
  location: "Tbilisi",
};

const user2 = user1;
console.log(user1); 
console.log(user2); 


/// TASK 3
console.log(' ');
console.log('--- TASK 3');

let rounds = 0;
let player1 = 0;
let player2 = 0;

function rollDice(){
 return parseInt(Math.random() * 6)+1;
}

while (player1 !== 3 && player2 !== 3 ) {
  rounds++;
  player1 = rollDice();
  player2 = rollDice();
 console.log('ROUND ' + rounds + ': ', player1, player2);
 declareWinner();
}

function declareWinner(){
 if(player1 == 3 && player2 !==3){
  console.log('WINNER: Player 1 - in ROUND ' + rounds);
 }else if(player1 !==3 && player2 ==3){
  console.log('WINNER: Player 2 - in ROUND ' + rounds);
 }else if(player1 ==3 && player2 ==3) {
  console.log('DRAW: in ROUND ' + rounds);
 }
}




