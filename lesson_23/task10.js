"use sctrict";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);

shuffle(arr);
alert(arr);