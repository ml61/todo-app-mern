import React, { useCallback, useContext, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { MahonCard } from "../components/reusableComponents/MahonCard";
import TodoAppLogo from "../assets/logos/todo-app-logo.svg";
import { LoginRegisterForm } from "../components/login/LoginRegisterForm";
import { useApi } from "../hooks/useApi";
import { AuthContext } from "../context/authContext";
import { ApiPathEnum } from "../utils/enums/apiPathEnum";
import { ApiMethodEnum } from "../utils/enums/apiMethodsEnum";
import { useToastState } from "../hooks/useToastState";
import { MahonToast } from "../components/reusableComponents/Toast/MahonToast";
import { MahonToastEnum } from "../utils/enums/mahonToastEnum";
import { formatErrors } from "../utils/helpers/formatError";

const Auth = () => {
  const initialFormState = { email: "", name: "", password: "" };
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const { isLoading, request, error, clearError } = useApi();
  const { login } = useContext(AuthContext);

  const { isToastShown, toastType, showToast, closeToast, toastBodyContent } =
    useToastState();

  const onSubmitForm = async () => {
    isRegisterMode
      ? request(
          ApiPathEnum.REGISTER,
          ApiMethodEnum.POST,
          {
            ...form,
          },
          (data) => {
            showToast(MahonToastEnum.SUCCESS, "User was successfully created");
            setIsRegisterMode(false);
            setForm(initialFormState);
          },
          ({ errorsArr }) => {
            showToast(MahonToastEnum.DANGER, formatErrors(errorsArr));
          }
        )
      : request(
          ApiPathEnum.LOGIN,
          ApiMethodEnum.POST,
          {
            ...form,
          },
          ({ token, userId, userName }) => {
            login(token, userId, userName);
          },
          ({ errorsArr }) => {
            showToast(MahonToastEnum.DANGER, formatErrors(errorsArr));
          }
        );
  };

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleMode = () => setIsRegisterMode(!isRegisterMode);
  return (
    <>
      <MahonToast
        isToastShown={isToastShown}
        toastBodyContent={toastBodyContent}
        toastType={toastType}
        closeToast={closeToast}
      />
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <MahonCard
            onSubmitHandler={onSubmitForm}
            renderHeader={() => (
              <div className="d-flex justify-content-center align-items-center">
                <h5>{isRegisterMode ? "Signing Up" : "Signing In"} </h5>
              </div>
            )}
            renderBody={() => (
              <Row>
                <Col xs="12" md="3" className="d-flex justify-content-center">
                  <img src={TodoAppLogo} alt="logo" className="w-100" />
                </Col>
                <Col className="d-flex flex-column">
                  <LoginRegisterForm
                    isRegisterMode={isRegisterMode}
                    toggleMode={toggleMode}
                    onChangeHandler={onChangeHandler}
                    form={form}
                  />
                  <div className="d-flex justify-content-center">
                    {isRegisterMode ? (
                      <span role="button" onClick={toggleMode}>
                        <u>Login</u>
                      </span>
                    ) : (
                      <span role="button" onClick={toggleMode}>
                        <u>Register</u>
                      </span>
                    )}
                  </div>
                </Col>
              </Row>
            )}
            renderFooter={() => (
              <div className="d-flex justify-content-end">
                <Button color="success" type="submit">
                  Submit
                </Button>
              </div>
            )}
          />
        </Container>
      </div>
    </>
  );
};

export default Auth;
