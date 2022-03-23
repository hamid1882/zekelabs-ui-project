import React, { useState } from "react";
import AssignmentImg from "../../Assets/Icons/activeAssignment.svg";
import ModuleImg from "../../Assets/Icons/activeModuleQuiz.svg";
import TopicImg from "../../Assets/Icons/activeTopic.svg";
import Assignment from "../../Assets/Icons/assignment.svg";
import QuizImg from "../../Assets/Icons/moduleQuiz.svg";
import Topic from "../../Assets/Icons/topic.svg";
import "./Main.css";

const Modules = () => {
  const [currentSelected, setCurrentSelected] = useState("Topic");

  return (
    <div className="d-flex w-100 ">
      <div className="col col-2">
        <div className="d-grid">
          <button
            className={`btn rounded-0 d-flex align-items-center gap-2 shadow-none ${
              currentSelected === "Topic" ? "btn-shade" : null
            }`}
            onClick={() => setCurrentSelected("Topic")}
          >
            <img
              src={currentSelected === "Topic" ? TopicImg : Topic}
              alt="Topic"
            />
            <span className="text-small-default">Python Loops</span>
          </button>
          <button
            className={`btn rounded-0 d-flex align-items-center gap-2 shadow-none ${
              currentSelected === "Quiz" ? "btn-shade" : null
            }`}
            onClick={() => setCurrentSelected("Quiz")}
          >
            <img
              src={currentSelected === "Quiz" ? ModuleImg : QuizImg}
              alt="Topic"
            />
            <span className="text-small-default">Quiz 1: Data types</span>
          </button>
          <button
            className={`btn rounded-0 d-flex align-items-center gap-2 shadow-none ${
              currentSelected === "Assignments" ? "btn-shade" : null
            }`}
            onClick={() => setCurrentSelected("Assignments")}
          >
            <img
              src={
                currentSelected === "Assignments" ? AssignmentImg : Assignment
              }
              alt="Topic"
            />
            <span className="text-small-default">
              Assignment 1: Operators | Loops
            </span>
          </button>
        </div>
      </div>
      <div className="col col-10 details-bg p-5 custom-height custom-overflow">
        <div
          className={`${
            currentSelected === "Topic" ? "d-flex" : "d-none"
          } container `}
        >
          <div className="w-100">
            <h3>Python Loops</h3>
            <p className="text-secondary">
              15 December 3031, Wednesday, 07:30 PM
            </p>
            <h5 className="text-primary text-end">DAILY FEEDBACK</h5>
            <div className="my-5 p-5">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex bg-flash gap-2 align-items-center tabs-shadow px-4 py-2">
                  <i className="fa fa-play-circle"></i>
                  <button className="btn shadow-none">SESSION PLAN</button>
                </div>
                <div className="d-flex gap-2 align-items-center px-4 py-2">
                  <i className="fa fa-play-circle"></i>
                  <button className="btn shadow-none">SESSION PLAN</button>
                </div>
                <div className="d-flex gap-2 align-items-center px-4 py-2">
                  <i className="fa fa-play-circle"></i>
                  <button className="btn shadow-none">SESSION PLAN</button>
                </div>
                <div className="d-flex gap-2 align-items-center px-4 py-2">
                  <i className="fa fa-play-circle"></i>
                  <button className="btn shadow-none">SESSION PLAN</button>
                </div>
              </div>
              <div className="d-grid gap-2 bg-flash shadow py-4 px-5 rounded">
                <h4>Session Plan</h4>
                <p className="text-secondary">LIVE session is about to start</p>
                <button className="btn btn-shade px-3 rounded-pill shadow-none w-25 my-2">
                  Join Live Session
                </button>
                <p className="text-secondary">Sub Topics</p>
                <ol>
                  <li>Sorting and indexing Dataframe</li>
                  <li>FIltering Dataframs</li>
                  <li>Usage of loc and ifoc cunctions</li>
                </ol>
                <h5>Session Details</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={`${currentSelected === "Quiz" ? "d-flex" : "d-none"}`}>
          <div className="p-5 w-100">
            <h4>Quiz-1: Data Types</h4>
            <p className="text-secondary">16 December 2021, Thursday</p>
            <h5>Quiz Details</h5>
            <div className="d-flex px-5 py-3 bg-flash shadow-blue rounded my-3">
              <div className="d-flex gap-5 p-4 col-6 border-end justify-content-center">
                <div className="d-grid justify-content-center align-items-center">
                  <h5 className="text-center text-secondary">10</h5>
                  <span className="text-secondary">Questions</span>
                </div>
                <div className="d-grid justify-content-center align-items-center">
                  <h5 className="text-center text-secondary">10:00</h5>
                  <span className="text-secondary">Duration</span>
                </div>
                <div className="d-grid justify-content-center align-items-center">
                  <h5 className="text-center text-secondary">125</h5>
                  <span className="text-secondary">Total Score</span>
                </div>
              </div>
              <div className="d-flex gap-5 p-4 col-6 align-items-center">
                <div className="d-flex w-100">
                  <div className="d-grid gap-3 col col-6 p-1">
                    <p className="fs-7 text-secondary">Start:</p>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-calendar text-primary"></i>
                      <span className="text-secondary">16 Dec 2021</span>
                    </div>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-clock text-primary"></i>
                      <span className="text-secondary">07:30 PM</span>
                    </div>
                  </div>
                  <div className="d-grid gap-3 col col-6 p-1">
                    <p className="fs-7 text-secondary">End:</p>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-calendar text-primary"></i>
                      <span className="text-secondary">20 Dec 2021</span>
                    </div>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-clock text-primary"></i>
                      <span className="text-secondary">07:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            currentSelected === "Assignments" ? "d-flex" : "d-none"
          }`}
        >
          <div className="w-100 p-5">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4>Assignment-1: Operators | Loops</h4>
                <p className="text-secondary">16 December 2021, Thursday</p>
              </div>
              <div className="d-flex gap-4">
                <div className="d-grid justify-content-center align-items-center">
                  <h5 className="text-end text-secondary">3</h5>
                  <span className="text-secondary">Problems</span>
                </div>
                <div className="d-grid justify-content-center align-items-center">
                  <h5 className="text-end text-secondary">100</h5>
                  <span className="text-secondary">Total Score</span>
                </div>
              </div>
            </div>
            <h5>Assignment Details</h5>
            <div className="d-flex px-5 py-3 bg-flash shadow-blue rounded my-4">
              <div className="d-flex gap-5 p-5 col-6 border-end justify-content-center">
                <div className="d-grid justify-content-center align-items-center">
                  <h4 className="text-start text-secondary">3</h4>
                  <span className="text-secondary">Problems</span>
                </div>
                <div className="d-grid justify-content-center align-items-center">
                  <h4 className="text-start text-secondary">100</h4>
                  <span className="text-secondary">Total Score</span>
                </div>
              </div>
              <div className="d-flex gap-5 p-4 col-6 align-items-center">
                <div className="d-flex w-100">
                  <div className="d-grid gap-3 col col-6 p-1">
                    <p className="fs-7 text-secondary">Start:</p>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-calendar text-primary"></i>
                      <span className="text-secondary">16 Dec 2021</span>
                    </div>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-clock text-primary"></i>
                      <span className="text-secondary">07:30 PM</span>
                    </div>
                  </div>
                  <div className="d-grid gap-3 col col-6 p-1">
                    <p className="fs-7 text-secondary">End:</p>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-calendar text-primary"></i>
                      <span className="text-secondary">20 Dec 2021</span>
                    </div>
                    <div className="d-flex gap-2  align-items-center">
                      <i className="fa fa-clock text-primary"></i>
                      <span className="text-secondary">07:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
