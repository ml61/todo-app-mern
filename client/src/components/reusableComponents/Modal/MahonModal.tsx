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

const MahonModal = ({
  isModalOpen,
  setIsModalOpen,
  onFormSubmit,
  initialValues,
  values,
  title,
  renderBody,
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
        <ModalFooter>
          <Button color="danger" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button disabled={isNothingChanged()} color="primary" type="submit">
            Submit
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default MahonModal;
