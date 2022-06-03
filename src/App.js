import "./styles/styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";

import AdminHome from "./components/pages/adminHome";
import StudentHome from "./components/pages/studentHome";
import AddFaculty from "./components/pages/addFaculty";
import AddStudent from "./components/pages/addClasses";
import Settings from "./components/pages/settings";
import Login from "./components/pages/login";
import Register from "./components/pages/register";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            user ? (
              user.type === "0" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/student" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/admin"
          element={
            user ? (
              user.type === "0" ? (
                <AdminHome />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/student"
          element={
            user ? (
              user.type === "0" ? (
                <Navigate to="/" />
              ) : (
                <StudentHome />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/login"
          element={
            user ? (
              user.type === "0" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/student" />
              )
            ) : (
              <Login />
            )
          }
        />
        <Route
          exact
          path="/register"
          element={
            user ? (
              user.type === "0" ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/student" />
              )
            ) : (
              <Register />
            )
          }
        />

        <Route
          exact
          path="/faculty"
          element={
            user ? (
              user.type === "0" ? (
                <AddFaculty />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/classes"
          element={
            user ? (
              user.type === "0" ? (
                <AddStudent />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/settings"
          element={
            user ? (
              user.type === "0" ? (
                <Settings />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
