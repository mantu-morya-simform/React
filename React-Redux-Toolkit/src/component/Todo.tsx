import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { clearData, fetchTodos } from "../Redux/slices/thunkTodoSlice";
import type { AppDispatch, StoreType } from "../Redux/store";

const Todo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todoDataStore = useSelector((store: StoreType) => store.thunktodo);
  // console.log(todoDataStore);
  return (
    <div className="todo__main">
      Todo
      <div className="action__btn">
        <button
          onClick={() => {
            dispatch(fetchTodos());
          }}
          disabled={todoDataStore.data ? true : false}
        >
          Fetch Todos
        </button>
        <button
          onClick={() => {
            dispatch(clearData());
          }}
          disabled={!todoDataStore.data ? true : false}
        >
          Clear Todos
        </button>
      </div>
      {!todoDataStore.data &&
        !todoDataStore.isLoading &&
        !todoDataStore.isErr && (
          <p>Not Any Todo Yet, You have to fetch First</p>
        )}
      {!todoDataStore.data &&
        todoDataStore.isLoading &&
        !todoDataStore.isErr && <p>Data Loading</p>}
      {todoDataStore.data &&
        !todoDataStore.isLoading &&
        !todoDataStore.isErr && <p>Data Fetched</p>}
      <div className="driver-container">
        {todoDataStore.data &&
          todoDataStore.data.drivers.map((todo) => (
            <div className="driver-card" key={todo.driverId}>
              <img
                src={`https://loremflickr.com/800/600/f1?random=${Math.random()}`}
                alt="F1 car"
                height={200}
                width={280}
              />
              <h3 className="driver-name">
                {todo.name} {todo.surname}
              </h3>

              <p>
                <strong>Driver ID:</strong> {todo.driverId}
              </p>

              <p>
                <strong>Nationality:</strong> {todo.nationality}
              </p>

              <p>
                <strong>Birthday:</strong>{" "}
                {new Date(todo.birthday).toLocaleDateString()}
              </p>

              <a
                href={todo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="wiki-link"
              >
                View Profile
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
