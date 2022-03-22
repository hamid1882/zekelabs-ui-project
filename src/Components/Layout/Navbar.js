import React from "react";
import NavIcon from "../../Assets/Icons/assignment.svg";
import "./Layout.css";

const Navbar = () => {
  return (
    <div className="navbar navbar-custom px-5 py-2 bg-light mainbar-top">
      <h2 className="main-title">EDYODA</h2>
      <div className="d-flex align-items-center justify-content-center p-1 gap-2">
        <span>Hi Test Learner!</span>
        <img src={NavIcon} alt="Web Logo" />
      </div>
    </div>
  );
};

export default Navbar;
