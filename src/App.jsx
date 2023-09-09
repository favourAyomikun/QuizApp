import { RouterProvider } from "react-router-dom"
import route from "./routes/Routes";


function App() {
  return (
    <div className="font-body bg-[#E0AFA0] w-full h-screen text-[#463F3A]">
      <RouterProvider router={ route }/>
    </div>
  )
}

export default App;