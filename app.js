const form = document.querySelector("form");
const sujet = document.querySelector(".sujet");
const email = document.querySelector(".email");
const message = document.querySelector(".text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let url = "./form.php";

  let valueSujet = sujet.value;
  let valueEmail = email.value;
  let valueMessage = message.value;

  // const html element
  const errors = document.querySelector(".errors");
  console.dir();

  if (valueEmail == "") {
    errors.firstElementChild.nextSibling.data = "email vide ou incorrecte";
  }
  if (valueSujet == "") {
    errors.firstElementChild.nextElementSibling.nextSibling.data =
      "sujet vide ou incorrecte";
  }

  if (valueMessage == "") {
    errors.firstElementChild.nextElementSibling.nextElementSibling.nextSibling.data =
      "Message vide ou incorrecte";
  }

  const bodyForm = new FormData(form);

  fetch("./form.php", {
    method: "POST",
    body: bodyForm,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
