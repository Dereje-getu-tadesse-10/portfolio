function getPublications(name) {
  let me = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${name}`;
  fetch(me)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.items[0].title);
      console.log(data.items[0].thumbnail);
      console.log(data.items[0].categories);
    });
}

getPublications("dakabieui");
