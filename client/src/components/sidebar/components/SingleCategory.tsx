import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import * as Icons from "@fortawesome/free-solid-svg-icons";

import { Input, Label } from "reactstrap";
import { ICategory } from "../../../interfaces/ICategory";
import { MahonIcon } from "../../reusableComponents/MahonIcon/MahonIcon";
import { useApi } from "../../../hooks/useApi";
import { ApiPathEnum } from "../../../utils/enums/apiPathEnum";
import { ApiMethodEnum } from "../../../utils/enums/apiMethodsEnum";
import { formatErrors } from "../../../utils/helpers/formatError";
import { MahonToastEnum } from "../../../utils/enums/mahonToastEnum";
import { showToastType } from "../../../hooks/useToastState";

interface ISingleCategoryProps {
  category: ICategory;
  showToast: showToastType;
  categories: ICategory[];
  setCategories: (categories: ICategory[]) => void;
}

const SingleCategory = ({
  category,
  showToast,
  setCategories,
  categories,
}: ISingleCategoryProps) => {
  const {
    _id: categoryId,
    categoryName,
    mediumHrsLessThan,
    urgentHrsLessThan,
  } = category;
  const { request, isLoading } = useApi();

  const deleteCategory = () => {
    request(
      ApiPathEnum.CATEGORIES + `/${categoryId}`,
      ApiMethodEnum.DELETE,
      null,
      (data) => {
        console.log(data);
        const newCategories = categories.filter(
          ({ _id }) => _id !== categoryId
        );
        setCategories(newCategories);
        showToast(
          MahonToastEnum.SUCCESS,
          `Category '${categoryName}' was successfully deleted`
        );
      },
      (err) => {
        showToast(MahonToastEnum.DANGER, formatErrors(err));
      }
    );
  };

  return (
    <div key={category._id} className="d-flex justify-content-between">
      <Label role="button" className="d-flex user-select-none flex-grow-1">
        <span>
          <Input role="button" type="checkbox" className="me-2" />
          <span className="me-2">{categoryName}</span>
        </span>
      </Label>
      <MahonIcon
        isLoading={isLoading}
        icon={Icons.faPencilAlt}
        className="me-2"
        onClick={() => {}}
      />
      <MahonIcon
        isLoading={isLoading}
        icon={Icons.faTrash}
        onClick={deleteCategory}
      />
    </div>
  );
};

export default SingleCategory;
