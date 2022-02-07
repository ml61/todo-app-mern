import React from "react";
import { FormGroup, Input, InputProps, Label } from "reactstrap";

const MahonInput = (props: InputProps) => {
  const invalidChars = ["e", "E", "+"];

  const blockInvalidChar = (e: React.KeyboardEvent) =>
    invalidChars.includes(e.key) && e.preventDefault();

  return props.type === "number" ? (
    <Input {...props} onKeyDown={blockInvalidChar} />
  ) : (
    <Input {...props} />
  );
};

export { MahonInput };
