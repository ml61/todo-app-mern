import React from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { MahonInput } from "../../reusableComponents/Input/MahonInput";
import { ICategoryForm } from "./CategoriesModal";

interface ICreateEditCategoriessForm {
  form: ICategoryForm;
  setForm: (state: ICategoryForm) => void;
}

export const CreateEditCategoriessForm = ({
  form,
  setForm,
}: ICreateEditCategoriessForm) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <Label>Category</Label>
            <MahonInput
              name="categoryName"
              placeholder="Category"
              type="text"
              onChange={changeHandler}
              value={form.categoryName}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>
              Urgent hours <small>(less than)</small>
            </Label>
            <MahonInput
              name="urgentHrsLessThan"
              placeholder="Category"
              type="number"
              onChange={changeHandler}
              value={form.urgentHrsLessThan}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label>
              Medium hours <small>(less than)</small>
            </Label>
            <MahonInput
              name="mediumHrsLessThan"
              placeholder="Category"
              type="number"
              onChange={changeHandler}
              value={form.mediumHrsLessThan}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};
