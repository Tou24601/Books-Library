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
      <div className="col-4 p-3">{data.volumeInfo.title}</div>
      <div className="col-4 p-3">{data.volumeInfo.authors}</div>
      <div className="col-4 p-3">{data.volumeInfo.printType}</div>
      <SelectedRow data={data} isHighlighted={isHighlighted} />
    </div>
    </div>
  );
};

export default Row;
