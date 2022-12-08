/// TASK 1

const hider = addEventListener("click", hideAction);
let hidden = false;

function hideAction() {
  hidden = !hidden;
  if (hidden) {
    text.style.visibility = 'hidden';
  } else {
    text.style.visibility = 'visible';
  }
}


/// TASK 2

const card2_3 = document.createElement('div');
card2_3.setAttribute("id","card2_3");
task2_3.appendChild(card2_3);

const h2 = document.createElement("h2");
h2.innerHTML = "Vaniko";
card2_3.appendChild(h2);

const aLink = document.createElement("a");
aLink.setAttribute('href','#');
aLink.innerHTML = 'Go to Profile';
card2_3.appendChild(aLink);


/// TASK 3

card2_3.style.backgroundColor = "red";



/// TASK 4 - other method for TASK 2

task4.insertAdjacentHTML(
  "beforeend",
  `<div id="card4">
  <h2>Nika</h2>
  <a href="#">Go To Profile</a>
  </div>`
);

card4.style.backgroundColor = "green";
