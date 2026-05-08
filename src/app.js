import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let who = ["The dog", "My grandma", "The mailman", "My bird"];

  let action = ["ate", "peed on", "crushed", "broke"];

  let what = ["my homework", "my phone", "the car"];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch"
  ];

  let whoRandom = Math.floor(Math.random() * who.length);

  let actionRandom = Math.floor(Math.random() * action.length);

  let whatRandom = Math.floor(Math.random() * what.length);

  let whenRandom = Math.floor(Math.random() * when.length);

  let randomWho = who[whoRandom];

  let randomAction = action[actionRandom];

  let randomWhat = what[whatRandom];

  let randomWhen = when[whenRandom];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  document.getElementById("excuse").innerHTML = excuse;

};