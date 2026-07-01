import React, { type ReactNode } from "react";

interface WrapperProps {
  children: ReactNode | ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div>{React.Children.toArray(children).reverse()}</div>;
};

export default Wrapper;
