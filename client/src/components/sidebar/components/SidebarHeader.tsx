import React from "react";
import TodoAppLogo from "../../../assets/logos/todo-app-logo.svg";

const SidebarHeader = () => {
  return (
    <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img
        src={TodoAppLogo}
        alt="logo"
        className="me-2"
        style={{ width: "50px" }}
      />

      <span className="fs-4">TODO-APP</span>
    </span>
  );
};

export default SidebarHeader;
