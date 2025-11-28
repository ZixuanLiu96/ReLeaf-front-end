import { Empty, Typography } from "antd";
const EmptyContent = ({ pt, text }) => (
  <Empty
    className={pt}
    description={<Typography.Text>{text}</Typography.Text>}
  />
);
export default EmptyContent;
