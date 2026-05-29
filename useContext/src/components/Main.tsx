import { useContext } from "react";
import { UserContext, type UserContextType } from "../context/nameContext";

function Main() {
  const userData: UserContextType = useContext(UserContext);
  function changeName() {
    if (userData.data.name === "Mantu Morya") {
      userData.setData({ ...userData.data, name: "Adi" });
    } else {
      userData.setData({ ...userData.data, name: "Mantu Morya" });
    }
  }
  function changeTheme() {
    if (userData.data.theme === "light") {
      userData.setData({ ...userData.data, theme: "dark" });
    } else {
      userData.setData({ ...userData.data, theme: "light" });
    }
  }
  return (
    <div className="main">
      <button onClick={changeName} className="change__name__btn">
        Change Name
      </button>
      <button onClick={changeTheme} className="toggle__name__btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default Main;
