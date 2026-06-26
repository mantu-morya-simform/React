import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  const [name, setName] = useState("");
  console.log("App Render");

  return (
    <div>
      <Child1 />
      <Child2 />
      <h1>{name}</h1>
      <button onClick={() => setName(name + "1")}>SetName</button>
    </div>
  );
};

export default App;
