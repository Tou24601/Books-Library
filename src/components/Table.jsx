import { useState } from "react";
import Row from "./Row";

const Table = () => {
  const [booksList, setBooksList] = useState([]);

  fetch(
    "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA"
  )
    .then((response) => response.json())
    .then((data) => console.log(data.items))
    .catch((err) => console.error(err));

  const handleRowClick = (e) => {
    console.log(e.target.parentElement);
  };
  return (
    <div className="container pt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Print Type</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((el) => {
            return (
              <Row
                title={el.volumeInfo.title}
                authors={el.volumeInfo.authors}
                printType={el.volumeInfo.printType}
              />
            );
          })}

          <tr onClick={(e) => handleRowClick(e)}>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
