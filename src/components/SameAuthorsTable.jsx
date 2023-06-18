import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/Table";

const SameAuthorsTable = () => {

  const params = useParams();
  const authorsNames = params.sameAuthorsTable.split("_").join(" ");
  console.log(fetchedData);
  console.log(authorsNames);
  const tableData = [];
  return <Table tableData={tableData} />;
};

export default SameAuthorsTable;
