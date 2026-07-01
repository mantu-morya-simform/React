// import { useEffect, useRef, useState } from "react";

// // 1

// function Timer() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => setCount(count + 1), 1000);
//     return () => clearInterval(id);
//   }, []);
//   return <h1>{count}</h1>;
// }

// // 2

// function App() {
//   const [n, setN] = useState(0);
//   const config = { step: 1 };
//   useEffect(() => console.log("effect"), [config]);
//   return <button onClick={() => setN(n + 1)}>{n}</button>;
// }

// // 3.

// // Find for issue and fix it.

// function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: 1, text: "Learn React" },
//     { id: 2, text: "Write Code" },
//   ]);

//   const addTodo = () => {
//     setTodos([{ id: Math.random(), text: "New Task" }, ...todos]);
//   };

//   return (
//     <>
//       <button onClick={addTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo.text}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// // 4.

// // Find the issue and fix it.

// const initialState = { count: 0, name: "counter" };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       state.count += 1;
//       return state;
//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <p>
//         {state.name}: {state.count}
//       </p>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }

// //  5

// // What it will log. Why? and How to fix?

// function WindowTracker() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     function handleResize() {
//       console.log("Window width:", width);
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <div>Width: {width}</div>;
// }

// //  6

// // Fix the code to make it workable.

// function TimerComponent() {
//   const timer = useRef<ReturnType<typeof setInterval> | null>(null);
//   const startTimer = () => {
//     if (timer.current) return;
//     timer.current = setInterval(() => {
//       console.log("Tick");
//     }, 1000);
//   };

//   const stopTimer = () => {
//     if (timer.current) {
//       clearInterval(timer.current);
//       timer.current = null;
//     }
//   };

//   useEffect(() => {
//     startTimer();

//     return () => startTimer();
//   }, []);

//   return (
//     <div>
//       <button onClick={startTimer}>Start Timer</button>
//       <button onClick={stopTimer}>Stop Timer</button>
//     </div>
//   );
// }

// // 7.

// const SlowComponent = ({ items }) => {
//   const processedItems = items.map((item) => {
//     console.log("Processing item:", item);
//     return item * 2;
//   });

//   return (
//     <div>
//       {processedItems.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// };

// //  8.

// const filters = ["All", "Done"] as const;

// const isFilter = (value: string): value is (typeof filters)[number] =>
//   value in filters;

// //  9.

// const options = {
//   headers: {},
// };

// useEffect(() => {}, [options]);

// // 10.

// function Dashboard({ userId }: { userId: string }) {
//   const [users, setUsers] = useState<any[]>([]);
//   const [selected, setSelected] = useState<number | null>(null);

//   useEffect(() => {
//     fetch(`/api/users/${userId}`)
//       .then((r) => r.json())
//       .then(setUsers);
//   }, []);

//   const activeUsers = users.filter((u) => u.active);

//   return (
//     <>
//       {activeUsers.map((user) => (
//         <UserCard
//           key={Math.random()}
//           user={user}
//           onSelect={() => setSelected(user.id)}
//         />
//       ))}
//     </>
//   );
// }

// //  11.

// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Child />
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//     </>
//   );
// }

// // navigate(-1) vs window.history.back()

// //12

// import { useReducer } from "react";

// type UserProfile = { id: string; name: string };

// interface FetchState {
//   status: "idle" | "loading" | "success" | "error";
//   data?: UserProfile;
//   error?: string;
// }

// interface FetchAction {
//   type: "FETCH_START" | "FETCH_SUCCESS" | "FETCH_ERROR";
//   payload?: UserProfile | string;
// }

// function fetchReducer(state: FetchState, action: FetchAction): FetchState {
//   switch (action.type) {
//     case "FETCH_START":
//       return { status: "loading", data: undefined, error: undefined };
//     case "FETCH_SUCCESS":
//       // TypeScript allows this, but it's dangerous! payload might be a string.
//       return { status: "success", data: action.payload as UserProfile };
//     case "FETCH_ERROR":
//       return { status: "error", error: action.payload as string };
//     default:
//       return state;
//   }
// }

// //  13.

// import React, { useState } from "react";

// const MyButton = ({ onClick, buttonAttr }) => {
//   console.log("MyButton rendering");

//   return (
//     <div className="row">
//       <button onClick={onClick} disabled={buttonAttr.disabled}>
//         {buttonAttr.title}
//       </button>
//     </div>
//   );
// };

// const ButtonComp = () => {
//   const [value, setValue] = useState(0);

//   const buttonAttr = {
//     title: "Button with Attr",
//     disabled: false,
//   };

//   console.log("State: ", value);

//   return (
//     <MyButton
//       onClick={() => {
//         setValue((prev) => prev + 1);
//       }}
//       buttonAttr={buttonAttr}
//     />
//   );
// };

// const App = () => {
//   return <ButtonComp />;
// };

// function Counter() {
//   const count = useRef(0);
//   return (
//     <button
//       onClick={() => {
//         count.current++;
//         console.log(count.current);
//       }}
//     >
//       {count.current}
//     </button>
//   );
// }

// function User({ activeUser }) {
//   const [userData, setuserData] = useState(activeUser);
//   // what to do if activeUser changes?
//   return <></>;
// }

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log(count);
    }, 2000);

    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}

//  here it will print  0, in console and on button it will show 1
//  next it will print  1, in console and on button it will show 2

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}

//   each time it increase 1 when i cliak to button cause of batching for future changes and also update on ui

function App() {
  const ref = useRef(0);

  return (
    <button
      onClick={() => {
        ref.current++;
        console.log(ref.current);
      }}
    >
      {ref.current}
    </button>
  );
}

//    if i clicked 3 times then log update but not ui cause ref not reigger ui rerander on change

function App() {
  const [count, setCount] = useState(0);

  const user = {
    name: "John",
  };

  useEffect(() => {
    console.log("effect");
  }, [user]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

//    each time effect callback run when we click to btn cause each time it create the new reference for objext however the value is same here if we dont want the effect retrigger then use usememo to consisr the value

function App() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hello");
  };

  useEffect(() => {
    console.log("effect");
  }, [sayHello]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

//  again here we pass function as dependency so each time whan i click then count then it update count that cause re-rander on ui so again new fn ref created and pass new fn ref to dependency that cause the log
//  effect only cause the sayHello not called thats why he not log

const Child = React.memo(() => {
  console.log("Child");

  return <h1>Child</h1>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

/**
 * here when i click to btn then it change the count that make the comp re-rander anlo make child rerander so the value is change in parent and update the ui but in child we use REact.memo so it not re
 * rander cause use use REact.memo it prevent the re-rendring when anything change in parent  but it re-rander the parent anf change or increment the value by one on each btn click
 */

const Child = React.memo(({ user }) => {
  console.log("Child");

  return <h1>{user.name}</h1>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child user={{ name: "John" }} />

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

{
  users.map((u, i) => <User key={i} />);
}

//   here key problem is to use id as key cause it present it in the obj

function App() {
  const [users] = useState([
    { active: true },
    { active: false },
    { active: true },
  ]);

  const activeUsers = users.filter((u) => u.active);

  return <div>{activeUsers.length}</div>;
}

//   can wrap the calc value and fn in to useMEmeo  it prevent re calculate the file each time only if when userChange in useMemo dependency
