import { IUser, UserData } from "../types/user.type";
import { api } from "./api";

type ResponseLoginData = IUser & { token: string };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // !TOMORROW WILL WORK WITH ENDPOINTS AND TOKEN
    // login: builder.mutation<ResponseLoginData, UserData>({})
  }),
});
