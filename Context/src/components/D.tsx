import { useContext } from "react";
import { UserContext } from "../context/nameContext";

function D() {
  const name = useContext(UserContext);
  return <div>name is :- {name}</div>;
}

export default D;
