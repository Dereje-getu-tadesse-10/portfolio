const title = document.querySelector(".titreBlog");
const description = document.querySelector(".descriptionBlog");
const link = document.querySelector(".linkblog");
const container = document.querySelector(".card");

function getPublications(name) {
  let me = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${name}`;
  fetch(me)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let blog = data.items;
      console.log(blog);
      blog.forEach((element) => {
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("blogContainer");
        let img = document.createElement("img");
        img.setAttribute("src", element.thumbnail);

        let titleH = document.createElement("p");

        let txtTitle = document.createTextNode(element.title);
        titleH.appendChild(txtTitle);

        let lnk = document.createElement("a");
        lnk.textContent = "lire la suite";

        // ajout blog dans la div container
        lnk.setAttribute("href", element.link);
        lnk.classList.add("lienBlog");
        mainContainer.appendChild(img);
        mainContainer.appendChild(titleH);
        mainContainer.appendChild(lnk);
        container.appendChild(mainContainer);
        // container.insertBefore(mainContainer, null);
      });
    });
}

getPublications("dakabieui");
