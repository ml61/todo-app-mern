import { useCallback, useState } from "react";
import { MahonToastEnum } from "../utils/enums/mahonToastEnum";

export const useToastState = () => {
  const [isToastShown, setIsToastShown] = useState(false);
  const [toastType, setToastType] = useState<MahonToastEnum>(
    MahonToastEnum.SUCCESS
  );
  const [toastBodyContent, setToastBodyContent] = useState("");

  const showToast = useCallback(
    (toastType: MahonToastEnum, toastBodyContent) => {
      setToastBodyContent(toastBodyContent);
      setToastType(toastType);
      setIsToastShown(true);
    },
    [setIsToastShown, setToastBodyContent]
  );
  const closeToast = useCallback(() => {
    setIsToastShown(false);
    setToastBodyContent("");
  }, [setIsToastShown, setToastBodyContent]);

  return {
    isToastShown,
    toastType,
    showToast,
    closeToast,
    toastBodyContent,
  };
};
