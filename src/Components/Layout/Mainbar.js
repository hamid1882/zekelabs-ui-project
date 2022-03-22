import React, { useState } from "react";
import "./Layout.css";

const Mainbar = () => {
  const [showProgrammes, setShowProgrammes] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Select Program");

  const toggleSelectBar = () => {
    setShowProgrammes(!showProgrammes);
  };

  const handleSelectedBtn = (val) => {
    setSelectedProgram(val);
  };

  return (
    <div className="dark-bg text-light w-100 py-3 ">
      <div className="d-flex gap-4 dark-bg mainbar-top px-5">
        <div
          className="d-flex align-items-center text-light gap-2 mainbar-top dark-bg"
          onClick={toggleSelectBar}
        >
          <div>{selectedProgram}</div>
          <i
            className={` ${
              showProgrammes ? "fa fa-chevron-down" : "fa fa-chevron-up"
            } `}
          ></i>
        </div>
        <h4 className="text-light mainbar-top dark-bg">{selectedProgram}</h4>
      </div>
      <div
        className={`w-100 dark-bg toggle-container px-5 py-3 ${
          showProgrammes ? "toggle-close" : "toggle-open"
        }`}
      >
        <p>Select Program</p>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "ECRD" ? "btn-light text-dark" : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          ECRD
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "FASDFKJFKFE" ? "btn-light text-dark" : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          FASDFKJFKFE
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "DSWEREREF" ? "btn-light text-dark" : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          DSWEREREF
        </button>
        <button
          className={`btn text-light shadow-none py-0 ${
            selectedProgram === "DSDDFEFEEFEF" ? "btn-light text-dark" : "none"
          }`}
          onClick={(e) => handleSelectedBtn(e.target.innerText)}
        >
          DSDDFEFEEFEF
        </button>
      </div>
    </div>
  );
};

export default Mainbar;
