import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Addtask = () => {
  const queryClient = useQueryClient();
  async function addTodo(data: {
    id: string;
    value: string;
    completed: boolean;
  }) {
    const resp = await axios.post(`http://localhost:3000/tasks`, data);
    return resp.data;
  }

  const handleAdd = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <button
        onClick={() =>
          handleAdd.mutate({
            id: String(crypto.randomUUID()),
            value: "New Task",
            completed: false,
          })
        }
        disabled={handleAdd.isPending}
      >
        {handleAdd.isPending ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
};

export default Addtask;
