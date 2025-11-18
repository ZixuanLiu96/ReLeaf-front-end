import HomePageLayout from "../components/HomePageLayout";
import { useLocation, useNavigate } from "react-router-dom";
import NewUserForm from "../components/NewUserForm";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://releaf-backend.fly.dev";
export default function SignupPage() {
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(null);
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

      const res = await axios.post(`${API_URL}/api/users/signup`, requestBody);
      console.log(res.data);

      setSuccessMessage(`${res.data.message}, jumping to Log In page...`);
      setTimeout(() => {
        navigate("/login");
      }, 500);
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      const errors = err.response.data.message;
      setErrorMessage(errors);
      setIsClicked(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" w-full flex-grow">
      <HomePageLayout>
        {location.pathname === "/signup" && (
          <NewUserForm
            text="Sign Up"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            errorMessage={errorMessage}
            successMessage={successMessage}
            isClicked={isClicked}
          />
        )}
      </HomePageLayout>
    </div>
  );
}
