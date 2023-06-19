import { useState, useEffect } from "react";
import Table from "./Table";

const Main = () => {
  //to delete

  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setFetchedData(data.items);
      } catch (err) {
        alert("Error");
      }
    };

    getData();
  }, []);

  return (
    <>
      <Table tableData={fetchedData} />
    </>
  );
};

export default Main;
