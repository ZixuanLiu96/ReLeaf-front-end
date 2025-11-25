import UserNavBar from "../components/UserNavBar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import { AuthContext } from "../contexts/auth.context";
import { useContext } from "react";

const { TextArea } = Input;

export default function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [form] = Form.useForm();
  return (
    <div className="flex-grow">
      <UserNavBar />
      <div className="mt-40">
        <Form
          labelCol={{ span: 4 }}
          form={form}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        ></Form>
      </div>
    </div>
  );
}
