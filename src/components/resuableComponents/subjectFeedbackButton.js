import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const SubjectFeedbackButton = ({ data, id }) => {
  const { user } = useContext(AuthContext);

  const [modal, setModal] = useState(false);
  const [textSubject, setTextSubject] = useState({ desc: "" });
  const [textFaculty, setTextFaculty] = useState({ desc: "" });
  const [techerName, setTeacherName] = useState("");

  console.log(data);

  const handleQuillEdit1 = (value) => {
    setTextSubject((prev) => {
      return {
        ...prev,
        desc: value,
      };
    });
  };
  const handleQuillEdit2 = (value) => {
    setTextFaculty((prev) => {
      return {
        ...prev,
        desc: value,
      };
    });
  };

  const GetTeacherName = async () => {
    const res = await axios.get(
      `http://192.168.43.240:8000/faculty?admin_id=${user.admin_id}`
    );
    console.log(res.data.data);
    for (let i = 0; i < res.data.data.length; i++) {
      if (res.data.data[i].id === data.teacher) {
        setTeacherName(res.data.data[i].name);
      }
    }
  };

  const HandleSubmit = async () => {
    const res1 = await axios.post("http://192.168.43.240:8000/feedback", {
      type: "teacher",
      text: textFaculty.desc.replace(/<\/?[^>]+(>|$)/g, ""),
      entity_id: data.id,
      id,
    });
    const res2 = await axios.post("http://192.168.43.240:8000/feedback", {
      type: "subject",
      text: textSubject.desc.replace(/<\/?[^>]+(>|$)/g, ""),
      entity_id: data.id,
      id,
    });
  };

  return (
    <>
      <div
        className="feedbackButton"
        onClick={() => {
          setModal(true);
          GetTeacherName();
        }}
      >
        <h2>{data.name}</h2>
        <div className="icon">
          <FontAwesomeIcon icon={faSquare} />
        </div>
      </div>
      {modal === true ? (
        <div className="modalContainer">
          <div className="modalContent">
            <div className="modal">
              <div className="modalHeader">
                <h2>Subject Feedback</h2>
                <div
                  className="closeBtn"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>
              <h2 style={{ color: "black" }}>{data.name}</h2>
              <h3 className="italic">
                Write a concise summary about your teacher in proper english.
                Try to be as descriptive as possible.
              </h3>
              <h4>
                Single words or different language will be treated as spam!
              </h4>
              <ReactQuill
                value={textSubject.desc}
                onChange={handleQuillEdit1}
                modules={{ toolbar: false }}
                placeholder="Write something here..."
              />

              <div className="modalHeader">
                <h2>Faculty Feedback</h2>
              </div>
              <h2 style={{ color: "black" }}>{techerName}</h2>
              <h3 className="italic">
                Write a concise summary about your teacher in proper english.
                Try to be as descriptive as possible.
              </h3>
              <h4>
                Single words or different language will be treated as spam!
              </h4>
              <ReactQuill
                value={textFaculty.desc}
                onChange={handleQuillEdit2}
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

export default SubjectFeedbackButton;
