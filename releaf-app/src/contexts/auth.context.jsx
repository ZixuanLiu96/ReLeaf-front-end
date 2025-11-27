import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://releaf-backend.fly.dev";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const updateUser = (updatedFields) => {
    setUser((pre) => ({ ...pre, ...updatedFields }));
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("authToken");
    // console.log(storedToken);

    if (storedToken) {
      try {
        const res = await axios.get(`${API_URL}/api/users/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const user = res.data.user;

        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
      } catch (err) {
        setIsLoggedIn(false);
        setIsLoading(true);
        setUser(null);
        console.log(err);
      }
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        updateUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
