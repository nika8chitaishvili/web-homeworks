/// TASK 1

const modal = document.getElementById("modalDIV");
const btn = document.getElementById("modalBTN");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

/// TASK 2


const task2BTN = document.getElementById("task2BTN");

task2BTN.onclick = function() {
 document.body.style.backgroundColor = 'red';
}
