import React, { useState } from "react";
import "./Layout.css";

const Mainbar = () => {
  const [showProgrammes, setShowProgrammes] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState("Select Program");

  const toggleSelectBar = () => {
    setShowProgrammes(!showProgrammes);
  };

  const handleSelectedBtn = (val) => {
    setSelectedProgram(val);
  };

  const renderBatchCode = () => {
    const currentDate = new Date();

    const [month, day, year] = [
      currentDate.getMonth(),
      currentDate.getDate(),
      currentDate.getFullYear(),
    ];

    const splitTheName = selectedProgram.split(" ");

    const firstLetters = splitTheName.map((i, idx) => i[0]).join("");

    const currentDateLeters = Number([day, month, year].join(""));

    const batchCode = [firstLetters, currentDateLeters];

    return batchCode.join("");
  };

  return (
    <div className="dark-bg mainbar-top text-light w-100 py-3">
      <div className="d-flex gap-4 dark-bg mainbar-top px-5">
        <div
          className="d-flex align-items-center text-light gap-2 dark-bg"
          onClick={toggleSelectBar}
        >
          <div>{renderBatchCode()}m</div>
          <i
            className={` ${
              showProgrammes ? "fa fa-chevron-down" : "fa fa-chevron-up"
            } `}
          ></i>
        </div>
        <h4 className="text-light dark-bg">{selectedProgram}</h4>
      </div>
      <div
        className={`w-100 dark-bg toggle-container px-5 py-3 ${
          showProgrammes ? "toggle-close" : "toggle-open"
        }`}
      >
        <p>Select Program</p>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "Data Scientist Engineer"
              ? "btn-light text-dark"
              : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          Data Scientist Engineer
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "Python Fundamentals"
              ? "btn-light text-dark"
              : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          Python Fundamentals
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "React Developer"
              ? "btn-light text-dark"
              : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          React Developer
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "Data Structures"
              ? "btn-light text-dark"
              : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          Data Structures
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "MERN Stack Developer"
              ? "btn-light text-dark"
              : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          MERN Stack Developer
        </button>
      </div>
    </div>
  );
};

export default Mainbar;
