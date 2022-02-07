import { Route } from "react-router-dom";
import { Navigate } from "react-router";
import ActiveTodos from "../pages/ActiveTodos";
import ArchiveTodos from "../pages/ArchiveTodos";
import Auth from "../pages/Auth";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <>
        <Route path="active" element={<ActiveTodos />} />
        <Route path="archive" element={<ArchiveTodos />} />
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
