import HomePageLayout from "../components/HomePageLayout";
import { useLocation, useNavigate } from "react-router-dom";
import NewUserForm from "../components/NewUserForm";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useContext } from "react";

const API_URL = "http://localhost:5005";

export default function SignupPage() {
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const [errorMeaasge, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const requestBody = {
        email: values.email,
        password: values.password,
      };

      const isSuccess = await axios.post(
        `${API_URL}/api/users/login`,
        requestBody
      );
      console.log(isSuccess);
      storeToken(isSuccess.data.token);
      authenticateUser();

      navigate("/all-plants");
    } catch (err) {
      console.log(err.response.data.message);
      const errors = err.response.data.message;
      setErrorMessage(errors);
    }
  };

  return (
    <div className=" w-full flex-grow">
      <HomePageLayout>
        {location.pathname === "/login" && (
          <NewUserForm
            text="Log in"
            onFinish={onFinish}
            errorMessage={errorMeaasge}
          />
        )}
      </HomePageLayout>
    </div>
  );
}
