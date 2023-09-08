import { RouterProvider } from "react-router-dom"
import route from "./routes/route";

function App() {
  return (
    <div className="font-body text-[#463F3A]">
      <RouterProvider router={ route }/>
    </div>
  )
}

export default App;