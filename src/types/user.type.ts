export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

export type UserData = Omit<IUser, 'id'>