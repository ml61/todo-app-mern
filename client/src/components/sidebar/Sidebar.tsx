import React from "react";
import TodoAppLogo from "../../assets/logos/todo-app-logo.svg";

const MahonSidebar = () => {
  return (
    <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
      <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img
          src={TodoAppLogo}
          alt="logo"
          className="me-2"
          style={{ width: "50px" }}
        />

        <span className="fs-4">TODO-APP</span>
      </span>
      <hr />
      <div className="nav nav-pills flex-column mb-auto">
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
      </div>
    </aside>
  );
};

export default MahonSidebar;
