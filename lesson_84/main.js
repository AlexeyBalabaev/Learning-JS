"use strict";

let form = document.querySelector('.form');

form.onclick = function (event) {
  event.target.style.backgroundColor = 'yellow';

  setTimeout(() => {
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    event.target.style.backgoundColor = '';
  }, 0);
};

/* ----- */
let example3 = document.querySelector('.example-area3');

for (let elem of example3.querySelectorAll('*')) {
  elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
  elem.addEventListener("click", e => alert(`Bubling: ${elem.tagName}`));
}