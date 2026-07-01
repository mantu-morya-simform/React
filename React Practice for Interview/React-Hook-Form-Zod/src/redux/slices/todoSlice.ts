import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const myApi = createApi({
  reducerPath: "myApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
      providesTags: ["Posts"],
    }),
    setTodos: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        body: todo,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useSetTodosMutation } = myApi;

export default myApi;
