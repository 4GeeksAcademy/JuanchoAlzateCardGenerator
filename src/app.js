import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btnCambio").addEventListener("click", () => {
    document.queryselector;
  });
};

const numbersRandom = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
};

const iconsRandom = () => {
  let icons = ["diamond", "spade", "heart", "club"];
  let indexIcons = Math.floor(Math.random() * icons.length);
};
