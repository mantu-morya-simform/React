import { useRef } from "react";
import useShowMore from "../hooks/useShowMore";

const ShowMoreHook = () => {
  const list: string[] = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Papaya",
    "Watermelon",
    "Strawberry",
    "Kiwi",
  ];
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    allTagData,
    tagData,
    tagState,
    setTag,
    setData,
    totalCount,
    expanded,
    moreCount,
  } = useShowMore(list, 6);

  return (
    <div>
      <div>
        <input type="text" placeholder="Apple.." ref={inputRef} />
        <button
          onClick={() => {
            if (!inputRef.current.value) return;
            setData(inputRef.current.value);
            inputRef.current.value = "";
          }}
        >
          Save
        </button>
      </div>
      <p>Total Item is: {totalCount}</p>
      {tagData.map((item) => (
        <p key={crypto.randomUUID()}>{item}</p>
      ))}
      {expanded && (
        <p style={{ color: "red" }}>
          {" "}
          we have more data and it can be expanded
        </p>
      )}
      <button
        onClick={() => {
          setTag();
        }}
      >
        {tagState ? " Show Less" : `Show More ${moreCount} data`}
      </button>
    </div>
  );
};

export default ShowMoreHook;
