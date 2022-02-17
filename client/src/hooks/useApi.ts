import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ApiMethodEnum } from "../utils/enums/apiMethodsEnum";
import { ApiPathEnum } from "../utils/enums/apiPathEnum";
import { formatErrors } from "../utils/helpers/formatError";

export type errorType = {
  errorsArr?: string[];
};

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { token, logout } = useContext(AuthContext);

  type headers = {
    "Content-Type"?: string;
    Authorization?: string;
  };

  const request = useCallback(
    async (
      url: ApiPathEnum | string,
      method: ApiMethodEnum = ApiMethodEnum.GET,
      payload = null,
      successCallback: (data: any) => void,
      errorCallback?: (err: any) => void
    ) => {
      const headers: headers = {};
      let body = null;
      try {
        if (payload) {
          body = JSON.stringify(payload);
        }
        headers["Content-Type"] = "application/json";
        if (token) headers["Authorization"] = `Bearer ${token}`;
        setIsLoading(true);
        console.log("Request", { url, method, body, payload });

        const response = await fetch(url, { method, body, headers });

        const data = await response.json();
        console.log("Server DATA", data);

        if (!response.ok) {
          if (data.errorsArr[0] === "User is not authorized") {
            logout();
          }

          setErrorMessage(formatErrors(data));
          if (errorCallback) {
            errorCallback(data);
          }
          setIsLoading(false);
          return;
        }
        setErrorMessage("");
        setIsLoading(false);
        successCallback(data);
      } catch (e: any) {
        setIsLoading(false);
        throw e;
      }
    },
    []
  );

  return { isLoading, request, errorMessage };
};
