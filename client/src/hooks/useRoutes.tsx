import { Route } from "react-router-dom";
import { Navigate } from "react-router";
import ActiveTodos from "../pages/ActiveTodos";
import Auth from "../pages/Auth";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <>
        <Route path="active" element={<ActiveTodos />} />
        <Route path="*" element={<Navigate to="/active" />} />
      </>
    );
  }
  return (
    <>
      <Route path="/" element={<Auth />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  );
};
