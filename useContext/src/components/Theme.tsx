import { useContext } from "react";
import { UserContext, type UserContextType } from "../context/nameContext";

function Theme() {
  const userData: UserContextType = useContext(UserContext);
  return (
    <div>
      <b>{userData.data.theme}</b> Mode
    </div>
  );
}

export default Theme;
