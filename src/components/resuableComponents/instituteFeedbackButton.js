import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const InstituteFeedbackButton = ({ name, id, institute }) => {
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

  const HandleSubmit = async () => {
    const res = await axios.post("http://192.168.43.240:8000/feedback", {
      type: "institute",
      text: text.desc.replace(/<\/?[^>]+(>|$)/g, ""),
      entity_id: institute,
      id,
    });
    console.log(res);
  };

  return (
    <>
      <div
        className="feedbackButton institute"
        onClick={() => {
          setModal(true);
        }}
      >
        <h2>{name}</h2>
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
                <button
                  onClick={() => {
                    HandleSubmit();
                    setModal(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InstituteFeedbackButton;
