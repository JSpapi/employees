import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const AUTH_API = `http://localhost:8000/api`;

const baseQuery = fetchBaseQuery({
  baseUrl: AUTH_API,
});

const baseQueryWithretry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithretry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
