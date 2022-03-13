import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserTie,
  faChalkboardTeacher,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Icon from "../../assets/icon.png";

const Navbar = ({ type, btn }) => {
  // const { user } = useContext(AuthContext);

  return (
    <div className="navBar">
      <div className="navHeader">
        <h2>Username</h2>
        <h4>B.P. Poddar Institute Of Management And Technology</h4>
      </div>

      <div className="navButtons">
        {type === 0 ? (
          <>
            <Link to="/admin">
              <button className={btn === 1 ? "selected" : null}>
                <FontAwesomeIcon icon={faHome} />
                <p>Home</p>
              </button>
            </Link>

            <Link to="/faculty">
              <button className={btn === 2 ? "selected" : null}>
                <FontAwesomeIcon icon={faUserTie} />
                <p>Add Faculty</p>
              </button>
            </Link>

            <Link to="/classes">
              <button className={btn === 3 ? "selected" : null}>
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                <p>Add Classes</p>
              </button>
            </Link>

            <Link to="/settings">
              <button className={btn === 4 ? "selected" : null}>
                <FontAwesomeIcon icon={faCog} />
                <p>Settings</p>
              </button>
            </Link>
          </>
        ) : (
          <button>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <p>LogOut</p>
          </button>
        )}
      </div>

      <div className="navFooter">
        <img src={Icon} alt="profilePicture"></img>
        <h1>TestName</h1>
      </div>
    </div>
  );
};

export default Navbar;
