import { useState } from "react";

const useShowMore = (list: string[], maxCount) => {
  const [allTagData, setAllTagData] = useState(list);
  const [tagState, setTagState] = useState(false);
  const setData = (item: string) => {
    setAllTagData((prev) => [...prev, item]);
  };

  const setTag = () => setTagState((prev) => !prev);

  const totalCount = allTagData.length;

  const expanded = !tagState ? true : false;

  const moreCount = allTagData.length - maxCount;

  const tagData = tagState ? allTagData : allTagData.slice(0, maxCount);

  return {
    allTagData,
    tagData,
    tagState,
    setTag,
    setData,
    totalCount,
    expanded,
    moreCount,
  };
};

export default useShowMore;
