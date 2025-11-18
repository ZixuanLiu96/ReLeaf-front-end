import { Button, notification, Space } from "antd";

const WarningNotification = ({ onHandleClick }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Notification",
      description: "You have already logged out! Please log in again",
    });
  };

  const handleClick = () => {
    openNotificationWithIcon("warning");
    onHandleClick();
  };

  return (
    <>
      {contextHolder}
      <Button onClick={() => handleClick()} color="#2a2a2a">
        Log out
      </Button>
    </>
  );
};

export default WarningNotification;
