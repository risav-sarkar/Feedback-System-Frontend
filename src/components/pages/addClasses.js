import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import ClassListItem from "../resuableComponents/classListItem";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const AddStudent = () => {
  // const { user } = useContext(AuthContext);
  const [classList, setClassList] = useState([]);
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");

  const degreeList = ["BSc", "MSc", "BTech", "MTech", "BCA", "MCA"];
  const subjectList = ["CSE", "ECE", "IT", "EE", "ME", "CE"];
  const semesterList = [
    "Sem1",
    "Sem2",
    "Sem3",
    "Sem4",
    "Sem5",
    "Sem6",
    "Sem7",
    "Sem8",
    "Sem9",
    "Sem10",
  ];

  const formRef = useRef();

  console.log(classList);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setClassList([
      ...classList,
      {
        name: `${dropdown1}-${dropdown2}-${dropdown3}`,
        faculty: [],
        students: [],
      },
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
                  <div className="grid">
                    <Dropdown
                      options={degreeList}
                      onChange={(e) => setDropdown1(e.value)}
                      value={dropdown1}
                      placeholder="Select a Degree"
                    />
                    <Dropdown
                      options={subjectList}
                      onChange={(e) => setDropdown2(e.value)}
                      value={dropdown2}
                      placeholder="Select a Subject"
                    />
                    <Dropdown
                      options={semesterList}
                      onChange={(e) => setDropdown3(e.value)}
                      value={dropdown3}
                      placeholder="Select a Semester"
                    />
                  </div>
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
                      submitFunc={(students, faculty) => {
                        const newUsers = classList.slice();
                        newUsers[index].faculty = faculty;
                        newUsers[index].students = students;
                        setClassList(newUsers);
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

export default AddStudent;
