import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
// const onFinish = (values) => {
//   console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
const NewUserForm = ({
  text,
  onFinish,
  onFinishFailed,
  errorMessage,
  successMessage,
}) => (
  <div className="pr-10 mr-20 mt-20 mb-10 bg-[#4caf50] py-20 rounded-md">
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 400 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          {text}
        </Button>
      </Form.Item>
    </Form>

    {errorMessage && (
      <p
        className="error-message text-sm px-10 h-10 text-[#a52a2a]"
        style={{ whiteSpace: "pre-line" }}
      >{`*${errorMessage}`}</p>
    )}
    {successMessage && (
      <p
        className="error-message text-sm px-10 h-10 text-[#4bff4a]"
        style={{ whiteSpace: "pre-line" }}
      >{`✅${successMessage}`}</p>
    )}
  </div>
);
export default NewUserForm;
