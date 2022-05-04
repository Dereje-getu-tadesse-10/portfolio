const form = document.querySelector("form");
const sujet = document.querySelector(".sujet");
const email = document.querySelector(".email");
const message = document.querySelector(".text");

form.addEventListener("submit", (e) => {
  // value
  let valueSujet = sujet.value;
  let valueEmail = email.value;
  let valueMessage = message.value;

  const data = new FormData();

  e.preventDefault();
  let url = "./form.php";

  fetch(url, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
