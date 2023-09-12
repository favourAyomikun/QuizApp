import { RouterProvider } from "react-router-dom";
import route from "./routes/Routes";
import { InputValueProvider } from "./context/InputValueContext";

function App() {
  return (
    <div className="font-body bg-[#1F7A8C] w-full h-screen text-black">
      <InputValueProvider>
        <RouterProvider router={route} />
      </InputValueProvider>
    </div>
  );
}

export default App;
