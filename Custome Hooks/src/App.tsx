import "./App.css";
import ClickBTnThrole from "./component/ClickBTnThrole";
import ClipboardDemo from "./component/ClipboardDemo";
import Counter from "./component/Counter";
import FetchUrl from "./component/FetchUrl";
import Previous from "./component/Previous";
import RunOnInterval from "./component/RunOnInterval";
import Search from "./component/Search";
import SetTheme from "./component/SetTheme";
import ShowOnlineStatus from "./component/ShowOnlineStatus";
import Toggle from "./component/Toggle";
import UserProfile from "./component/UserProfile";
import CurrentWindowSIze from "./component/CurrentWindowSIze";
import useLocalStorage from "./hooks/useLocalStorage";
import ScrollPosition from "./component/ScrollPosition";
import InputHook from "./component/InputHook";
import FormValues from "./component/FormValues";

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
      {/* <UserProfile /> */}
      {/* <RunOnInterval /> */}
      {/* <CurrentWindowSIze /> */}
      {/* <ShowOnlineStatus /> */}
      {/* <ScrollPosition /> */}
      {/* <InputHook /> */}
      <FormValues />
    </>
  );
}

export default App;
