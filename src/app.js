/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCarta() {
  let palos = ['♥', '♠', '♣', '♦'];
  let valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


  let palo = palos[Math.floor(Math.random() * palos.length)];
  let valor = valores[Math.floor(Math.random() * valores.length)];


  let carta = document.getElementById('carta');
  let colorClase = (palo === '♥' || palo === '♦') ? 'rojo' : 'negro';
  carta.innerHTML = `
    <div class="palo palo-top-left ${colorClase}">${palo}</div>
    <div class="valor">${valor}</div>
    <div class="palo palo-bottom-right ${colorClase}">${palo}</div>
  `;
}
window.onload = generarCarta;

document.getElementById('btnGenerar').addEventListener('click', generarCarta);