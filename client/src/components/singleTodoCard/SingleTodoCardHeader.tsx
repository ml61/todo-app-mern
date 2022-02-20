import React from "react";
import { Col, Row } from "reactstrap";
import { ITodo } from "../../interfaces/ITodo";
import { format } from "date-fns";

interface ISingleTodoCardHeader {
  singleTodo: ITodo;
}

const SingleTodoCardHeader = ({ singleTodo }: ISingleTodoCardHeader) => {
  const { taskDescription, taskName, deadline, categoryId, categoryName } =
    singleTodo;

  const formattedDeadline = format(new Date(deadline), "dd/mm/yy, HH:mm");
  return (
    <Row>
      <Col>{taskName}</Col>
      <Col>{categoryName}</Col>
      <Col>{formattedDeadline}</Col>
    </Row>
  );
};
export { SingleTodoCardHeader };
