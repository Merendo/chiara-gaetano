"use strict";
const form = document.getElementById("login");

form.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;

  const URL = form.action;
  try {
    const formData = new FormData(form);

    const response = await postFormDataAsJson({ URL, formData });
  } catch (error) {
    console.log(error);
  }
}

async function postFormDataAsJson({ URL, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  const fetchOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: formDataJsonString,
  };
  const response = await fetch(URL, fetchOptions);

  if (response.ok) {
    window.location.replace("Risultati");
  }
  if (response.status != 200) {
    const label = document.querySelector(".invalid-label");

    label.classList.add("active");
  }
}
