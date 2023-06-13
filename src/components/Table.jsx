import Row from "./Row"

const Table = () => {
  fetch("https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  return (
    <div className="container">
      <table className="table table-borderless"> 
      </table>
    </div>
  );
};

export default Table;
