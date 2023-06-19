import { useState, useEffect } from "react";
import Table from "../components/Table";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const location = useLocation();
  const name = location.pathname;
  console.log(name);

  useEffect(() => {
    const getData = async () => {
      const url =
        "https://www.googleapis.com/books/v1/users/105271509055432424678/bookshelves/1001/volumes?key=AIzaSyARsqoBp8bf1xt5wPcoT3hxfwubIqODnrA";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setFetchedData(data.items);
      } catch (err) {
        console.error(err);
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

export default Home;
