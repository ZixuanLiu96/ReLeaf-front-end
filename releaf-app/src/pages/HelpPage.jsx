import UserNavBar from "../components/UserNavBar";
export default function HelpPage() {
  return (
    <div className="flex-grow">
      <UserNavBar />
      <div className="mt-70 h-full w-full flex flex-col justify-center items-center gap-10">
        <p>In case you need help, you can contact our team:</p>
        <p>
          <a
            href="https://www.linkedin.com/in/zixuan-liu-53357026a/"
            className="underline text-[#c86e59]"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
}
