import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import ListItem from "../resuableComponents/listItem";

const AddFaculty = () => {
  const { user } = useContext(AuthContext);

  const [facultyList, setFacultyList] = useState([]);
  const nameRef = useRef("");
  const formRef = useRef();

  console.log(facultyList);

  useEffect(() => {
    FetchFacultyList();
  }, []);

  const FetchFacultyList = async () => {
    const res = await axios.get(
      `http://192.168.43.240:8000/faculty?admin_id=${user.id}`
    );
    setFacultyList(res.data.data);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (nameRef.current.value === "") return;

    const func = async () => {
      const res = await axios.post("http://192.168.43.240:8000/faculty", {
        admin_id: user.id,
        auth_token: user.auth_token,
        name: nameRef.current.value,
      });
      formRef.current.reset();
      FetchFacultyList();
    };
    func();
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
                    minLength="2"
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
                      name={e.name}
                      deleteFunc={async () => {
                        const res = await axios.delete(
                          "http://192.168.43.240:8000/faculty",
                          {
                            data: {
                              auth_token: user.auth_token,
                              admin_id: user.id,
                              teacher_id: e.id,
                            },
                          }
                        );
                        FetchFacultyList();
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

export default AddFaculty;
