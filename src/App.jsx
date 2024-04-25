import { Outlet } from "react-router-dom"
import Navber from "./components/Navber"


function App() {

  return (
    <div className="home">
      <div className="absolute"></div>
      <Navber />
      <Outlet></Outlet>
    </div>
  )
}

export default App
