import axios from "axios";
import Navbar from "../resuableComponents/navbar";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout");
    localStorage.setItem("userFeedBackSystem", JSON.stringify(null));
    window.location.reload();
  };
  return (
    <div className="layout">
      <Navbar type={0} btn={4} />
      <div className="content">
        <div className="mainContent">
          <div className="settingsContainer">
            <button
              onClick={() => {
                const func = async () => {
                  const res = await axios.post(
                    `http://192.168.43.240:8000/logout`,
                    {
                      admin_id: user.id,
                      auth_token: user.auth_token,
                    }
                  );
                  console.log(res);
                  dispatch({ type: "LOGOUT" });
                  navigate("/login");
                };
                func();
              }}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
