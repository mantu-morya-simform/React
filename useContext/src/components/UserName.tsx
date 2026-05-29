import { useContext } from "react";
import { UserContext, type UserContextType } from "../context/nameContext";

function UserName() {
  const userData: UserContextType = useContext(UserContext);
  return (
    <div>
      UserName: <b> {userData.data.name}</b>
    </div>
  );
}

export default UserName;
