import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainbar from "./Layout/Mainbar";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import HomeData from "./Main/HomeData";
import Instructions from "./Main/Instructions";
import Modules from "./Main/Modules";

export const Home = () => {
  return (
    <Router>
      <Navbar /> <Mainbar />
      <div className="quickChat">
        <i className="fa fa-comments"></i>
      </div>
      <div className="d-flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeData />}></Route>{" "}
        </Routes>
        <Routes>
          <Route path="/modules" element={<Modules />}></Route>{" "}
        </Routes>
        <Routes>
          <Route path="/instructions" element={<Instructions />}></Route>{" "}
        </Routes>
      </div>
    </Router>
  );
};
