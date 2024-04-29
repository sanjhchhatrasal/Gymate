import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import App from './App'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Gallery from './Components/Gallery/Gallery'
import Contact from './Components/Contact/Contact'
import Pricing from './Components/Pricing/Pricing'
import Schedule from './Components/Schedule/Schedule'
import Classes from './Components/Classes/Classes'
import TopImage from './Components/TopImage/TopImage'
import SignUp from './Components/SignUp/SignUp'
import AdminDashboard from './Components/Admin dashboard/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='gallery' element={<Gallery />}/>
      <Route path='schedule' element={<Schedule />}/>
      <Route path='blog' element={<Blog />}/>
      <Route path='pricing' element={<Pricing />}/>
      <Route path='classes' element={<Classes />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='Dashboard' element={<AdminDashboard />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
