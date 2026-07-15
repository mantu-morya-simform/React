import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userThunk = createAsyncThunk("../slices/userSlice", async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error("Error While Data Fetching");
  }
});

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const initialState = {
  data: [],
  err: "",
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userThunk.pending, (state) => {
      state.isLoading = true;
      state.data = [];
      state.err = "";
    });

    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.err = "";
      state.isLoading = false;
    });

    builder.addCase(userThunk.rejected, (state, action) => {
      state.data = [];
      state.err = action.error.message || "Error While Data Fetching";
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
