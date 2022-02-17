import React from "react";
import isEqual from "lodash/isEqual";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { IMahonModal } from "../../../interfaces/components/IMahonModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export enum ModalTypesEnum {
  CREATE = "create",
  EDIT = "edit",
  CONFIRM = "confirm",
}

const MahonModal = ({
  isModalOpen,
  setIsModalOpen,
  onFormSubmit,
  initialValues,
  values,
  title,
  renderBody,
  isLoading,
  errorMessage,
  onCloseModal,
  ...props
}: IMahonModal) => {
  const helperFunc = (a: {}) =>
    JSON.parse(
      JSON.stringify(a, (k, v) => (v == null || v == "" ? undefined : v))
    );

  const isNothingChanged = () => {
    if (!initialValues || !values) {
      return true;
    }
    return isEqual(helperFunc(initialValues), helperFunc(values));
  };

  return (
    <Modal
      {...props}
      centered
      isOpen={isModalOpen}
      toggle={() => setIsModalOpen(!isModalOpen)}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (onFormSubmit) onFormSubmit();
        }}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{renderBody()}</ModalBody>
        <ModalFooter className="d-flex">
          <span className="flex-grow-1">
            {errorMessage && (
              <span className="d-flex align-items-center">
                <FontAwesomeIcon
                  color="red"
                  className="me-2"
                  icon={faExclamationTriangle}
                />
                <span className="text-danger">{errorMessage}</span>
              </span>
            )}
          </span>
          <Button
            color="danger"
            onClick={() => {
              setIsModalOpen(false);
              if (onCloseModal) onCloseModal();
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={isNothingChanged() || isLoading}
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default MahonModal;
