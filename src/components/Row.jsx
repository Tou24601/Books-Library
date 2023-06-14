const Row = ({key, title, authors, printType}) => {

    const handleRowClick = (e) => {
        console.log(e.target.parentElement)
    }
  return (
    <tr onClick={(e) => handleRowClick(e)}>
      <th scope="row">{key}</th>
      <td>{title}</td>
      <td>{authors}</td>
      <td>{printType}</td>
    </tr>
  );
};

export default Row;