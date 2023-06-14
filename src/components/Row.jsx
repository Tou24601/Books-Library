const Row = () => {

    const handleRowClick = (e) => {
        console.log(e.target.parentElement)
    }
  return (
    <tr onClick={(e) => handleRowClick(e)}>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );
};

export default Row;