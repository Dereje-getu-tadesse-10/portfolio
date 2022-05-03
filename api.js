function getPublications(name) {
  let me = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${name}`;
  fetch(me)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

getPublications("dakabieui");
