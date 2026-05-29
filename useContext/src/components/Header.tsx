import "../App.css";
import Theme from "./Theme";
import UserName from "./UserName";

function Header() {
  return (
    <div className="header">
      <Theme />
      <UserName />
    </div>
  );
}

export default Header;
