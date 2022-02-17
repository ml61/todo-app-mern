import { ReactNode } from "react";
import { ModalProps } from "reactstrap";

export interface IMahonModal extends ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
  onFormSubmit?: () => void;
  initialValues?: {};
  values?: {};
  title: string;
  renderBody: () => ReactNode;
  isLoading?: boolean;
  errorMessage?: string;
  onCloseModal?: () => void;
}
