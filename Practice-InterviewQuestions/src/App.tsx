import "./App.css";
import HocWrapper from "./components/HocWrapper";

function App() {
  return (
    <>
      <HocWrapper>
        <h1 style={{ color: "black" }}>Heading 1</h1>
        <p style={{ color: "black" }}>
          Paragraph 1: Welcome to the application.
        </p>

        <h2 style={{ color: "black" }}>Heading 2</h2>
        <p style={{ color: "black" }}>
          Paragraph 2: Learning React components.
        </p>

        <h3 style={{ color: "black" }}>Heading 3</h3>
        <p style={{ color: "black" }}>
          Paragraph 3: Understanding props and state.
        </p>

        <h4 style={{ color: "black" }}>Heading 4</h4>
        <p style={{ color: "black" }}>Paragraph 4: Working with hooks.</p>

        <h5 style={{ color: "black" }}>Heading 5</h5>
        <p style={{ color: "black" }}>
          Paragraph 5: Managing application data.
        </p>

        <h6 style={{ color: "black" }}>Heading 6</h6>
        <p style={{ color: "black" }}>
          Paragraph 6: Building reusable UI elements.
        </p>
      </HocWrapper>
    </>
  );
}

export default App;
