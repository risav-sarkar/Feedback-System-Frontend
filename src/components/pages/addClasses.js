import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import ClassListItem from "../resuableComponents/classListItem";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import AlertBox from "../resuableComponents/alertBox";

const AddStudent = () => {
  const { user } = useContext(AuthContext);

  const [classList, setClassList] = useState([]);
  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [dropdown3, setDropdown3] = useState("");
  const [dropdown4, setDropdown4] = useState("");
  const [messageBox, setMessageBox] = useState("");
  const degreeList = ["BSc", "MSc", "BTech", "MTech", "BCA", "MCA"];
  const subjectList = ["CSE", "ECE", "IT", "EE", "ME", "CE"];
  const yearList = ["1", "2", "3", "4", "5"];
  const semesterList = ["1", "2", "3", "4", "5", "6"];

  const formRef = useRef();

  console.log(classList);

  useEffect(() => {
    FetchClassList();
  }, []);

  const FetchClassList = async () => {
    try {
      const res = await axios.get(
        `http://192.168.43.240:8000/course?admin_id=${user.id}`
      );
      console.log(res);
      setClassList(res.data.data);
    } catch (err) {
      setMessageBox("Something Went Wrong! Unable To Fetch Classes!");
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!dropdown1 || !dropdown2 || !dropdown3 || !dropdown4) {
      setMessageBox("Select An Option From All The Dropdown Menus!");
      const timer = setTimeout(() => {
        setMessageBox("");
      }, 3000);
      return () => clearTimeout(timer);
    }

    const func = async () => {
      const res = await axios.post("http://192.168.43.240:8000/course", {
        admin_id: user.id,
        auth_token: user.auth_token,
        course_name: dropdown2,
        degree_name: dropdown1,
        year: dropdown3,
        sem: dropdown4,
      });
      console.log(res);
      formRef.current.reset();
      FetchClassList();
    };
    func();
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
                      options={yearList}
                      onChange={(e) => setDropdown3(e.value)}
                      value={dropdown3}
                      placeholder="Select Year"
                    />
                    <Dropdown
                      options={semesterList}
                      onChange={(e) => setDropdown4(e.value)}
                      value={dropdown4}
                      placeholder="Select Semester"
                    />
                  </div>
                </div>
                <button type="submit">Add</button>
              </form>
              {messageBox ? <AlertBox data={messageBox} /> : null}
              <div className="grid">
                {classList.map((e, index) => {
                  return (
                    <ClassListItem
                      data={e}
                      deleteFunc={async () => {
                        const res = await axios.delete(
                          "http://192.168.43.240:8000/course",
                          {
                            data: {
                              auth_token: user.auth_token,
                              admin_id: user.id,
                              course_id: e.id,
                            },
                          }
                        );
                        FetchClassList();
                        console.log(res);
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
