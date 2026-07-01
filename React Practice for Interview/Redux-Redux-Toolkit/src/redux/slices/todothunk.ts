import { createAsyncThunk } from "@reduxjs/toolkit";

const todoThunk = createAsyncThunk("users/fetchUser", async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!resp.ok) {
    console.log("Something problem in getting todos");
  }

  return resp.json();
});

export default todoThunk;
