# Render Props Pattern in React

## What is Render Props?

Render Props is a React pattern used to **share reusable logic while keeping the UI customizable**.

In Render Props, a component passes data or logic through a **function prop**, and that function returns JSX.

### Simple Definition

> **Render Props is a pattern where a component shares logic and the consumer decides what UI to render by returning JSX.**

---

## Why do we use Render Props?

We use Render Props when:

- The **logic is same**
- The **UI needs to be different or customizable**

Instead of writing the same logic repeatedly, we create it once and reuse it in multiple places.

### Example Problems It Solves

- Show/Hide functionality
- Authentication state
- Mouse tracking
- Form validation
- Data fetching
- Toggle functionality

---

## Real-Life Analogy

Think about a **chef in a restaurant**.

- Chef cooks the food → **Logic**
- Customer decides plate style → **UI**

The chef provides the food, but presentation can be different.

Similarly:

- Component provides logic
- Consumer decides UI

---

## How Render Props Work

### Step-by-Step Flow

### Step 1: Create reusable logic

The component contains reusable state or logic.

Example: Toggle functionality.

```tsx
import { useState } from "react";

type ToggleProps = {
  render: (isOpen: boolean, toggle: () => void) => React.ReactNode;
};

const Toggle = ({ render }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return render(isOpen, toggle);
};

export default Toggle;
```

---

### Step 2: Use the component

We pass a function to `render`.

That function receives logic (`isOpen`) and returns JSX.

```tsx
<Toggle
  render={(isOpen, toggle) => (
    <div>
      <button onClick={toggle}>Toggle</button>

      <p>{isOpen ? "Menu Open" : "Menu Closed"}</p>
    </div>
  )}
/>
```

---

## How It Works Internally

### Step 1

`Toggle` component stores logic.

```tsx
const [isOpen, setIsOpen] = useState(false);
```

---

### Step 2

It passes logic through:

```tsx
render(isOpen, toggle);
```

---

### Step 3

Consumer receives data.

```tsx
(isOpen, toggle);
```

---

### Step 4

Based on logic, UI is rendered.

```tsx
isOpen ? "Open" : "Close";
```

---

## Why Render Props Are Useful

### 1. Reusable Logic

No repeated logic.

Instead of writing:

```tsx
const [isOpen, setIsOpen] = useState(false);
```

again and again, write it once.

---

### 2. Customizable UI

Different components can use the same logic with different UI.

Example:

### Text UI

```tsx
<Toggle render={(isOpen) => <p>{isOpen ? "Open" : "Close"}</p>} />
```

### Button UI

```tsx
<Toggle
  render={(isOpen) => (
    <button>{isOpen ? "Hide Password" : "Show Password"}</button>
  )}
/>
```

Same logic, different UI.

---

## Benefits

### 1. Code Reusability

Logic is written once.

### 2. Flexible UI

UI can be customized.

### 3. Separation of Concerns

Logic and UI remain separate.

### 4. Cleaner Components

Avoid duplicate logic.

---

## Cons

### 1. Nested Code

Too many render props can make code hard to read.

```tsx
<A>{(a) => <B>{(b) => <C>{(c) => <App />}</C>}</B>}</A>
```

---

### 2. Hooks Are Simpler

Modern React mostly prefers **Custom Hooks**.

---

## When to Use Render Props?

Use Render Props when:

✅ Logic is reusable
✅ UI must be customizable
✅ Different screens need different UI

Examples:

- Toggle component
- Form validation
- Authentication
- Drag and Drop
- Animation libraries

---

## When NOT to Use It?

Avoid Render Props when:

❌ UI is always same
❌ Logic is simple
❌ A Custom Hook is enough

Instead use:

```tsx
const { isOpen, toggle } = useToggle();
```

---

## Render Props vs Custom Hook

| Render Props                      | Custom Hook              |
| --------------------------------- | ------------------------ |
| Shares logic using function props | Shares logic using hooks |
| UI is highly customizable         | Cleaner syntax           |
| Can create nesting                | Easier to read           |

---

## Final Conclusion

> **Render Props is a React pattern used to share reusable logic while allowing the UI to stay customizable. Based on the shared logic or state, we return custom JSX.**
