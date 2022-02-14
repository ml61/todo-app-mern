import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ApiMethodEnum } from "../utils/enums/apiMethodsEnum";
import { ApiPathEnum } from "../utils/enums/apiPathEnum";

export type errorType = {
  errorsArr?: string[];
};

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { token, logout } = useContext(AuthContext);

  type headers = {
    "Content-Type"?: string;
    Authorization?: string;
  };

  const request = useCallback(
    async (
      url: ApiPathEnum | string,
      method: ApiMethodEnum = ApiMethodEnum.GET,
      body = null,
      successCallback: (data: any) => void,
      errorCallback: (err: any) => void
    ) => {
      const headers: headers = {};
      try {
        if (body) {
          body = JSON.stringify(body);
        }
        headers["Content-Type"] = "application/json";
        if (token) headers["Authorization"] = `Bearer ${token}`;
        setIsLoading(true);

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          if (data.errorsArr[0] === "User is not authorized") {
            logout();
          }
          errorCallback(data);
          setIsLoading(false);
          return;
        }

        setIsLoading(false);
        successCallback(data);
      } catch (e: any) {
        setIsLoading(false);
        throw e;
      }
    },
    []
  );

  return { isLoading, request };
};
