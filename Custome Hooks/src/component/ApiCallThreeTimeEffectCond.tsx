import { useState } from "react";
import useEffectCond from "../hooks/useEffectCond";

type UserType = {
  id: number;
  name: string;
  email: string;
};

const ApiCallThreeTimeEffectCond = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiCount, setApiCount] = useState(1);

  useEffectCond(
    (stop) => {
      const fetchUser = async () => {
        try {
          setLoading(true);

          console.log(`API Call ${apiCount}`);

          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${apiCount == 1 || apiCount == 2 ? apiCount + "abc" : apiCount}`,
          );

          const data = await response.json();

          setUser(data);

          // Stop after 3 API calls
          if (Object.keys(data).length > 0) {
            stop();
            console.log("Stopped API calls");
            return;
          }

          // Trigger next API call
          setTimeout(() => {
            setApiCount((prev) => prev + 1);
          }, 2000);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    },
    [apiCount],
  );

  return (
    <div>
      <h2>User Profile</h2>

      <p>API Call Count: {apiCount}</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        user && (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </>
        )
      )}
    </div>
  );
};

export default ApiCallThreeTimeEffectCond;
