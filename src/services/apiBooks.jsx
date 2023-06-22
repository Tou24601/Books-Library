const url =
  "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA";

const fetchBooks = fetch(url)
  .then((resp) => resp.json())
  .catch((err) => console.log(err));

export { fetchBooks };
