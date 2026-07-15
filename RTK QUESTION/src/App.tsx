import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import Counter from "./component/Counter";
import Users from "./component/Users";
import AutoFocus from "./component/AutoFocus";
import HooksTest from "./component/HooksTest";
import { ErrorBoundary } from "./ErroeBoundary/ErrorBoundary";
import { WrapperComp } from "./HOC/WrapperComp";

function App() {
  return (
    <Provider store={store}>
      {/* <Counter /> */}
      {/* <Users /> */}
      {/* <AutoFocus /> */}
      <ErrorBoundary>
        <HooksTest />
      </ErrorBoundary>

      {/* <WrapperComp /> */}
    </Provider>
  );
}

export default App;
