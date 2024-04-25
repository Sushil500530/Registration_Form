import { Outlet } from "react-router-dom"
import Navber from "./components/Navber"


function App() {

  return (
    <div className="home">
      <div className="absolute"></div>
      <Navber />
      <div className="container top">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
