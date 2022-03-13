import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import ClassListItem from "../resuableComponents/classListItem";

const AddStudent = () => {
  // const { user } = useContext(AuthContext);
  const [classList, setClassList] = useState([]);
  const nameRef = useRef("");
  const formRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value === "") return;
    setClassList([
      ...classList,
      { name: nameRef.current.value, faculty: [], students: [] },
    ]);
    formRef.current.reset();
  };

  return (
    <div className="layout">
      <Navbar type={0} btn={3} />
      <div className="content">
        <div className="mainContent">
          <div className="classesPageContainer">
            <div className="classesContainer">
              <form
                className="inputField"
                onSubmit={HandleSubmit}
                ref={formRef}
              >
                <div>
                  <h2>Add Class</h2>
                  <input
                    type="text"
                    ref={nameRef}
                    placeholder={"Type Class Name"}
                  />
                </div>
                <button type="submit">Add</button>
              </form>
              <div className="grid">
                {classList.map((e, index) => {
                  return (
                    <ClassListItem
                      data={e}
                      deleteFunc={() => {
                        const newUsers = classList.slice();
                        newUsers.splice(index, 1);
                        setClassList(newUsers);
                      }}
                      submitFunc={() => {}}
                      key={`facultyItem${index}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
