import React from "react";
import TodoSidebar from "../components/sidebar/TodoSidebar";

const ActiveTodos = () => {
  return (
    <>
      <TodoSidebar />
      <div className="main-layout">
        <div style={{ height: "200px" }}>MAIN LIST TODO</div>
        <div style={{ height: "200px" }}>MAIN LIST TODO</div>
        <div style={{ height: "200px" }}>MAIN LIST TODO</div>
        <div style={{ height: "200px" }}>MAIN LIST TODO</div>
        <div style={{ height: "200px" }}>MAIN LIST TODO</div>
      </div>
    </>
  );
};

export default ActiveTodos;
