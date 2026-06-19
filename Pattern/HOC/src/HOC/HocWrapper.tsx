import { useEffect, useState } from "react";

const HocWrapper = (Component) => {
  return function WrappedComponent(...args) {
    const [data, setData] = useState();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
          );
          if (resp.ok) {
            const json = await resp.json();
            setData(json);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
    return <Component posts={data} {...args} />;
  };
};

export default HocWrapper;
