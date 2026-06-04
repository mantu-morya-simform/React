import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  function handleLogoutBtn() {
    auth.logout();
    navigate("/login");
  }
  return (
    <div className="flex gap-10 p-10">
      <p className="p-2">Profile {auth.user}</p>
      <button className="bg-orange-600 p-2" onClick={handleLogoutBtn}>
        LogOut
      </button>
    </div>
  );
};

export default Profile;
