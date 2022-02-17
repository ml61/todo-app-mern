import React, { useEffect, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useToastState } from "../../../hooks/useToastState";
import { formatErrors } from "../../../utils/helpers/formatError";
import MahonModal from "../../reusableComponents/Modal/MahonModal";
import { CreateEditCategoriessForm } from "./CreateEditCategoriessForm";

interface CategoriesModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
  onFormSubmit: (form: ICategoryForm) => void;
  isLoading: boolean;
  errorMessage?: string;
  initialCategoryValues: ICategoryForm;
  onCloseModal?: () => void;
  isEdit?: boolean;
}

export interface ICategoryForm {
  categoryName: string;
  urgentHrsLessThan: number | string | undefined;
  mediumHrsLessThan: number | string | undefined;
}

const CategoriesModal = ({
  isModalOpen,
  setIsModalOpen,
  onFormSubmit,
  isLoading,
  errorMessage,
  initialCategoryValues,
  onCloseModal,
  isEdit,
}: CategoriesModalProps) => {
  const [form, setForm] = useState(initialCategoryValues);

  useEffect(() => {
    setForm(initialCategoryValues);
  }, [isModalOpen]);

  return (
    <MahonModal
      size="lg"
      isModalOpen={isModalOpen}
      initialValues={initialCategoryValues}
      values={form}
      setIsModalOpen={setIsModalOpen}
      title={isEdit ? "Edit category" : "Add Category"}
      onFormSubmit={() => onFormSubmit(form)}
      renderBody={() => (
        <CreateEditCategoriessForm form={form} setForm={setForm} />
      )}
      isLoading={isLoading}
      errorMessage={errorMessage}
      onCloseModal={onCloseModal}
    />
  );
};

export default CategoriesModal;
