import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SameAuthorsTable from "./pages/SameAuthorsTable";
import SelectedRow from "./pages/SelectedRow";
import "./App.css";

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="selectedRow" element={<SelectedRow />} />
          <Route path=":sameAuthorsTable" element={<SameAuthorsTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
