"use strict";

let task3 = document.querySelector('.task3');

task3.addEventListener("click", () => alert("1"));
task3.removeEventListener("click", () => alert("1"));

task3.onclick = () => alert(2);