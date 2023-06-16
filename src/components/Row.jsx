import { useState, useEffect } from "react";
import SelectedRow from "./SelectedRow"

const Row = ({data, rowNum}) => {

    const [isHighlighted, setIsHighlighted] = useState(false)

    const handleRowClick = () => {
        setIsHighlighted(!isHighlighted);
        //console.log()
      };

  return (
    <div>
    <div onClick={handleRowClick} className={isHighlighted ? "highlighted d-flex flex-row flex-wrap border border-end-0 border-start-0 border-bottom-0 " : "d-flex flex-row flex-wrap border border-end-0 border-start-0 border-bottom-0"}>
      <div className="col-4 p-3"><p className={isHighlighted ? "fs-5 fw-bold" : ""}>{data.volumeInfo.title}</p></div>
      <div className="col-4 p-3"><p className={isHighlighted ? "fs-5 fw-bold" : ""}>{data.volumeInfo.authors}</p></div>
      <div className="col-4 p-3"><p className={isHighlighted ? "fs-5 fw-bold" : ""}>{data.volumeInfo.printType}</p></div>
      <SelectedRow data={data} isHighlighted={isHighlighted} />
    </div>
    </div>
  );
};

export default Row;
