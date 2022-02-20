import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { MahonToast } from "../components/reusableComponents/Toast/MahonToast";
import SingleTodoCard from "../components/singleTodoCard/SingleTodoCard";
import { useApi } from "../hooks/useApi";
import { useToastState } from "../hooks/useToastState";
import { ICategory } from "../interfaces/ICategory";
import { ITodo } from "../interfaces/ITodo";
import { ApiMethodEnum } from "../utils/enums/apiMethodsEnum";
import { ApiPathEnum } from "../utils/enums/apiPathEnum";
import { MahonToastEnum } from "../utils/enums/mahonToastEnum";
import { formatErrors } from "../utils/helpers/formatError";

interface IActiveTodosContainerProps {
  categories: ICategory[];
}

const ActiveTodosContainer = ({ categories }: IActiveTodosContainerProps) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { request, isLoading, errorMessage } = useApi();
  const { isToastShown, toastType, showToast, closeToast, toastBodyContent } =
    useToastState();

  const getTodos = () => {
    request(
      ApiPathEnum.TODOS,
      ApiMethodEnum.GET,
      null,
      (todos: ITodo[]) => {
        const formattedTodos = todos.map((todo) => ({
          ...todo,
          categoryName: categories.find(
            (category) => category._id === todo.categoryId
          )?.categoryName,
        }));
        setTodos(formattedTodos);
      },
      (err) => {
        showToast(MahonToastEnum.DANGER, formatErrors(err));
      }
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <MahonToast
        isToastShown={isToastShown}
        toastBodyContent={toastBodyContent}
        toastType={toastType}
        closeToast={closeToast}
      />

      <div className="main-layout">
        <div className="d-flex flex-column">
          <Button
            onClick={() => {}}
            border="true"
            className="align-self-end mb-2 mt-3 me-2 card-background-custom text-color-black"
          >
            Add Category
          </Button>
          {todos.map((singleTodo) => (
            <SingleTodoCard key={singleTodo._id} singleTodo={singleTodo} />
          ))}
        </div>
      </div>
    </>
  );
};

export { ActiveTodosContainer };
