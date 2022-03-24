import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loginCallAdmin, loginCallStudent } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const [type, setType] = useState(0);
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (type === 0)
      loginCallAdmin(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
    else
      loginCallStudent(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
  };

  return (
    <div className="loginPageContainer">
      <div className="login">
        <div className="tabs">
          <div
            className={`tab ${type === 0 ? "selected" : null}`}
            onClick={() => {
              setType(0);
            }}
          >
            <h3>Admin</h3>
          </div>
          <div
            className={`tab ${type === 1 ? "selected" : null}`}
            onClick={() => {
              setType(1);
            }}
          >
            <h3>Student</h3>
          </div>
        </div>

        <div className="loginContent">
          <form className="loginBox" onSubmit={handleClick}>
            <h1>Login</h1>
            <h3>Email</h3>
            <input
              placeholder="abc@gmail.com"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <h3>Password</h3>
            <input
              placeholder="123456"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? "Loading..." : "Login"}
            </button>
            {type === 0 ? (
              <button className="loginForgot">Forgot Password?</button>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
