import React from "react";
import "./Main.css";

const HomeData = () => {
  return (
    <div className="container mx-auto py-5 custom-height custom-overflow px-4">
      <div className="container mb-5">
        <h3>Upcoming certifications</h3>
        <div className="bg-light d-flex justify-content-between rounded-3 shadow-blue p-5 my-3 ">
          <div className="d-flex align-items-center gap-2 col col-4">
            <div>
              <img
                src="https://us.123rf.com/450wm/trendydesign/trendydesign2106/trendydesign210602520/170592477-internet-nodes-icon-with-flat-style-isolated-vector-internet-nodes-icon-image-simple-style-.jpg?ver=6"
                alt="prgImg"
                className="programme-img p-1 "
              ></img>
            </div>
            <div className="mx-2 d-grid gap-1">
              <div className="d-flex justify-content-center align-items-center gap-2 my-1 text-small-default btn-shade rounded">
                <span>CERTIFICATION </span> | <span>Attemp 1 </span>
              </div>
              <h4>DATA ANALYSIS CERTIFICATION</h4>
              <div className="d-flex justify-content-center align-items-center gap-2 my-1 text-small-default bg-shade-blue rounded-pill">
                <span>Completed </span> | <span>21 March 2022 </span>
              </div>
            </div>
          </div>
          <div className="d-flex gap-5 align-items-center col col-6">
            <div>
              <p>Exam Structure</p>
              <div className="d-flex gap-2 my-3">
                Round
                <span className="bg-shade-gray rounded-pill py-1 px-3 text-small-default">
                  MCQSR
                </span>
                <span className="bg-shade-gray rounded-pill py-1 px-3 text-small-default">
                  MCQSR
                </span>
              </div>
              <div className="d-flex gap-2">
                <p>Round 2 </p>
                <p className="bg-shade-gray rounded-pill px-3 text-small-default">
                  PROJECT
                </p>
              </div>
            </div>
            <button className="btn border-blue  rounded-pill w-50 shadow-none">
              View Exam Details
            </button>
          </div>
        </div>
      </div>

      {/* 2nd div */}
      <div className="container">
        <h3>Continue Learning</h3>
        <div className="d-flex  my-4 ">
          <div
            style={{ marginRight: "2em" }}
            className="d-flex bg-light rounded shadow-blue col-9 "
          >
            <div className="d-grid gap-3 p-3 py-5 border-primary border-end">
              <div className="d-flex gap-3 p-2 align-items-center">
                <img
                  src="https://us.123rf.com/450wm/trendydesign/trendydesign2106/trendydesign210602520/170592477-internet-nodes-icon-with-flat-style-isolated-vector-internet-nodes-icon-image-simple-style-.jpg?ver=6"
                  alt="prgImage"
                  className="programme-img"
                />
                <div>
                  <h4>DATA WRANGLING AND VISUALISATION</h4>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa fa-user"></i>
                    <span className="text-primary">Test Instructor</span>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center px-5">
                <span className="text-small-default w-25 mt-2">
                  Assignments
                </span>
                <div className="d-grid w-100 ">
                  <span className="text-primary text-small">0/38</span>
                  <div class="progress w-100 ">
                    <div
                      class="progress-bar w-100 bg-shade-blue rounded-pill "
                      role="progressbar"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center px-5">
                <span className="text-small-default w-25 mt-2">MCQ QUIZ</span>
                <div className="d-grid w-100 ">
                  <span className="text-primary text-small">0/38</span>
                  <div class="progress w-100">
                    <div
                      class="progress-bar w-100 bg-shade-blue rounded-pill"
                      role="progressbar"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 justify-content-center align-items-center px-5">
                <span className="text-small-default w-25 mt-2">
                  Live Sessions
                </span>
                <div className="d-grid w-100 ">
                  <span className="text-primary text-small">0/38</span>
                  <div class="progress w-100">
                    <div
                      class="progress-bar w-100 bg-shade-blue rounded-pill"
                      role="progressbar"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h5>Today's Plan</h5>
              <span className="text-secondary">21 March 2021</span>
              <h5 className="text-primary mt-3">
                Data Transformation Using Panda's
              </h5>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-secondary">Daily Feedback</div>
                <span className="text-primary text-small">
                  Opens at 07:30 PM
                </span>
              </div>
              <button className="btn rounded-pill bg-shade-gray my-2 w-75 p-2">
                Join Live Session
              </button>
              <div className="text-secondary mx-4">Begins at 07:30 PM</div>
            </div>
          </div>
          <div className="bg-light rounded shadow-blue p-3 col-3">
            <h5>Progress Overview</h5>
            <div className="d-grid gap-2 my-3">
              <div className="border-blue py-3 px-4 d-flex justify-content-between align-items-center rounded">
                <h5>0%</h5>
                <div className="text-secondary">Overall Grade</div>
              </div>
              <div className="border-blue py-3 px-4 d-flex justify-content-between align-items-center rounded">
                <h5>0%</h5>
                <div className="text-secondary">Overall Grade</div>
              </div>
              <p className="text-primary text-small-default">
                VIEW DETAILED PROGRESS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeData;
