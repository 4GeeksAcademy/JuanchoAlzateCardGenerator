import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numbersCard = [
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
let iconCard = ["♠", "♥", "♦", "♣"];
let contNum = 0;
let contIcon = 0;
const inicio = () => {
  document.querySelector(".btnAleatorio").onclick = cambio;
  document.querySelector(".btnCambio").onclick = cambioEnOrden;
};
const cambioEnOrden = () => {
  document.querySelector(".numberCard").innerHTML = numbersCard[contNum];
  if (iconCard[contIcon] === "♥" || iconCard[contIcon] === "♦") {
    document.querySelector(".iconUp").innerHTML = iconCard[contIcon];
    document.querySelector(".iconDown").innerHTML = iconCard[contIcon];
  }
  document.querySelector(".iconUp").innerHTML = iconCard[contIcon];
  document.querySelector(".iconDown").innerHTML = iconCard[contIcon];
  contIcon++;
  if (contIcon == 3) contIcon = 0;
  contNum++;
  if (contNum == 13) contNum = 0;
};

const cambio = () => {
  let itemNum = Math.floor(Math.random() * 12);
  let itemIcon = Math.floor(Math.random() * 4);
  document.querySelector(".numberCard").innerHTML = numbersCard[itemNum];
  document.querySelector(".iconUp").innerHTML = iconCard[itemIcon];
  document.querySelector(".iconDown").innerHTML = iconCard[itemIcon];
};
window.onload = inicio;
