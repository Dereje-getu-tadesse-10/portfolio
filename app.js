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
  const emailE = document.querySelector(".emailError");
  const sujetE = document.querySelector(".sujetError");
  const messageE = document.querySelector(".messageError");
  console.dir(emailE.firstChild);
  if (valueSujet == "") {
  }
  if (valueEmail == "") {
  }
  if (valueMessage == "") {
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
