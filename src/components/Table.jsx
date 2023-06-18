import { useEffect } from "react";
import Tbody from "./Tbody";
import Breadcrumbs from "./Breadcrumbs";

const Table = ({tableData}) => {
    useEffect(() => {
        console.log(tableData)
    }, [tableData])

  return (
    <div className="container pt-5">
      <Breadcrumbs />
        <div className="d-flex flex-row">
            <p className="col-4 fw-bold fs-5">Title</p>
            <p className="col-4 fw-bold fs-5">Authors</p>
            <p className="col-4 fw-bold fs-5">Print Type</p>
        </div>
          <Tbody tableData={tableData} />
    </div>
  );
};

export default Table;
