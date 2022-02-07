import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import TodoAppLogo from "../../assets/logos/todo-app-logo.svg";

const TodoSidebar = () => {
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
      <div className="d-flex flex-column">
        <h6>Categories</h6>
        <Label className="d-flex justify-content-between user-select-none">
          <span>
            <Input type="checkbox" className="me-2" />
            <span className="me-2">Category 1</span>{" "}
          </span>
          <FontAwesomeIcon role="button" icon={Icons.faPencilAlt} />
        </Label>
        <Label className="d-flex justify-content-between user-select-none">
          <span>
            <Input type="checkbox" className="me-2" />
            <span className="me-2">Category 2</span>
          </span>
          <FontAwesomeIcon role="button" icon={Icons.faPencilAlt} />
        </Label>
        <Label className="d-flex justify-content-between user-select-none">
          <span>
            <Input type="checkbox" className="me-2" />
            <span className="me-2">Category 3</span>
          </span>
          <FontAwesomeIcon role="button" icon={Icons.faPencilAlt} />
        </Label>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <h6>Urgency</h6>
        <Label className="mb-0 user-select-none">
          <Input type="checkbox" className="me-1" />
          Urgent
        </Label>
        <Label className="mb-0 user-select-none">
          <Input type="checkbox" className="me-1" />
          Medium
        </Label>
        <Label className="mb-0 user-select-none">
          <Input type="checkbox" className="me-1" />
          Low
        </Label>
      </div>
    </aside>
  );
};

export default TodoSidebar;
