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

      //   title.textContent = data.items[0].title;
      //   li = data.items[0].link;
      //   link.setAttribute("href", li);

      let blog = data.items;
      console.log(blog);
      blog.forEach((element) => {
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
        container.appendChild(img);
        container.appendChild(titleH);
        container.appendChild(lnk);
      });
    });
}

getPublications("dakabieui");
