const form = document.querySelector("form");
const sujet = document.querySelector(".sujet");
const email = document.querySelector(".email");
const message = document.querySelector(".text");

form.addEventListener("submit", (e) => {
  let valueSujet = sujet.value;
  let valueEmail = email.value;
  let valueMessage = message.value;

  const divErr = document.querySelector(".errors");
  const errMail = document.querySelector(".emailError");
  const errSujet = document.querySelector(".sujetError");
  const errMessage = document.querySelector(".messageError");
  const merci = document.querySelector(".merci");
  e.preventDefault();
  let url = "./form.php";
  const ct = new FormData(form);
  fetch(url, {
    method: "POST",
    body: ct,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.validation);
      if (data.validation) {
        form.reset();
        errMail.textContent = "";
        errSujet.textContent = "";
        errMessage.textContent = "";
        divErr.style.backgroundColor = "green";
        merci.textContent = "Mecri !";
      } else {
        divErr.style.backgroundColor = "";
        merci.textContent = "";
      }
    });

  if (valueEmail == "") {
    divErr.style.visibility = "visible";
    errMail.textContent = "Email vide";
  } else if (!regExMail(valueEmail)) {
    divErr.style.visibility = "visible";
    errMail.textContent = "Email incorrecte";
  } else {
    errMail.textContent = "";
  }
  if (valueSujet == "") {
    divErr.style.visibility = "visible";
    errSujet.textContent = "sujet vide";
  } else {
    errSujet.textContent = "";
  }
  if (valueMessage == "") {
    divErr.style.visibility = "visible";
    errMessage.textContent = "Message vide";
  } else {
    errMessage.textContent = "";
  }
});

function regExMail(email) {
  let isValid = 0;
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  email.match(regEx) ? (isValid = 1) : (isValid = 0);
  return isValid;
}
