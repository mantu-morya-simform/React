/** 

3)  When the "Add Child" onboarding modal opens, keyboard focus should automatically jump to the child's name input field for a seamless experience. Fill in the missing hooks to safely reference the DOM node and apply focus when the component mounts.
TypeScript

*/

// ❌ HALF-BAKED IMPLEMENTATION

import { useState, useEffect, useRef } from "react";

export const AddChildModal = ({ isOpen }: { isOpen: boolean }) => {
  // 1. Initialize the ref for the input element here:

  const ref = useRef<HTMLInputElement | null>(null);

  // 2. Write the effect to trigger focus when `isOpen` becomes true:

  useEffect(() => {
    if (isOpen) {
      ref.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        style={{ backgroundColor: "#F97316", borderRadius: "16px" }}
      >
        <h2>Create Child Profile</h2>

        {/* 3. Attach the ref to this input */}
        <input
          type="text"
          placeholder="Enter child's name"
          className="flat-input"
          ref={ref}
        />
        <button className="flat-button">Next Step: Pair Device</button>
      </div>
    </div>
  );
};
