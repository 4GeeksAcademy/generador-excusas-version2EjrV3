import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let who = ["The dog", "My grandma", "The mailman", "My bird"];

  let action = ["ate", "peed on", "crushed", "broke"];

  let what = ["my homework", "my phone", "the car"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];

  function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const excuse = `
    ${randomItem(who)}
    ${randomItem(action)}
    ${randomItem(what)}
    ${randomItem(when)}
  `;

  document.getElementById("excuse").innerHTML = excuse;

};