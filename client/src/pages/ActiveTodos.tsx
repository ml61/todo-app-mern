import React, { useEffect, useState } from "react";
import TodoSidebar from "../components/sidebar/TodoSidebar";
import { ActiveTodosContainer } from "../containers/ActiveTodosContainer";
import { useApi } from "../hooks/useApi";
import { ICategory } from "../interfaces/ICategory";

const ActiveTodos = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  return (
    <>
      <TodoSidebar setCategories={setCategories} categories={categories} />
      <ActiveTodosContainer categories={categories} />
    </>
  );
};

export default ActiveTodos;
