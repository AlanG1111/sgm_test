import React from "react";
import MainTable from "./components/MainTable";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Popup from "./components/Popup";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<MainTable />} />
          <Route path='popup' element={<Popup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
