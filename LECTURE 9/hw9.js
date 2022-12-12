/// TASK 1

const modal = document.getElementById("task1modal");
const modalBTN = document.getElementById("modalBTN");
const span = document.getElementsByClassName("close")[0];

modalBTN.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

/// TASK 2

const colorBTN = document.getElementById("colorBTN");
colorBTN.onclick = function() {
    let color = document.getElementById("color").value;

    if(color == 'red' || color == 'RED'){
        document.body.style.backgroundColor = 'red';
    }else if(color == 'blue' || color == 'BLUE'){
        document.body.style.backgroundColor = 'blue';
    }else if(color == 'green' || color == 'GREEN'){
        document.body.style.backgroundColor = 'green';
    }else if(color == 'black' || color == 'BLACK'){
        document.body.style.backgroundColor = 'black';
    }else if(color == 'white' || color == 'WHITE'){
        document.body.style.backgroundColor = 'white';
    }else{
        task2modal.style.display = "block";
        task2alert();
    }
}

// Wrong color alert
const task2alert = function (){
    const task2modal = document.getElementById("task2modal");
    const task2span = document.getElementsById("task2span");
}

// Close button for alert
task2span.onclick = function() {
    task2modal.style.display = "none";
}

// Reverse button for background
const colorReverseBTN = document.getElementById("colorReverseBTN");
colorReverseBTN.onclick = function() {
    document.body.style.backgroundColor = 'white';
}


/// TASK 3

const averageBTN = document.querySelector("#averageBTN");
const inputAverage = document.querySelector("#inputAverage");

averageBTN.addEventListener("click", () => {
  let inputAverage = document.querySelector("#inputAverage").value;
  let inputArr = inputAverage.split(";").map((v) => Number(v));
  let sum = inputArr.reduce((a, b) => a + b, 0);
  console.log(sum / inputArr.length);
});


// Reset calculator
resetBTN.onclick = function() {
    location.reload()  
}
