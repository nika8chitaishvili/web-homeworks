/// LECTURE 4
console.log('LECTURE 4');
console.log(' ');
console.log(' ');


/// TASK 1
console.log('-- TASK 1');

function rand(num1,num2,...numbers){
    let mult=1;
    for(i of numbers){
        mult*=i;
    }
    return [num1+num2, mult];
}
console.log('[Sum, Multiply]: '+ '['+rand(1,2,3,4,5,6,7,8,9,10)+']');


/// TASK 2
console.log(' ');
console.log('-- TASK 2');

const user={
 name:'Nika'
}
const{address:{city}={city:'Poti'}}=user;
console.log('City: ',city);


/// TASK 3
console.log(' ');
console.log('-- TASK 3');

const user1 = {
 name: "Nika",
 address: {
   city: "Poti",
 },
 skills: ["JS", "React", "Java"],
};

const user2 = {
 ...user1,
};

user1.address.city = "Utrecht";
user1.skills[1] = "C#";

console.log(user1);
console.log('New assigned city: ' + user1.address.city);
console.log('New assigned skills: '+  user1.skills);
