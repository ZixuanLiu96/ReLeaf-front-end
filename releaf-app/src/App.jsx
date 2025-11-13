import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App inter-regular bg-[#f0ead6] flex flex-col min-h-screen">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
