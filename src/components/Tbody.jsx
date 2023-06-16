import { useState, useEffect } from "react";
import Row from "./Row";

const Tbody = ({ fetchedData }) => {


  return (
    <div>
      {fetchedData.map((el) => {
        return (
          <Row key={el.id} data={el}  />
        );
      })}
    </div>
  );
};

export default Tbody;
