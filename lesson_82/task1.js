"use strict";

document.onclick = function(e) { // показывает координаты точки клика
  coords.innerHTML = e.clientX + ':' + e.clientY;
};

let coordsTask = field.getBoundingClientRect();

let answer = [

  [ // 1
    coordsTask.left, 
    coordsTask.top
  ],

  [ // 2
    coordsTask.right, 
    coordsTask.bottom
  ],
  
  [ // 3
    coordsTask.left + field.clientLeft, 
    coordsTask.top + field.clientTop
  ],
  
  [ // 4
    coordsTask.left + field.clientLeft + field.clientWidth,
    coordsTask.top + field.clientTop + field.clientHeight
  ],

];

// the same 4
let answer4 = [ // 4
  coordsTask.right - parseInt(getComputedStyle(field).borderRightWidth),
  coordsTask.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
];

alert(answer.join('  '));