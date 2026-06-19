const HocWrapper = ({ children }) => {
  function isHead(head: string): boolean {
    return head.charAt(0) === "h";
  }

  let even = true;

  for (let i = 0; i < children.length; i++) {
    if (isHead(children[i].type)) {
      if (even) {
        children[i].props.style.color = "blue";
      }
      even = even ? false : true;
    }
  }
  return <div>{children}</div>;
};

export default HocWrapper;
