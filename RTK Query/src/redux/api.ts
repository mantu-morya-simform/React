import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "api",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({ query: () => "/tasks", providesTags: ["Posts"] }),
    setTasks: builder.mutation({
      query: (post) => ({
        url: "/tasks",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"], // auto refetch getTasks
    }),
  }),
});

export const { useGetTasksQuery, useSetTasksMutation, useDeleteTaskMutation } =
  myApi;
