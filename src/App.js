import "./styles/styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import AdminHome from "./components/pages/adminHome";
import StudentHome from "./components/pages/studentHome";
import AddFaculty from "./components/pages/addFaculty";
import AddStudent from "./components/pages/addClasses";
import Settings from "./components/pages/settings";
import Login from "./components/pages/login";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<AdminHome />} />
        <Route exact path="/student" element={<StudentHome />} />
        <Route exact path="/faculty" element={<AddFaculty />} />
        <Route exact path="/classes" element={<AddStudent />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
