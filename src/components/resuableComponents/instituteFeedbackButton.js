import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const InstituteFeedbackButton = () => {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState({ desc: "" });

  const handleQuillEdit = (value) => {
    setText((prev) => {
      return {
        ...prev,
        desc: value,
      };
    });
  };

  return (
    <>
      <div
        className="feedbackButton institute"
        onClick={() => {
          setModal(true);
        }}
      >
        <h2>Institute Name </h2>
        <div className="icon">
          <FontAwesomeIcon icon={faSquare} />
        </div>
      </div>
      {modal === true ? (
        <div className="modalContainer">
          <div className="modalContent">
            <div className="modal">
              <div className="modalHeader">
                <h2>Institute Feedback</h2>
                <div
                  className="closeBtn"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
              <h3 className="italic">
                Write a concise summary about your institute in proper english.
                Try to be as descriptive as possible.
              </h3>
              <h4>
                Single words or different language will be treated as spam!
              </h4>
              <ReactQuill
                value={text.desc}
                onChange={handleQuillEdit}
                modules={{ toolbar: false }}
                placeholder="Write something here..."
              />
              <div className="btnContainer">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InstituteFeedbackButton;
