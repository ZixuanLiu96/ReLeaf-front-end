import UserNavBar from "../components/UserNavBar";

export default function AboutPage() {
  return (
    <div className="flex-grow">
      <UserNavBar />
      <div className="mt-40 px-20 py-10 flex flex-col justify-center gap-10">
        <h1 className="text-4xl font-bold">How to use this app?</h1>
        <div className="flex items-center gap-25">
          <div className="p-4 border-2 border-[#c86e59] rounded-md w-1/2 text-lg">
            <p>
              After logging into the app, you can see all the plants that have
              been published on the homepage, including both unadopted and
              adopted ones. Users can select plants they are interested in and
              submit an adoption request. After the background review, the
              adoption will be successful. If a user wants to initiate an
              adoption, they can also fill in the plant information on the "give
              away plants" page. After the background review, the user's plant
              will be published. Users can also modify their personal
              information.
            </p>
          </div>
          <div className="w-85 h-85 bg-[url(/book-bg.png)] bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
}
