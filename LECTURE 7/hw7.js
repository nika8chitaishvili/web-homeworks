/// TASK 1

document.getElementById("hider").addEventListener("click", hideAction);

let hidden = false;

function hideAction() {
  hidden = !hidden;
  if (hidden) {
    document.getElementById('text').style.visibility = 'hidden';
  } else {
    document.getElementById('text').style.visibility = 'visible';
  }
}


/// TASK 2

const card = document.createElement('div');
card.setAttribute("id","card");
document.getElementById("task2").appendChild(card);


const h2 = document.createElement("h2");
h2.innerHTML = "Vaniko";
document.getElementById("card").appendChild(h2);

const aLink = document.createElement("a");
aLink.setAttribute('href','#');
aLink.innerHTML = 'Go to Profile';
document.getElementById("card").appendChild(aLink);



/// TASK 3

document.getElementById("card").style.backgroundColor = "red";
