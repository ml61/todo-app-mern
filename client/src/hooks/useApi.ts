import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { ITodo } from "../interfaces/ITodo";
import { IUser } from "../interfaces/IUser";
import { ApiMethodEnum } from "../utils/enums/apiMethodsEnum";
import { ApiPathEnum } from "../utils/enums/apiPathEnum";

// const baseUrl = "http://localhost:3001/";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  type headers = {
    "Content-Type"?: string;
    Authorization?: string;
  };

  const request = useCallback(
    async (
      url: ApiPathEnum,
      method: ApiMethodEnum = ApiMethodEnum.GET,
      body = null,
      successCallback: (data: Object) => void,
      errorCallback: (err: Object) => void
    ) => {
      const headers: headers = {};
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
          if (token) headers["Authorization"] = `Bearer ${token}`;
        }
        setIsLoading(true);

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
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

  // const clearError = useCallback(() => setError(null), []);

  return { isLoading, request };
};
