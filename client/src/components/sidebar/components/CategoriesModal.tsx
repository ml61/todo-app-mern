import React, { useState } from "react";
import MahonModal from "../../reusableComponents/Modal/MahonModal";
import { CreateEditCategoriessForm } from "./CreateEditCategoriessForm";

interface CategoriesModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
}

export interface ICategoryForm {
  categoryName: string;
  urgentHrsLessThan: number | string | undefined;
  mediumHrsLessThan: number | string | undefined;
}

const CategoriesModal = ({
  isModalOpen,
  setIsModalOpen,
}: CategoriesModalProps) => {
  const initialCategoryValues: ICategoryForm = {
    categoryName: "",
    urgentHrsLessThan: undefined,
    mediumHrsLessThan: undefined,
  };

  const [form, setForm] = useState(initialCategoryValues);

  const onFormSubmit = () => {
    console.log("form", form);
  };

  return (
    <MahonModal
      size="lg"
      isModalOpen={isModalOpen}
      initialValues={initialCategoryValues}
      values={form}
      setIsModalOpen={setIsModalOpen}
      title="Add Category"
      onFormSubmit={onFormSubmit}
      renderBody={() => (
        <CreateEditCategoriessForm form={form} setForm={setForm} />
      )}
    />
  );
};

export default CategoriesModal;
