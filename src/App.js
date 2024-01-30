import React from "react";
import "./App.css";
import HomePage from "./components/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chart from "./chartData";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
