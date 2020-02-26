"use strict";

let field = document.querySelector('.field');
let ball = document.querySelector('.ball');

ball.getElementsByClassName.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
ball.getElementsByClassName.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';