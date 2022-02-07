import { createContext } from "react";

interface IAuthContext {
  token: null | string | undefined;
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  userName: string;
}

export const AuthContext = createContext<IAuthContext>({
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  userName: "User",
});
