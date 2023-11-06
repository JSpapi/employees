export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

export type UserData = Omit<IUser, "id">;

// !LOGIN POST TYPE
export type LoginData = Pick<UserData, "email" | "password">;
