import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import ListItem from "./listItem";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ClassListItem = ({ data, deleteFunc, submitFunc }) => {
  const [modal, setModal] = useState(false);
  const [faculty, setFaculty] = useState(data.faculty);
  const [students, setStudents] = useState(data.students);
  const [dropdown, setDropdown] = useState("");

  const facultyList = ["Fac1", "Fac2", "Fac3", "Fac4", "Fac5"];

  const studentNameRef = useRef("");
  const studentEmailRef = useRef("");
  const studentFormRef = useRef();

  const HandleFacultySubmit = (e) => {
    e.preventDefault();
    if (!dropdown || faculty.includes(dropdown)) return;
    setFaculty([...faculty, dropdown]);
  };

  const HandleStudentSubmit = (e) => {
    e.preventDefault();
    if (!studentNameRef.current.value || !studentEmailRef.current.value) return;
    setStudents([
      ...students,
      {
        name: studentNameRef.current.value,
        email: studentEmailRef.current.value,
        password: "123456",
      },
    ]);
    studentFormRef.current.reset();
  };

  return (
    <div className="classListItem">
      <div>
        <h2>{data.name}</h2>
        <h2>Faculty: {data.faculty.length}</h2>
        <h2>Students: {data.students.length}</h2>
      </div>
      <div
        className="icon"
        onClick={() => {
          setModal(true);
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      {modal === true ? (
        <div className="modalContainer">
          <div className="modalContent">
            <div className="modal">
              <div className="modalHeader">
                <h2>Class Details</h2>
                <div
                  className="closeBtn"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              </div>

              <form className="inputField" onSubmit={HandleFacultySubmit}>
                <div>
                  <h2>Add Faculty</h2>
                  <Dropdown
                    options={facultyList}
                    onChange={(e) => setDropdown(e.value)}
                    value={dropdown}
                    placeholder="Select an option"
                  />
                </div>
                <button type="submit">Add</button>
              </form>

              <h3>{`List of Faculty - ${faculty.length}`}</h3>

              {faculty.length === 0 ? (
                <h4>No Faculty Added To This Class!</h4>
              ) : null}

              <div className="flexBox marginBottom">
                {faculty.map((e, index) => {
                  return (
                    <ListItem
                      name={e}
                      deleteFunc={() => {
                        const newUsers = faculty.slice();
                        newUsers.splice(index, 1);
                        setFaculty(newUsers);
                      }}
                      key={`${data.name}classFacultyList${index}`}
                    />
                  );
                })}
              </div>

              <form
                className="inputField"
                onSubmit={HandleStudentSubmit}
                ref={studentFormRef}
              >
                <div>
                  <h2>Add Student</h2>
                  <input
                    type="text"
                    ref={studentNameRef}
                    placeholder={"Type Student Name"}
                    required
                  />
                  <input
                    type="email"
                    ref={studentEmailRef}
                    placeholder={"Type Email"}
                    required
                  />
                </div>
                <button type="submit">Add</button>
              </form>

              <h3>{`List of Students - ${students.length}`}</h3>

              {students.length === 0 ? (
                <h4>No Students Added To This Class!</h4>
              ) : null}

              <div className="grid">
                {students.map((e, index) => {
                  return (
                    <ListItem
                      name={e.name}
                      deleteFunc={() => {
                        const newUsers = students.slice();
                        newUsers.splice(index, 1);
                        setStudents(newUsers);
                      }}
                      key={`${data.name}classStudentList${index}`}
                    />
                  );
                })}
              </div>

              <div className="btnContainer marginTop">
                <button
                  onClick={() => {
                    deleteFunc();
                    setModal(false);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    submitFunc(students, faculty);
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
    </div>
  );
};

export default ClassListItem;
