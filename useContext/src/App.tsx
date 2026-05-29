import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import { UserContext } from "./context/nameContext";
import { userData } from "./Data/userData";

function App() {
  const [data, setData] = useState(userData);

  return (
    <div className={`${data.theme === "dark" ? "main__app" : ""} `}>
      <UserContext.Provider value={{ data, setData }}>
        <Header />
        <Main />
      </UserContext.Provider>
    </div>
  );
}

export default App;
