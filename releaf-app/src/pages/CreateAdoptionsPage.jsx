import UserNavBar from "../components/UserNavBar";
import { useState } from "react";
import { Button, Form, Input, InputNumber, Upload, Alert } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const API_URL = "https://releaf-backend.fly.dev";
const token = localStorage.getItem("authToken");
const cloudName = "dprwwp1ku";
const uploadPreset = "react_unsigned";

export default function CreateAdoptionsPage() {
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
  const [urls, setUrls] = useState([]);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const uploadToCloudinary = async ({ file, onSuccess, onError }) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    console.log(file);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    console.log(formData);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("pic URL:", data.secure_url);
      setUrls((urls) => [...urls, data.secure_url]);

      onSuccess(data);
    } catch (err) {
      onError(err);
    }
  };

  console.log(urls);

  const onFinish = async (values) => {
    console.log("Success:", values);

    const data = {
      name: values.name,
      species: values.species,
      age: values.age,
      description: values.description,
      location: values.location,
      careIstruction: values.careIstruction || null,
      imageUrl: urls,
    };
    console.log(data);
    try {
      const res = await axios.post(`${API_URL}/api/plants`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res);
      setResponse(res);
      form.resetFields();

      setTimeout(() => {
        navigate("/all-plants");
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex-grow">
      <UserNavBar />
      <div className="mt-50 flex items-center  ">
        <div className=" rounded-md p-5">
          <h1 className="text-4xl font-bold text-[#c86e59] mb-10">
            Please Fill The Form
          </h1>

          <div className="border-2 border-[#c86e59] rounded-md p-5">
            <Form
              {...formItemLayout}
              form={form}
              variant={variant || "filled"}
              style={{ minWidth: 800 }}
              initialValues={{ variant: "filled" }}
              onFinish={onFinish}
            >
              <Form.Item
                label="Upload"
                name="imageUrl"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                rules={[
                  {
                    required: true,
                    message: "A plant must have at least a picture!",
                  },
                ]}
              >
                <Upload
                  listType="picture-card"
                  customRequest={uploadToCloudinary}
                >
                  <button
                    style={{
                      color: "inherit",
                      cursor: "inherit",
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
              </Form.Item>

              <Form.Item
                label="Name"
                name="name"
                rules={[
                  { required: true, message: "A plant must have a name!" },
                ]}
                className="mt-5"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Species"
                name="species"
                rules={[
                  { required: true, message: "A plant must have a species!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Age"
                name="age"
                rules={[
                  { required: true, message: "A plant must have an age!" },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "A plant must have an address!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ whiteSpace: "normal" }}>
                    Description (e.g. health status...)
                  </span>
                }
                name="description"
                rules={[
                  {
                    required: true,
                    message: "A plant must have a description!",
                  },
                ]}
              >
                <Input.TextArea maxLength={200} />
              </Form.Item>

              <Form.Item label="Care Instructions" name="careInstruction">
                <Input.TextArea maxLength={200} />
              </Form.Item>

              <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div hidden={!response}>
          <Alert
            title="Success Info"
            description="You have successfully uploaded your plant!"
            type="success"
          />
        </div>
      </div>
    </div>
  );
}
