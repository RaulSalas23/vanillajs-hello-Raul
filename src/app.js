/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function getRandomElement(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  function generateExcuse() {
    let excuse =
      getRandomElement(who) +
      " " +
      getRandomElement(action) +
      " " +
      getRandomElement(what) +
      " " +
      getRandomElement(when) +
      ".";
    return excuse;
  }

  // se muestran las excusas

  document.getElementById("excuse").innerHTML = generateExcuse();
};
