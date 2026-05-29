import "./App.css";
import ActionButton from "./components/ActionButton";
import Button from "./components/Button";
import Counter from "./components/Counter";
import CounterIncSame from "./components/CounterIncSame";
import Menu from "./components/Menu";
import PrintDetail from "./components/PrintDetail";
import RenderList from "./components/RenderList";
import ReusedComponent from "./components/ReusedComponent";
import UserDetail from "./components/UserDetail";

function App() {
  console.log("hello");
  return (
    <>
      {/* component to print Detail */}
      <PrintDetail />
      <Button />
      <RenderList />
      <ReusedComponent name="Mantu" />
      <ReusedComponent name="Krish" />
      <ReusedComponent name="Satyam" />
      {/* // counter update same time */}
      <CounterIncSame />
      {/*use different counter instance so it separately increment both counter */}
      <Counter />
      <hr />
      <UserDetail name="Mantu Morya" isOnline={false} hideOffline={false} />
      <hr />
      <ActionButton text="Signup" />
      <ActionButton text="Send Message" />
      <ActionButton text="Cart" />
      <hr />
      <Menu />
    </>
  );
}

export default App;
