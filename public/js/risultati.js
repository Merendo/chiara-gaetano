"use strict";
// const form = document.getElementById("form");

// form.addEventListener("submit", handleFormSubmit);

// async function handleFormSubmit(e) {
//   e.preventDefault();
//   const form = e.currentTarget;

//   const URL = form.action;

//   fetch(URL)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.Cognome);
//       let markup;
//       data.forEach((user) => {
//         markup = `<li><p>${user.Cognome}</li>`;
//       });
//       document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
//     })
//     .catch((error) => console.log(error));
// }

async function load() {
  const value = await fetch("Risultati/data");

  const array = await value.json();
  console.log(array);
  let markup;

  array.forEach((user) => {
    markup = `<li><b>${user.Nome}
    ${user.Cognome}</b><br>
    Presenza: ${user.Presenza}<br>
    Telefono: ${user.Telefono}<br>
    Email: ${user.Email}<br>
    NumeroFamiglia: ${user.NumeroFamiglia}<br>
    Intolleranze: ${user.Intolleranze}<br>
    IntolleranzeScritte: ${user.IntolleranzeScritte}<br>
    Esigenze: ${user.Esigenze}<br>
    Accompagnatore: ${user.Accompagnatore}<br>
    NomeA: ${user.NomeA}<br>
    CognomeA: ${user.CognomeA}<br>
    Navetta: ${user.Navetta}<br>
    Extra: ${user.Extra}</li>`;
    console.log(markup);
    document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
  });
}

load();
