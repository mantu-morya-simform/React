/** 
2) This DeviceSelect component is currently using any, completely defeating the purpose of TypeScript. Convert it to a Generic component (<T>) so that when a parent passes an array of device objects, the onSelect callback strictly infers the exact shape of that object.
TypeScript

*/

// ❌ HALF-BAKED IMPLEMENTATION
import React from "react";

interface SelectProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSelect: (item: T) => void;
}

function DeviceSelect<T>({ items, renderItem, onSelect }: SelectProps<T>) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li
          key={idx}
          onClick={() => onSelect(item)}
          style={{ cursor: "pointer", borderRadius: "8px" }}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default DeviceSelect;

// Target Usage:
// <DeviceSelect
//   items={[{ id: 'w1', model: 'kids-wearable' }]}
//   onSelect={(device) => console.log(device.model)} // 'device' should be strictly typed!
// />
