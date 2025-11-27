import UserNavBar from "../components/UserNavBar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, Image, Flex, Alert } from "antd";
import { AuthContext } from "../contexts/auth.context";
import { useContext, useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const API_URL = "https://releaf-backend.fly.dev";
const token = localStorage.getItem("authToken");
const cloudName = "dprwwp1ku";
const uploadPreset = "react_unsigned";

export default function ProfilePage() {
  const { user, updateUser } = useContext(AuthContext);
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState(false);
  console.log(user);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.profileUrl || null);
  const [email, setEmail] = useState(user.email || null);
  const [username, setUsername] = useState(user.username || null);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setImageUrl(user.profileUrl);
    setEmail(user.email);
    setUsername(user.username);
  }, [user.profileUrl, user.email, user.username]);

  const uploadToCloudinary = async ({ file, onSuccess, onError }) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("pic URL:", data.secure_url);
      setImageUrl(data.secure_url);
      onSuccess({ url: data.secure_url }, file);
    } catch (err) {
      onError(err);
    }
  };

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setLoading(false);
      setImageUrl(info.file.response.url);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const initialData = {
    username: user.username,
    email: user.email,
    photo: user.profileUrl
      ? [
          {
            url: user.profileUrl,
            name: "profile",
            status: "done",
            uid: "-1",
          },
        ]
      : [],
  };

  // console.log(imageUrl);
  const onFinish = async (values) => {
    console.log("Success:", values);
    // console.log(33333, imageUrl);

    const data = {
      username: values.username,
      email: values.email,
      profileUrl: imageUrl,
    };

    try {
      const res = await axios.patch(`${API_URL}/api/users/${user._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResponse(res);

      setTimeout(() => {
        setIsEdit(false);
        navigate(`/user/${user._id}/profile`);
      }, 3000);

      updateUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-grow">
      <UserNavBar />
      <div className="mt-40">
        {!isEdit && (
          <div className="mx-20 py-5 px-40 flex flex-col font-semibold text-[#2a2a2a]">
            <div className="flex items-end gap-5 border-b-1 border-[#aaa] px-4 py-5 ">
              <span>Photo: </span>
              <Image width={200} alt="basic" src={user.profileUrl} />
              {/* <span>edit</span> */}
            </div>
            <div className="flex items-center gap-5 border-b-1 border-[#aaa] px-4 py-5">
              <span>Username: </span>
              <span>{username}</span>
            </div>

            <div className="flex items-center gap-5 border-b-1 border-[#aaa] px-4 py-5">
              <span>Email: </span>
              <span>{email}</span>
            </div>

            <div className="flex items-center gap-5 px-4 py-5">
              <Button className=" w-30" onClick={() => setIsEdit(true)}>
                Edit
              </Button>
            </div>
          </div>
        )}

        {isEdit && (
          <div className="mx-20 py-20 px-40 flex flex-col font-semibold text-[#2a2a2a]">
            <Form
              labelCol={{ span: 5 }}
              form={form}
              wrapperCol={{ span: 15 }}
              layout="horizontal"
              style={{ maxWidth: 800 }}
              initialValues={initialData}
              onFinish={onFinish}
            >
              <Form.Item
                label="Photo"
                name="photo"
                valuePropName="fileList"
                getValueFromEvent={(e) => e?.fileList}
              >
                <Upload
                  name="photo"
                  listType="picture-card"
                  className="avatar-uploader hidden"
                  showUploadList={false}
                  customRequest={uploadToCloudinary}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      draggable={false}
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
              <Form.Item label="Username" name="username">
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label={null}>
                <Flex gap="middle">
                  <Button
                    className="w-20"
                    onClick={() => {
                      form.resetFields();
                      setIsEdit(false);
                      setImageUrl(user.profileUrl || null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button htmlType="submit">Submit</Button>
                </Flex>
              </Form.Item>
            </Form>
            <div hidden={!response}>
              <Alert
                title="Success Info"
                description="You have successfully uploaded your profile!"
                type="success"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
