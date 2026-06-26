import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import axios from "axios";
import Addtask from "./component/Addtask";

function App() {
  const queryClient = useQueryClient();
  async function fetchTodos() {
    const resp = await axios.get("http://localhost:3000/tasks");
    return resp.data;
  }
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  async function removeTodo(id: number) {
    const resp = await axios.delete(`http://localhost:3000/tasks/${id}`);
    return resp.data;
  }

  const removeTodos = useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

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
              <button onClick={() => removeTodos.mutate(todo.id)}>
                Remove
              </button>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
