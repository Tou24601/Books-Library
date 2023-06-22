import { useState, useEffect } from "react";
import { fetchBooks } from "../services/apiBooks.jsx";
import Table from "../components/Table";

const Home = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchBooks.then((data) => {
      setFetchedData(data.items);
    });
  }, []);

  return (
    <>
      <Table tableData={fetchedData} />
    </>
  );
};

export default Home;
