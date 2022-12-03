/// LECTURE 1
console.log('LECTURE 1');
console.log(' ');
console.log(' ');


//HOMEWORK 1
console.log('--- TASK 1');

function compare(a,b){
  if(a==b){
      return 'Result HW1 : ' + 'a equals to b';
  }else{
      return 'Result HW1 : ' + 'a doesnt equal to b';
  }
}

console.log(compare(-10,37.5));
console.log(compare(0.3,'0.3'));


//HOMEWORK 2
console.log(' ');
console.log('--- TASK 2');

function calculateCelsius(farenheit){
  if(typeof farenheit == "number"){
      return 'Result HW2 : ' + (farenheit-32)*5/9;
  }else{
      return 'Result HW2 : False input'
  }
}

console.log(calculateCelsius(-10));
console.log(calculateCelsius('s'));



//HOMEWORK 3
console.log(' ');
console.log('--- TASK 3');

function calculator (a,b,op){
  if(typeof a !== "number" & typeof b !== "number" || op !== '+' & op !== '-' & op!=='/' & op!== '*'){
      return 'Result HW3 : False type input';
  }else{
      if(op == '+'){
          return 'Result HW3 : ' + a+b;
          }else{
              if(op == '-'){
                  return 'Result HW3 : ' + a-b;
              }else{
                  if(op == '*'){
                      return 'Result HW3 : ' + a*b;
                  }else{
                      if(op == '/'){
                          return 'Result HW3 : ' + a/b;
                      }
                  }
              }
          }
  }
}

console.log(calculator(-5,0.22,'*'));
console.log(calculator(5,2,'k'));
console.log(calculator('5',2,'/'));




