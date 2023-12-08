import { Outlet } from "react-router-dom"
import Navbar from "../pages/Home/Components/Navbar/Navbar"
import Footer from "../pages/Home/Components/Footer/Footer"
import Social from "../pages/Home/Components/Social/Social"

const Main = () => {
  return (
    <div>
      <Social></Social>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main