import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Detail - ID: {id}</h1>
    </div>
  );
};

export default UserDetail;
