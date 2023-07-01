import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const AUTH_API = `http://localhost:8000/api`;

export const api = createApi({
  reducerPath: "splitApi",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_API,
  }),
  endpoints: () => ({}),
});
