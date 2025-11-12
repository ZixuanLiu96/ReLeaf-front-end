import HomePageLayout from "../components/HomePageLayout";
import { useLocation, useNavigate } from "react-router-dom";
import NewUserForm from "../components/NewUserForm";
import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:5005";
export default function SignupPage() {
  const location = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      const requestBody = {
        email: values.email,
        password: values.password,
      };

      const res = await axios.post(`${API_URL}/api/users/signup`, requestBody);
      console.log(res.data);

      navigate("/login");
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
      const errors = err.response.data.message;
      setErrorMessage(errors);
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
            text="Sign up"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            errorMessage={errorMessage}
          />
        )}
      </HomePageLayout>
    </div>
  );
}
