import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Input, Label } from "reactstrap";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { errorType, useApi } from "../../../hooks/useApi";
import { ICategory } from "../../../interfaces/ICategory";
import { ApiPathEnum } from "../../../utils/enums/apiPathEnum";
import { ApiMethodEnum } from "../../../utils/enums/apiMethodsEnum";
import { formatErrors } from "../../../utils/helpers/formatError";
import { AuthContext } from "../../../context/authContext";
import { useToastState } from "../../../hooks/useToastState";
import { MahonToast } from "../../reusableComponents/Toast/MahonToast";
import { MahonToastEnum } from "../../../utils/enums/mahonToastEnum";
import SingleCategory from "./SingleCategory";

const SidebarCategoriesSection = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { request, isLoading } = useApi();
  const { isToastShown, toastType, showToast, closeToast, toastBodyContent } =
    useToastState();

  useEffect(() => {
    request(
      ApiPathEnum.CATEGORIES,
      ApiMethodEnum.GET,
      null,
      (data: ICategory[]) => {
        setCategories(data);
      },
      (err: errorType) => {
        const errMessage = formatErrors(err);
        showToast(MahonToastEnum.DANGER, errMessage);
      }
    );
  }, []);

  return (
    <>
      <MahonToast
        isToastShown={isToastShown}
        toastBodyContent={toastBodyContent}
        toastType={toastType}
        closeToast={closeToast}
      />
      <div className="d-flex flex-column">
        <h6>Categories</h6>
        <Button border className="mb-2 card-background-custom text-color-black">
          Add Category
        </Button>
        {categories.map((category) => (
          <SingleCategory
            showToast={showToast}
            category={category}
            setCategories={setCategories}
            categories={categories}
          />
        ))}
      </div>
    </>
  );
};

export default SidebarCategoriesSection;
