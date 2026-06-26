import "./App.css";
import Addtask from "./component /Addtask";
import { useDeleteTaskMutation, useGetTasksQuery } from "./redux/api";

function App() {
  const { isLoading, isError, isSuccess, data, error } = useGetTasksQuery("");
  console.log(isLoading, isError, isSuccess, data, error);
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <>
      <Addtask />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.value}</span>{" "}
              <span>{todo.completed ? "Completed" : "Pending"}</span>{" "}
              <button onClick={() => deleteTask(todo.id)}>Remove</button>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
