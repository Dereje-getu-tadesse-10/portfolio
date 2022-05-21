const title = document.querySelector(".titreBlog");
const description = document.querySelector(".descriptionBlog");
const link = document.querySelector(".linkblog");
const container = document.querySelector(".card");

function getPublications(name) {
  let me = `https://mediumpostapi.herokuapp.com/?usermedium=${name}`;
  fetch(me)
      .then((res) => res.json())
      .then((data) => {
        let blog = data.dataMedium;
        console.log(blog);
        blog.forEach((element) => {
          const mainContainer = document.createElement("div");
          mainContainer.classList.add("blogContainer");
          let img = document.createElement("img");
          img.setAttribute("src", element.image);
          let titleH = document.createElement("p");
          titleH.classList.add('titleBlog');
          const desc = document.createElement('p');
          desc.classList.add('descBlog');
          const descTxt = document.createTextNode(element.description);
          desc.appendChild(descTxt);

          let txtTitle = document.createTextNode(element.title);
          titleH.appendChild(txtTitle);

          let lnk = document.createElement("a");
          lnk.textContent = "lire la suite";

          // ajout blog dans la div container
          lnk.setAttribute("href", element.link);
          lnk.classList.add("lienBlog");
          mainContainer.appendChild(img);
          mainContainer.appendChild(titleH);
          mainContainer.appendChild(desc)
          mainContainer.appendChild(lnk);
          container.appendChild(mainContainer);

          function animateBlog() {
            const scroll = gsap.timeline();
            scroll.to('.card', {
              scrollTrigger: {
                trigger: '.blogContainer',
                start: 'top 50%',
                onEnter: () => {
                  scroll.to('.blogContainer',{
                    autoAlpha:1,
                    stagger:.3,
                    duration:.4
                  })
                }
              }
            })
          }
          animateBlog()

        })

      })
}

getPublications("dakabieui");
