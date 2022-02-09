import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
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
        <Button border className="mb-2 card-background-custom text-color-black">
          Add Category
        </Button>
        <div className="d-flex justify-content-between">
          <Label className="d-flex justify-content-between user-select-none">
            <span>
              <Input type="checkbox" className="me-2" />
              <span className="me-2">Category 1</span>{" "}
            </span>
          </Label>
          <FontAwesomeIcon role="button" icon={Icons.faPencilAlt} />
        </div>
        <div className="d-flex justify-content-between">
          <Label className="d-flex justify-content-between user-select-none">
            <span>
              <Input type="checkbox" className="me-2" />
              <span className="me-2">Category 1</span>{" "}
            </span>
          </Label>
          <FontAwesomeIcon role="button" icon={Icons.faPencilAlt} />
        </div>
        <div className="d-flex justify-content-between">
          <Label className="d-flex justify-content-between user-select-none">
            <span>
              <Input type="checkbox" className="me-2" />
              <span className="me-2">Category 1</span>{" "}
            </span>
          </Label>
          <FontAwesomeIcon role="button" icon={Icons.faPencilAlt} />
        </div>
      </div>
      <hr />
      <div className="d-flex flex-column">
        <h6>Urgency</h6>
        <Label className="mb-0 user-select-none">
          <Input
            onChange={(e) => {
              console.log(e.target.checked);
            }}
            type="checkbox"
            className="me-2"
          />
          Urgent
        </Label>
        <Label className="mb-0 user-select-none">
          <Input type="checkbox" className="me-2" />
          Medium
        </Label>
        <Label className="mb-0 user-select-none">
          <Input type="checkbox" className="me-2" />
          Low
        </Label>
      </div>
      <hr />
      <div className="d-flex flex-column user-select-none">
        <h6>Sort</h6>
        <span className="mb-1 cursor-pointer">Fieldddd 1</span>
        <span className="mb-1 cursor-pointer">Fieldddd 1</span>
        <span className="mb-1 cursor-pointer">Fieldddd 1</span>
        <span className="mb-1 cursor-pointer">Fieldddd 1</span>
        <span className="mb-1 cursor-pointer">Fieldddd 1</span>
      </div>
    </aside>
  );
};

export default TodoSidebar;
