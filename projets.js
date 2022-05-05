fetch("./projets.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((element) => {
      console.log(element);
      const me = document.querySelector(".myProjectItems");
      const projets = document.createElement("div");
      const title = document.createElement("h1");
      const paragraphe = document.createElement("p");
      const ul = document.createElement("ul");

      // text
      const titleTxt = document.createTextNode(element.nom);
      title.appendChild(titleTxt);
      const paragrapheTxt = document.createTextNode(element.description);
      paragraphe.appendChild(paragrapheTxt);

    //   la listes des langages
      for (let index = 0; index < element.languages.length; index++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element.languages[index]));
        ul.appendChild(li);
      }

      projets.appendChild(title);
      projets.appendChild(paragraphe);
      projets.appendChild(ul);

      me.appendChild(projets);
    });
  });
