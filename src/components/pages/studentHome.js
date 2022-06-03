import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import SubjectFeedbackButton from "../resuableComponents/subjectFeedbackButton";
import InstituteFeedbackButton from "../resuableComponents/instituteFeedbackButton";

const StudentHome = () => {
  const { user } = useContext(AuthContext);
  const [course, setCourse] = useState([]);
  const [subjects, setSubjects] = useState([]);

  console.log(course);
  console.log(subjects);

  useEffect(() => {
    const func = async () => {
      const res = await axios.get(
        `http://192.168.43.240:8000/getcourse?admin_id=${user.admin_id}&course_id=${user.course}`
      );
      const res1 = await axios.get(
        `http://192.168.43.240:8000/getsubject?admin_id=${user.admin_id}&course_id=${user.course}`
      );
      setCourse(res.data.data);
      setSubjects(res1.data.data);
    };
    func();
  }, []);

  return (
    <div className="layout">
      <Navbar type={1} />
      <div className="content">
        <div className="mainContent">
          <div className="studentPageContainer">
            <div className="headerSection">
              <h1>Institute Feedback</h1>
              <h3>{`Degree ${course.degree_name} | Course ${course.course_name} `}</h3>
              <h3>{`${course.year}${
                course.year === 1
                  ? "st"
                  : course.year === 2
                  ? "nd"
                  : course.year === 3
                  ? "rd"
                  : "th"
              } Year | ${course.sem}${
                course.sem === 1
                  ? "st"
                  : course.sem === 2
                  ? "nd"
                  : course.sem === 3
                  ? "rd"
                  : "th"
              } Sem`}</h3>
            </div>
            <div className="feedBackButtonsContainer">
              <InstituteFeedbackButton
                name={user.instituteDetails.name}
                id={user.id}
                institute={user.institute}
              />
              <div className="headerSection marginTop">
                <h1>Subject Feedbacks</h1>
              </div>
              <div className="grid">
                {subjects.map((e, index) => {
                  return (
                    <SubjectFeedbackButton
                      id={user.id}
                      data={e}
                      deleteFunc={() => {
                        const newUsers = "";
                      }}
                      key={`subjects ${index}`}
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

export default StudentHome;
