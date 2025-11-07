import { useParams } from "react-router-dom";

export default function UserDefaultPage() {
  const { userId } = useParams();

  return <div>I am user default page</div>;
}
