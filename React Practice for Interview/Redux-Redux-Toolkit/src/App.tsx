import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import type { DispatchType, StoreType } from "./redux/store";
import { use, useEffect } from "react";
import todoThunk from "./redux/slices/todothunk";

function App() {
  const store = useSelector((store: StoreType) => store.counter);
  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(todoThunk());
  }, []);

  console.log(store.data);

  return (
    <div>
      {store.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {store.data.map((user) => (
            <div id={crypto.randomUUID()}>
              <p>
                {user.name} userName is: {user.username} Phone {user.phone} and
                Email {user.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
