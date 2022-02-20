import React from "react";
import { ITodo } from "../../interfaces/ITodo";
import { MahonCard } from "../reusableComponents/MahonCard";
import { SingleTodoCardHeader } from "./SingleTodoCardHeader";

interface ISingleTodoCardProps {
  singleTodo: ITodo;
}

const SingleTodoCardBody = ({ singleTodo }: ISingleTodoCardProps) => {
  return <div>{singleTodo.taskDescription}</div>;
};

const SingleTodoCard = ({ singleTodo }: ISingleTodoCardProps) => {
  return (
    <MahonCard
      renderHeader={() => <SingleTodoCardHeader singleTodo={singleTodo} />}
      renderBody={() => <SingleTodoCardBody singleTodo={singleTodo} />}
      className="mb-2"
    />
  );
};

export default SingleTodoCard;
