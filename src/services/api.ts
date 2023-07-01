import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const AUTH_API = `http://localhost:8000/api`;

const baseQuery = fetchBaseQuery({
  baseUrl: AUTH_API,
  prepareHeaders(headers, { getState }) {
    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem("token");

    if (token && token !== null)
      headers.set("authorization", `bearer ${token}`);
  },
});

const baseQueryWithretry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithretry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
