import { Empty, Typography } from "antd";
const EmptyContent = ({ pt }) => (
  <Empty
    className={pt}
    description={
      <Typography.Text>
        You haven't adopted any plants!
        <br />
        Go to <a href="/all-plants">All Plants</a>
      </Typography.Text>
    }
  />
);
export default EmptyContent;
