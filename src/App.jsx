import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import Footer from "./Components/Footer/Footer"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <Navbar />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
