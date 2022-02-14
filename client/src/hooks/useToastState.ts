import { useCallback, useState } from "react";
import { MahonToastEnum } from "../utils/enums/mahonToastEnum";

export type showToastType = (
  toastType: MahonToastEnum,
  toastBodyContent: string
) => void;

export const useToastState = () => {
  const [isToastShown, setIsToastShown] = useState(false);
  const [toastType, setToastType] = useState<MahonToastEnum>(
    MahonToastEnum.SUCCESS
  );
  const [toastBodyContent, setToastBodyContent] = useState("");

  const showToast: showToastType = useCallback(
    (toastType, toastBodyContent) => {
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
