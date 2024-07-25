"use strict";
//? animazione del countdown

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const weddingDate = new Date(`September 7 2024 14:15:00`);

//? Logica contatore

function updateCountdown() {
  const currentDate = new Date(); /*per prendere la data corrente */
  const diff = weddingDate - currentDate;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); //days
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //hours
  const m = Math.floor(diff / 1000 / 60) % 60; //minutes
  const s = Math.floor(diff / 1000) % 60; //seconds

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updateCountdown, 1000);
