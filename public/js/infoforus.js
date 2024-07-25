"use strict";
let presenza = document.querySelector('input[name="presenza"]:checked');
let intolleranze = document.querySelector('input[name="intolleranze"]:checked');
let accompagnatore = document.querySelector(
  'input[name="accompagnatore"]:checked'
);
let navetta = document.querySelector('input[name="navetta"]:checked');
const label = document.querySelector(".invalid-label");
const label2 = document.querySelector(".invalid-label2");
const label3 = document.querySelector(".invalid-label3");
const label4 = document.querySelector(".invalid-label4");

const button = document.getElementById("submit");

button.addEventListener("click", () => {
  if (!presenza) {
    label.classList.add("active"); //! FALLO PER IL LABEL DA MOSTRARE
  }
  if (!intolleranze) {
    label2.classList.add("active"); //! FALLO PER IL LABEL DA MOSTRARE
  }
  if (!accompagnatore) {
    label3.classList.add("active"); //! FALLO PER IL LABEL DA MOSTRARE
  }
  if (!navetta) {
    label4.classList.add("active"); //! FALLO PER IL LABEL DA MOSTRARE
  }
});
