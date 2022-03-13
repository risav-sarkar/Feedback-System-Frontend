import Navbar from "../resuableComponents/navbar";

const Settings = () => {
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
                handleLogout();
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
