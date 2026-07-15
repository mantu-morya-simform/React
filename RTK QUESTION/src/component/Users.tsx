import { useDispatch, useSelector } from "react-redux";
import type { DispatchType, StoreType } from "../redux/store";
import { useEffect } from "react";
import { userThunk, type User } from "../redux/slices/userSlice";

const Users = () => {
  const state = useSelector((store: StoreType) => store.user);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(userThunk());
  }, []);

  if (state.isLoading) {
    return <p>Data Loading...</p>;
  }

  if (state.err.length > 0) {
    console.log(state.err);
    return <p>Error To Load Data</p>;
  }

  return (
    <div>
      {state.data.map((item: User) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
