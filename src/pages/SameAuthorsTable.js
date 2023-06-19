import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Table from "../components/Table";

const SameAuthorsTable = () => {
  const [tableData, setTableData] = useState([]);

  const location = useLocation();
  const data = location.state;

  const params = useParams();
  const authorsNames = params.sameAuthorsTable.split("_").join(" ");

  useEffect(() => {
    const newArr = data.filter(
      (item) => item.volumeInfo.authors[0] === authorsNames
    );
    setTableData(newArr);
  }, [data]);

  return <Table tableData={tableData} />;
};

export default SameAuthorsTable;
