import { useState } from "react";
import useEffectOnce from "../hooks/useEffectOnce";
import useEffectCond from "../hooks/useEffectCond";

type UserDataType = {
  name: string;
  country: string;
};

const UserProfile = () => {
  const [user, setUser] = useState<UserDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  // useEffectOnce(
  //   (stop) => {
  //     console.log("useEffectCont running");

  //     setTimeout(() => {
  //       setUser({
  //         name: `Mantu-${count}`,
  //         country: "India",
  //       });
  //       setLoading(false);
  //       setCount((prev) => prev + 1);
  //     }, 1000);

  //     // do something once
  //     console.log(`Welcome Count:${count}`);

  //     // stop execution if condition match

  //     stop();
  //   },
  //   [count],
  // );
  useEffectCond(
    (stop) => {
      console.log("useEffectCont running");

      const timeoutId = setTimeout(() => {
        setUser({
          name: `Mantu-${count}`,
          country: "India",
        });
        setLoading(false);
        setCount((prev) => prev + 1);
      }, 1000);

      // do something once
      console.log(`Welcome Count:${count}`);

      // stop execution if condition match
      if (count === 5) {
        stop();
      }

      //cleanup
      return () => {
        clearTimeout(timeoutId);
      };
    },
    [count],
  );

  return (
    <div>
      <h2>User Profile</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {user.name}</p>
          <p>Country: {user.country}</p>
        </>
      )}
    </div>
  );
};

export default UserProfile;
