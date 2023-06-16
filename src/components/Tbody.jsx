import { useState, useEffect } from "react";
import Row from "./Row";

const Tbody = ({ fetchedData }) => {


  return (
    <tbody>
      {fetchedData.map((el) => {
        return (
          <Row key={el.id} data={el}  />
        );
      })}
    </tbody>
  );
};

export default Tbody;
