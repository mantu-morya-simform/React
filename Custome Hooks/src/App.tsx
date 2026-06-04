import "./App.css";
import ClickBTnThrole from "./component/ClickBTnThrole";
import ClipboardDemo from "./component/ClipboardDemo";
import Counter from "./component/Counter";
import FetchUrl from "./component/FetchUrl";
import Previous from "./component/Previous";
import Search from "./component/Search";
import SetTheme from "./component/SetTheme";
import Status from "./component/Status";
import Toggle from "./component/Toggle";
import UserProfile from "./component/UserProfile";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  useLocalStorage();
  return (
    <>
      {/* <Counter />
      <FetchUrl />
      <Toggle />
      <SetTheme />
      <Search />
      <ClickBTnThrole />
      <Previous />
      <ClipboardDemo />
      <Status /> */}
      <UserProfile />
    </>
  );
}

export default App;
