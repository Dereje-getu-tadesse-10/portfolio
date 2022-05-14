


fetch("./projects/projets.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {

    data.forEach((element) => {
      // console.log(element);
      const me = document.querySelector(".myProjectItems");
      const projets = document.createElement("div");
      projets.classList.add("items");
      projets.classList.add("projectItems");
      const img = document.createElement("img");
      img.classList.add("ItemsImages");
      const title = document.createElement("h2");
      const paragraphe = document.createElement("p");
      const ul = document.createElement("ul");
      ul.classList.add("languagesListe");
      const button = document.createElement("a");
      button.classList.add("projectLink");
      // modale
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
      // la listes des langages
      // for (let index = 0; index < element.languages.length; index++) {
      //   const li = document.createElement("li");
      //   li.appendChild(document.createTextNode(element.languages[index]));
      //   ul.appendChild(li);
      // }
      projets.appendChild(img);
      projets.appendChild(title);
      projets.appendChild(paragraphe);
      projets.appendChild(ul);
      projets.appendChild(button);
      me.appendChild(projets);

      function animationProject(){
        const scroll = gsap.timeline();
        scroll.to('.myProjectItems', {
          scrollTrigger: {
            trigger: '.projectItems',
            start: 'top 60%',
            onEnter: () => {
              scroll.to('.projectItems', {
                autoAlpha: 1,
                stagger:.3,
                duration:.3,
              })
            }
          }
        })
      }
      animationProject();
    });
  });

  // add element modal
