import Row from "./Row";

const Tbody = ({ tableData }) => {
  return (
    <div>
      {tableData.map((el) => {
        return <Row key={el.id} data={el} tableData={tableData} />;
      })}
    </div>
  );
};

export default Tbody;
