import React, { useState } from "react";
import AssignmentImg from "../../Assets/Icons/activeAssignment.svg";
import ModuleImg from "../../Assets/Icons/activeModuleQuiz.svg";
import TopicImg from "../../Assets/Icons/activeTopic.svg";
import Assignment from "../../Assets/Icons/assignment.svg";
import QuizImg from "../../Assets/Icons/moduleQuiz.svg";
import Topic from "../../Assets/Icons/topic.svg";
import "./Layout.css";

const Sidebar = () => {
  const [selectedTab, setSelectedTeb] = useState("Home");

  console.log(selectedTab);

  return (
    <div className="sidebar-container dark-bg">
      <div>
        <button
          className={`btn w-100 rounded-0 py-2 d-grid gap-1 shadow-none ${
            selectedTab === "Home" ? "light-bg" : "text-light"
          }`}
          onClick={(e) => setSelectedTeb(e.target.innerText)}
        >
          <i className="fa fa-home fs-4"></i>
          <span className="text-small">Home</span>
        </button>
      </div>
      <div onClick={(e) => setSelectedTeb(e.target.innerText)}>
        <button
          className={`btn w-100 rounded-0 py-2 d-grid gap-1 shadow-none ${
            selectedTab === "Modules" ? "light-bg" : "text-light"
          }`}
        >
          <i className="fa fa-database fs-4"></i>
          <span className="text-small">Modules</span>
        </button>
      </div>
      <div onClick={(e) => setSelectedTeb(e.target.innerText)}>
        <button
          className={`btn w-100 rounded-0 py-2 d-grid gap-1 shadow-none ${
            selectedTab === "Instructions" ? "light-bg" : "text-light"
          }`}
        >
          <i className="fa fa-book fs-4"></i>
          <span className="text-small">Instructions</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
