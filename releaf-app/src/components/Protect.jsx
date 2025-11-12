import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";

export default function Protect({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  if (isLoading) return <p>loading...</p>;
  if (!isLoggedIn) {
    return navigate("/login");
  } else {
    return children;
  }
}
