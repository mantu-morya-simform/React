import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "Mantu" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="text-blue-500 hover:underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
