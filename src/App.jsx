import { Outlet } from "react-router-dom"
import Navber from "./components/Navber"


function App() {

  return (
    <>
      <Navber />
      <Outlet></Outlet>
    </>
  )
}

export default App
