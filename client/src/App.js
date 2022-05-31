import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import View from "./pages/View";
import { Table } from "./components/Table";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
          <Routes>
            <Route path='/' element={<Table/>} />
            <Route path='/employees' element={<Table/>} />
            <Route path='/add-employee' element={<Add/>} />
            <Route path='/update-employee/:id' element={<Edit/>} />
            <Route path='/view-employee/:id' element={<View/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
