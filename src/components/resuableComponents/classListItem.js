import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const ClassListItem = ({ data, deleteFunc }) => {
  const [modal, setModal] = useState(false);
  const [faculty, setFaculty] = useState(data.faculty);
  const [students, setStudents] = useState(data.students);

  console.log(faculty);
  console.log(students);

  const facultyNameRef = useRef("");
  const studentNameRef = useRef("");
  const studentEmailRef = useRef("");

  const facultyFormRef = useRef();
  const studentFormRef = useRef();

  const HandleFacultySubmit = (e) => {
    e.preventDefault();
    if (facultyNameRef.current.value === "") return;
    setFaculty([...faculty, facultyNameRef.current.value]);
    facultyFormRef.current.reset();
  };

  const HandleStudentSubmit = (e) => {
    e.preventDefault();
    if (studentNameRef.current.value === "") return;
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
              <form
                className="inputField"
                onSubmit={HandleFacultySubmit}
                ref={facultyFormRef}
              >
                <div>
                  <h2>Add Faculty</h2>
                  <input
                    type="text"
                    ref={facultyNameRef}
                    placeholder={"Type Faculty Name"}
                  />
                </div>
                <button type="submit">Add</button>
              </form>
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
                  />
                  <input
                    type="email"
                    ref={studentEmailRef}
                    placeholder={"Type Email"}
                  />
                </div>
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ClassListItem;
