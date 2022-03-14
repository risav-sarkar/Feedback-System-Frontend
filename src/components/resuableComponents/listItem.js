import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ name, deleteFunc }) => {
  return (
    <div className="listItem">
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

export default ListItem;
