import { useSetTasksMutation } from "../redux/api";

const Addtask = () => {
  const [addPost, { isLoading }] = useSetTasksMutation();

  const handleAdd = async () => {
    try {
      await addPost({ value: "New Task", completed: false });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleAdd} disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Task"}
      </button>
    </div>
  );
};

export default Addtask;
