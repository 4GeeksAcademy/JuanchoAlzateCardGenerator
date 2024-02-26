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
  document.querySelector("body").insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
        <span class="iconUp">♠</span>
        <span class="numberCard">7</span>
        <span class="iconDown">♠</span>
    </div>
    <div>
      <button class="btnCambio">Cambiar Carta</button>
      <button class="btnAleatorio">Cambio aleatorio</button>
    </div>`
  );

  document.querySelector(".btnAleatorio").onclick = cambio;
  document.querySelector(".btnCambio").onclick = cambioEnOrden;
};
const cambioEnOrden = () => {
  document.querySelector(".numberCard").innerHTML = numbersCard[contNum];
  // document.querySelector(".iconUp").innerHTML = iconCard[contIcon];
  // document.querySelector(".iconDown").innerHTML = iconCard[contIcon];
  const iconUp = document.querySelector(".iconUp");
  iconUp.innerHTML = iconCard[contIcon];
  if (contIcon == 1 || contIcon == 2) {
    iconUp.style.color = "red";
  } else {
    iconUp.style.color = "black";
  }

  const iconDown = document.querySelector(".iconDown");
  iconDown.innerHTML = iconCard[contIcon];
  if (contIcon == 1 || contIcon == 2) {
    iconDown.style.color = "red";
  } else {
    iconDown.style.color = "black";
  }

  contIcon++;
  if (contIcon == 3) contIcon = 0;
  contNum++;
  if (contNum == 13) contNum = 0;
};

const cambio = () => {
  let itemNum = Math.floor(Math.random() * 13);
  let itemIcon = Math.floor(Math.random() * 4);
  document.querySelector(".numberCard").innerHTML = numbersCard[itemNum];
  // document.querySelector(".iconUp").innerHTML = iconCard[itemIcon];
  // document.querySelector(".iconDown").innerHTML = iconCard[itemIcon];

  const iconUp = document.querySelector(".iconUp");
  iconUp.innerHTML = iconCard[itemIcon];
  if (itemIcon == 1 || itemIcon == 2) {
    iconUp.style.color = "red";
  } else {
    iconUp.style.color = "black";
  }

  const iconDown = document.querySelector(".iconDown");
  iconDown.innerHTML = iconCard[itemIcon];
  if (itemIcon == 1 || itemIcon == 2) {
    iconDown.style.color = "red";
  } else {
    iconDown.style.color = "black";
  }
};
window.onload = inicio;
