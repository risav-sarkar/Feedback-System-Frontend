import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import ListItem from "../resuableComponents/listItem";

const AddFaculty = () => {
  // const { user } = useContext(AuthContext);
  const [facultyList, setFacultyList] = useState([]);
  const nameRef = useRef("");
  const formRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value === "") return;
    setFacultyList([...facultyList, nameRef.current.value]);
    formRef.current.reset();
  };

  return (
    <div className="layout">
      <Navbar type={0} btn={2} />
      <div className="content">
        <div className="mainContent">
          <div className="facultyPageContainer">
            <div className="facultyContainer">
              <form
                className="inputField"
                onSubmit={HandleSubmit}
                ref={formRef}
              >
                <div>
                  <h2>Add Faculty</h2>
                  <input
                    type="text"
                    ref={nameRef}
                    placeholder={"Type Faculty Name"}
                    required
                  />
                </div>
                <button type="submit">Add</button>
              </form>
              <div className="grid">
                {facultyList.map((e, index) => {
                  return (
                    <ListItem
                      name={e}
                      deleteFunc={() => {
                        const newUsers = facultyList.slice();
                        newUsers.splice(index, 1);
                        setFacultyList(newUsers);
                      }}
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

export default AddFaculty;
