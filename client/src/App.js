import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import View from "./pages/View";
import { BasicTable } from './components/BasicTable'

function App() {
  return (
    <div className='App'>
      <BasicTable />
    </div>
    /*
    <BrowserRouter>
      <div className="App">
        <ToastContainer position='top-center' />
          <Routes>
            <Route path='/employees' element={<Home/>} />
            <Route path='/add-employee' element={<Add/>} />
            <Route path='/update-employee/:id' element={<Edit/>} />
            <Route path='/view-employee/:id' element={<View/>} />
          </Routes>
      </div>
    </BrowserRouter>
    */
  );
}

export default App;
