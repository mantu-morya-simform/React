import "./App.css";
import { AnalysisHoc, PostHoc } from "./component/ComponentWrapper";

function App() {
  return (
    <>
      <PostHoc />
      <AnalysisHoc />
    </>
  );
}

export default App;
