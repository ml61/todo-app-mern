import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveTodos from "./pages/ActiveTodos";
import ArchiveTodos from "./pages/ArchiveTodos";
import Auth from "./pages/Auth";
import "./assets/css/index.css";
import { useAuth } from "./hooks/useAuth";
import { useRoutes } from "./hooks/useRoutes";
import { AuthContext } from "./context/authContext";
import { MahonNavbar } from "./components/navbar/MahonNavbar";
import MahonSidebar from "./components/sidebar/Sidebar";

function App() {
  const { login, logout, token, ready, userName } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  useEffect(() => {});
  return (
    <AuthContext.Provider
      value={{ login, logout, token, isAuthenticated, userName }}
    >
      <BrowserRouter>
        {isAuthenticated && (
          <div style={{ marginLeft: "280px" }}>
            <MahonNavbar />
          </div>
        )}
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
