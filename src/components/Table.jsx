import { useState, useEffect } from "react";
import Tbody from "./Tbody";

const Table = () => {
  //const [booksList, setBooksList] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  //const [rowCounter, setRowCounter] = useState(0);

   /*useEffect(() => {
  fetch(
    "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA"
  )
    .then((response) => response.json())
    .then((data) => {console.log(data.items)})
    .catch((err) => console.error(err));
}, [])*/

useEffect(() => {
  const getData = async () => {
    const url = "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA";

    try {
      const resp = await fetch (url);
      const data = await resp.json();
      // Do anything you need to do to
      // data before this call:
      console.log(data.items)
      setFetchedData(data.items);
    } catch (err) {
      console.error(err);
    }
  }

  getData();
}, []);
  
/*useEffect(() => {
    fetch(
        "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA"
      )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedData(data);
        console.log(data)
      });
  }, []);
*/
    /*const fetchBooks = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length > 0) {
          setFetchedData(data);
          console.log(fetchedData)
        }
      } catch (e) {
        console.error(e);
      }
    };

    useEffect(() => {
        fetchBooks("https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA");
    }, [])*/

/*  useEffect(() => {
    setBooksList(fetchedData.items);
    //console.log(fetchedData.items);
    console.log(booksList);
  }, [fetchedData]);*/

  return (
    <div className="container pt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Authors</th>
            <th scope="col">Print Type</th>
          </tr>
        </thead>
          <Tbody fetchedData={fetchedData} />
      </table>
    </div>
  );
};

export default Table;
