fetch("./projects/projets.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      // console.log(element);
      const me = document.querySelector(".myProjectItems");
      const projets = document.createElement("div");
      projets.classList.add("items");
      const img = document.createElement("img");
      img.classList.add("ItemsImages");
      const title = document.createElement("h2");
      const paragraphe = document.createElement("p");
      const ul = document.createElement("ul");
      ul.classList.add("languagesListe");
      const button = document.createElement("a");
      button.classList.add("projectLink");
      // text
      const titleTxt = document.createTextNode(element.nom);
      title.appendChild(titleTxt);
      const paragrapheTxt = document.createTextNode(element.description);
      paragraphe.appendChild(paragrapheTxt);
      const buttonTxt = document.createTextNode("lien du projet");
      button.appendChild(buttonTxt);
      // img
      img.setAttribute("src", element.img);
      //lien
      button.setAttribute("href", element.lien);
      console.log(element.lien);
      // la listes des langages
      for (let index = 0; index < element.languages.length; index++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element.languages[index]));
        ul.appendChild(li);
      }

      projets.appendChild(img);
      projets.appendChild(title);
      projets.appendChild(paragraphe);
      projets.appendChild(ul);
      projets.appendChild(button);

      me.appendChild(projets);
    });
  });
