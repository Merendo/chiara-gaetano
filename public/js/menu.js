"use strict";

//? animazione hamburgher

const dropdown = document.querySelector(".dropdown_menu");
const buttonHamb = document.querySelector(".toggle_btn");
const buttonIconHamb = document.querySelector(".toggle_btn i");

buttonHamb.addEventListener("click", () => {
  const isactive =
    dropdown.classList.toggle(
      "active"
    ); /*al click viene aggiunta la classe active o tolta */

  buttonIconHamb.classList = isactive
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"; /*operatore ternario per far cambiare hamburgher da 3 linee a x */
});

const pagina = document.getElementById("login");

// Go Top
if (!pagina) {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 400) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
}

const menu = document.getElementById("menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target)) {
    menu.style.opacity = 0;
  }
});
