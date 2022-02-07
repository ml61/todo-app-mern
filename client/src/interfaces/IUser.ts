import { ITodo } from "./ITodo";

export interface IUser {
  _id?: string;
  email: string;
  name: string;
  password: string;
  todos: ITodo[];
}
