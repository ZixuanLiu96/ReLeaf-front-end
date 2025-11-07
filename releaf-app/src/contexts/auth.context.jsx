import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    handleUser();
  });

  async function handleUser() {
    const users = await axios.get(`${API_URL}/api/users`);
    console.log(users);
  }

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
