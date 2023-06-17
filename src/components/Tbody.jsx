import { useState, useEffect } from "react";
import Row from "./Row";

const Tbody = ({ tableData }) => {


  return (
    <div>
      {tableData.map((el) => {
        return (
          <Row key={el.id} data={el}  />
        );
      })}
    </div>
  );
};

export default Tbody;
