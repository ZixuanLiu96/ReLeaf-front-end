import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";

function App() {
  return (
    <div className="App indie-flower-regular bg-[#f0ead6]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
