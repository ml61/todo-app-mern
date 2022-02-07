import { useEffect, useRef } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { MahonToastEnum } from "../../../utils/enums/mahonToastEnum";

const TOAST_DELAY = 5;

interface IMahonToast {
  isToastShown: boolean;
  closeToast: () => void;
  toastType: MahonToastEnum;
  toastBodyContent: string;
}

const MahonToast = ({
  isToastShown,
  closeToast,
  toastType,
  toastBodyContent,
}: IMahonToast) => {
  const isSuccessToast = toastType === MahonToastEnum.SUCCESS;
  const timerId = useRef(0);
  useEffect(() => {
    if (isSuccessToast && isToastShown) {
      timerId.current = window.setTimeout(() => {
        closeToast();
      }, TOAST_DELAY * 1000);
    } else {
      clearTimeout(timerId.current);
    }

    return () => {
      clearTimeout(timerId.current);
    };
  }, [isToastShown, toastType]);

  const headerContent = isSuccessToast ? "Success!" : "Failed";

  return isToastShown ? (
    <Toast
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        zIndex: 99999,
      }}
    >
      <ToastHeader
        className="d-flex justify-content-between align-items-center"
        icon={toastType}
        toggle={closeToast}
      >
        {headerContent}
      </ToastHeader>
      <ToastBody>{toastBodyContent}</ToastBody>
    </Toast>
  ) : null;
};

export { MahonToast };
