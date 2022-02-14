import { Col, FormGroup, Label, Row } from "reactstrap";
import { MahonInput } from "../reusableComponents/Input/MahonInput";

export type formType = {
  email: string;
  name: string;
  password: string;
};
interface ILoginRegisterForm {
  isRegisterMode: boolean;
  onChangeHandler: () => void;
  form: formType;
}

const LoginRegisterForm = ({
  isRegisterMode,
  onChangeHandler,
  form,
}: ILoginRegisterForm) => {
  return (
    <>
      <Row className="flex-grow-1">
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <MahonInput
              required
              onChange={onChangeHandler}
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
            />
          </FormGroup>
          {isRegisterMode && (
            <FormGroup>
              <Label>Name</Label>
              <MahonInput
                required
                onChange={onChangeHandler}
                name="name"
                placeholder="Name"
                type="text"
                value={form.name}
              />
            </FormGroup>
          )}
          <FormGroup>
            <Label>Password</Label>
            <MahonInput
              required
              onChange={onChangeHandler}
              name="password"
              placeholder="Password"
              type="password"
              value={form.password}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export { LoginRegisterForm };
