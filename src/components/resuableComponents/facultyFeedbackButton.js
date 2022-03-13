import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FacultyFeedbackButton = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="feedbackButton">
      <h2>Faculty Name </h2>
      <div className="icon">
        <FontAwesomeIcon icon={faSquare} />
      </div>
      {modal === true ? (
        <div className="modalContainer">
          <div className="modalContent">
            <div className="modal"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FacultyFeedbackButton;
