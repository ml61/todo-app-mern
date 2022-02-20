import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { errorType, useApi } from "../../../hooks/useApi";
import { ICategory } from "../../../interfaces/ICategory";
import { ApiPathEnum } from "../../../utils/enums/apiPathEnum";
import { ApiMethodEnum } from "../../../utils/enums/apiMethodsEnum";
import { formatErrors } from "../../../utils/helpers/formatError";
import { useToastState } from "../../../hooks/useToastState";
import { MahonToast } from "../../reusableComponents/Toast/MahonToast";
import { MahonToastEnum } from "../../../utils/enums/mahonToastEnum";
import SingleCategory from "./SingleCategory";
import CategoriesModal, { ICategoryForm } from "./CategoriesModal";
import { ModalTypesEnum } from "../../reusableComponents/Modal/MahonModal";

const initialCategoryValues: ICategoryForm = {
  categoryName: "",
  urgentHrsLessThan: undefined,
  mediumHrsLessThan: undefined,
};

export interface ISidebarCategoriesSectionProps {
  categories: ICategory[];
  setCategories: (state: ICategory[]) => void;
}

const SidebarCategoriesSection = ({
  categories,
  setCategories,
}: ISidebarCategoriesSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryToEditId, setCategoryToEditId] = useState("");
  const { request, isLoading, errorMessage } = useApi();
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

  useEffect(() => {
    if (!categoryToEditId) setIsModalOpen(false);
    if (categoryToEditId) setIsModalOpen(true);
  }, [categoryToEditId]);

  const onCreateFormSubmit = (form: ICategoryForm) => {
    request(
      ApiPathEnum.CATEGORIES,
      ApiMethodEnum.POST,
      { ...form },
      (newCategory: ICategory) => {
        setCategories([...categories, newCategory]);
        setIsModalOpen(false);
        showToast(
          MahonToastEnum.SUCCESS,
          `New category '${newCategory.categoryName}' was successfully created.`
        );
      }
    );
  };
  const onEditFormSubmit = (form: ICategoryForm) => {
    request(
      ApiPathEnum.CATEGORIES + `/${categoryToEditId}`,
      ApiMethodEnum.PATCH,
      { ...form },
      (newEditedCategory: ICategory) => {
        const newCategories = [...categories];
        const indexOfEditedCategory = categories.findIndex(
          ({ _id }) => newEditedCategory._id === _id
        );
        newCategories.splice(indexOfEditedCategory, 1, newEditedCategory);
        console.log();

        setCategories(newCategories);
        setCategoryToEditId("");
        showToast(
          MahonToastEnum.SUCCESS,
          `Category '${newEditedCategory.categoryName}' was successfully edited.`
        );
      },
      (err: errorType) => {}
    );
  };

  const generateInitialValues = () => {
    if (!categoryToEditId) return initialCategoryValues;
    const categoryToEdit =
      categories.find(({ _id }) => categoryToEditId === _id) ??
      initialCategoryValues;
    const { categoryName, urgentHrsLessThan, mediumHrsLessThan } =
      categoryToEdit;
    return { categoryName, urgentHrsLessThan, mediumHrsLessThan };
  };

  return (
    <>
      <CategoriesModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onFormSubmit={categoryToEditId ? onEditFormSubmit : onCreateFormSubmit}
        isLoading={isLoading}
        errorMessage={errorMessage}
        initialCategoryValues={generateInitialValues()}
        onCloseModal={() => setCategoryToEditId("")}
        isEdit={categoryToEditId ? true : false}
      />
      <MahonToast
        isToastShown={isToastShown}
        toastBodyContent={toastBodyContent}
        toastType={toastType}
        closeToast={closeToast}
      />
      <div className="d-flex flex-column">
        <h6>Categories</h6>
        <Button
          onClick={() => setIsModalOpen(true)}
          border="true"
          className="mb-2 card-background-custom text-color-black"
        >
          Add Category
        </Button>
        {categories.map((category) => (
          <SingleCategory
            key={category._id}
            setCategoryToEditId={setCategoryToEditId}
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
