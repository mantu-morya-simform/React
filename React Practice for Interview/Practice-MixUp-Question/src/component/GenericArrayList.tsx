import type { ReactNode } from "react";

function GenericArrayList<T extends ReactNode>({ arr }: { arr: T[] }) {
  return (
    <div>
      {arr.map((data: T) => (
        <p key={crypto.randomUUID()}>{data}</p>
      ))}
    </div>
  );
}

export default GenericArrayList;
