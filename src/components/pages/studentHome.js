import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import FacultyFeedbackButton from "../resuableComponents/facultyFeedbackButton";
import InstituteFeedbackButton from "../resuableComponents/instituteFeedbackButton";

const StudentHome = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div className="layout">
      <Navbar type={1} />
      <div className="content">
        <div className="mainContent">
          <div className="studentPageContainer">
            <div className="feedBackButtonsContainer">
              <InstituteFeedbackButton />
              <div className="buttonsGrid">
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
                <FacultyFeedbackButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
