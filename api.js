function getPosts(name) {
  fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${name}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getPosts("@dakabieui");
