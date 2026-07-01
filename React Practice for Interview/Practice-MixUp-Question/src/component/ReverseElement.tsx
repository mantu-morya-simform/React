import Wrapper from "./Wrapper";

const ReverseElement = () => {
  const elements = ["A", "B", "C", "D", "E"];

  return (
    <Wrapper>
      {[...elements].map((item) => (
        <h1 key={item}>{item}</h1>
      ))}
      <h1>a</h1>
      last
    </Wrapper>
  );
};

export default ReverseElement;
