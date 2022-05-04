const form = document.querySelector("form");
const sujet = document.querySelector(".sujet");
const email = document.querySelector(".email");
const message = document.querySelector(".text");

form.addEventListener("submit", (e) => {
  // value
  let valueSujet = sujet.value;
  let valueEmail = email.value;
  let valueMessage = message.value;

  const bodyForm = new FormData(form);

  e.preventDefault();
  let url = "./form.php";

  fetch('./form.php', {
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
