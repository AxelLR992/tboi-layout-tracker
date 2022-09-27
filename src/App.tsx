import React from "react";
import "./assets/styles/_global.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
