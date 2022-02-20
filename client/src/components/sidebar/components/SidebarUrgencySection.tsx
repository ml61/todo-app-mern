import React from "react";
import { Input, Label } from "reactstrap";

const SidebarUrgencySection = () => {
  return (
    <div className="d-flex flex-column">
      <h6>Urgency</h6>
      <Label role="button" className="mb-0 user-select-none">
        <Input
          role="button"
          onChange={(e) => {}}
          type="checkbox"
          className="me-2"
        />
        Overdue
      </Label>
      <Label role="button" className="mb-0 user-select-none">
        <Input
          role="button"
          onChange={(e) => {}}
          type="checkbox"
          className="me-2"
        />
        Urgent
      </Label>
      <Label role="button" className="mb-0 user-select-none">
        <Input role="button" type="checkbox" className="me-2" />
        Medium
      </Label>
      <Label role="button" className="mb-0 user-select-none">
        <Input role="button" type="checkbox" className="me-2" />
        Low
      </Label>
    </div>
  );
};

export default SidebarUrgencySection;
