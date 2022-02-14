import { errorType } from "../../hooks/useApi";

export const formatErrors = (err: errorType) => {
  return err?.errorsArr?.join(" / ") || "Error";
};
