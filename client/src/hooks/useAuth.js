import { useCallback, useEffect, useState } from "react";
const storageName = "todoAppMernUserData";

export const getDataFromStorage = (storageName = "todoAppMernUserData") =>
  JSON.parse(localStorage.getItem(storageName));

export const useAuth = () => {
  const dataFromStorage = getDataFromStorage(storageName);
  const [token, setToken] = useState(dataFromStorage?.token);
  const [userName, setUserName] = useState(dataFromStorage?.userName || "");
  const [ready, setReady] = useState(false);
  const login = useCallback((jwtToken, id, userName) => {
    setToken(jwtToken);
    setUserName(userName);
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken, userName })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token);
    }
    setReady(true);
  }, [login]);

  return {
    login,
    logout,
    token,
    ready,
    userName: userName || dataFromStorage?.userName,
  };
};
