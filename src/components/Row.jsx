import { useState, useEffect } from "react";

const Row = ({data, rowNum}) => {

    const [isHighlighted, setIsHighlighted] = useState(false)

    const handleRowClick = () => {
        setIsHighlighted(!isHighlighted);
        console.log(data.volumeInfo.description)
      };

  return (
    <tr onClick={handleRowClick} className={isHighlighted ? "highlighted" : ""}>
      <td>{data.volumeInfo.title}</td>
      <td>{data.volumeInfo.authors}</td>
      <td>{data.volumeInfo.printType}</td>
    </tr>
  );
};

export default Row;
