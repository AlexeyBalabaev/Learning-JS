"use strict";

function countRabbits() {
  for(let i = 1; i <= 3; i++) {
    alert("The rabbit is number " + i);
  }
}

/* ----- */
let button1 = document.querySelector('.button1');

button1.onclick = function() {
  alert('Thanks!');
};

/* ----- */
let button2 = document.querySelector('.button2');

function sayThanks() {
  alert('Thanks you!');
}

button2.onclick = sayThanks;

/* ----- */
let button3 = document.querySelector('.button3');

function handler1() {
  alert('Thanks');
};

function handler2() {
  alert('Thanks one more time!');
}

button3.onclick = () => alert("Hello!");
button3.addEventListener("click", handler1);   // Thanks
button3.addEventListener("click", handler2);   // Thanks one more time

/* ----- */
let button4 = document.querySelector('.button4');

button4.onclick = function(event) {
  alert(event.type + " on " + event.currentTarget);
  alert("Coordinats: " + event.clientX + ":" + event.clientY);
};

/* ----- */
let button5 = document.querySelector('.button5');

button5.addEventListener('click', {
  handleEvent(event) {
    alert(event.type + " on " + event.currentTarget);
  }
});

/* ----- */
let button6 = document.querySelector('.button6');

class Menu {
  handleEvent(event) {
    switch(event.type) {
      case 'mousedown':
        button6.innerHTML = "the button is pressed";
        break;
      case 'mouseup':
        button6.innerHTML += "...and released.";
        break;
    }
  }
}

let menu = new Menu();

button6.addEventListener('mousedown', menu);
button6.addEventListener('mouseup', menu);

/* ----- */
let button7 = document.querySelector('.button7');

class Menu2 {
  handleEvent(event) {
    // musedown -> onMousedown
    let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
    this[method](event);
  }

  onMousedown() {
    button7.innerHTML = "the button of mouse is pressed";
  }

  onMouseup() {
    button7.innerHTML += "...and released.";
  }
}

let menu2 = new Menu2();
button7.addEventListener('mousedown', menu2);
button7.addEventListener('mouseup', menu2);