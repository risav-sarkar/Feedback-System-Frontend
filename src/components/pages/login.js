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
    // loginCallAdmin(
    //   { email: email.current.value, password: password.current.value },
    //   dispatch
    // );

    loginCallStudent(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <form className="loginBox" onSubmit={handleClick}>
        <input
          placeholder="Email"
          type="email"
          required
          className="loginInput"
          ref={email}
        />
        <input
          placeholder="Password"
          type="password"
          required
          minLength="6"
          className="loginInput"
          ref={password}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          {isFetching ? "Loading..." : "Login"}
        </button>
        <button className="loginForgot">Forgot Password?</button>
        <p>
          Not registered yet?{" "}
          <Link to="/register">
            <button className="registerButton">Register</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
