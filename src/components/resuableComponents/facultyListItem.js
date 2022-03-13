import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FacultyListItem = ({ name, deleteFunc }) => {
  return (
    <div className="facultyListItem">
      <h2>{name}</h2>
      <div
        className="icon"
        onClick={() => {
          deleteFunc();
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default FacultyListItem;
