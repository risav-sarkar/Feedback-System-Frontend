import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Navbar from "../resuableComponents/navbar";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="layout">
      <Navbar type={0} btn={1} />

      <div className="content">
        <div className="mainContent">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
