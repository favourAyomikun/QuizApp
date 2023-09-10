import { RouterProvider } from "react-router-dom";
import route from "./routes/Routes";
import { InputValueProvider } from "./context/InputValueContext";

function App() {
  return (
    <div className="font-body bg-[#E0AFA0] w-full h-screen text-[#463F3A]">
      <InputValueProvider>
        <RouterProvider router={route} />
      </InputValueProvider>
    </div>
  );
}

export default App;
