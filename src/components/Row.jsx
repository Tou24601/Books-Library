import { useState } from "react";
import SelectedRowComp from "./SelectedRowComp";
import XSign from "../assets/x_sign.png";

const Row = ({ data, tableData }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleRowClick = () => {
    setIsHighlighted(true);
  };

  const handleCloseClick = () => {
    setIsHighlighted(false);
  };

  return (
    <div className="position-relative">
      <img
        src={XSign}
        alt="close"
        onClick={handleCloseClick}
        className={
          isHighlighted ? "closeSign position-absolute clickable" : "nonvisible"
        }
      />
      <div
        onClick={handleRowClick}
        className={
          isHighlighted
            ? "highlighted d-flex flex-row flex-wrap border border-end-0 border-start-0 border-bottom-0"
            : "d-flex flex-row flex-wrap border border-end-0 border-start-0 border-bottom-0 clickable"
        }
      >
        <div className="col-4 p-3">
          <p className={isHighlighted ? "fs-5 fw-bold" : ""}>
            {data.volumeInfo.title}
          </p>
        </div>
        <div className="col-4 p-3">
          <p className={isHighlighted ? "fs-5 fw-bold" : ""}>
            {data.volumeInfo.authors}
          </p>
        </div>
        <div className="col-4 p-3">
          <p className={isHighlighted ? "fs-5 fw-bold" : ""}>
            {data.volumeInfo.printType}
          </p>
        </div>
        <SelectedRowComp
          data={data}
          isHighlighted={isHighlighted}
          tableData={tableData}
        />
      </div>
    </div>
  );
};

export default Row;
