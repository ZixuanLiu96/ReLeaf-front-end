import HomePageLayout from "../components/HomePageLayout";
import { useLocation, useNavigate } from "react-router-dom";
import NewUserForm from "../components/NewUserForm";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import { useContext, useEffect } from "react";

const API_URL = "https://releaf-backend.fly.dev";

export default function SignupPage() {
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const [errorMeaasge, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(null);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFinish = async (values) => {
    console.log("Success:", values);
    setIsClicked(true);

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
      setSuccessMessage(`${isSuccess.data.message}, content is ready for you!`);
      setTimeout(() => {
        navigate("/all-plants");
      }, 1000);
    } catch (err) {
      console.log(err.response.data.message);
      const errors = err.response.data.message;
      setErrorMessage(errors);
      setIsClicked(false);
    }
  };

  return (
    <div className=" w-full flex-grow">
      <HomePageLayout>
        {location.pathname === "/login" && (
          <NewUserForm
            text="Log In"
            onFinish={onFinish}
            errorMessage={errorMeaasge}
            successMessage={successMessage}
            isClicked={isClicked}
          />
        )}
      </HomePageLayout>
    </div>
  );
}
