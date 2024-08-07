"use strict";
const form = document.getElementById("registrazione");

form.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const URL = form.action;

  try {
    const formData = new FormData(form);

    const response = await postFormDataAsJson({ URL, formData });

    console.log({ response });
  } catch (error) {
    console.log(error);
  }
}

async function postFormDataAsJson({ URL, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  console.log(formDataJsonString);
  const fetchOptions = {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: formDataJsonString,
  };

  const response = await fetch(URL, fetchOptions);
  return response;
}
