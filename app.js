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

  const errMail = document.querySelector('.emailError');
  const errSujet = document.querySelector('.sujetError');
  const errMessage = document.querySelector('.messageError');
  if (valueEmail == "") {
    errMail.textContent = "Email vide";
  }
  if(!regExMail(valueEmail)){
    errMail.textContent = "Email incorrecte";
  }
  if (valueSujet == "") {
    errSujet.textContent="sujet vide";
  }
  if (valueMessage == "") {
    errMessage.textContent = "Message vide";
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

    });
});


function regExMail(email) {
  let rep = 0;
  const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  email.match(regEx) ? rep = 1 : rep = 0;
  return rep;
}
