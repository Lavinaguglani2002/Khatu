import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Navbar from './Pages/Navbar'
import Header from './components/Header'
import Success from './Pages/Success'
import Error from './Pages/Error'
import ProtectedRoutes from './components/ProtectedRoutes'
import './index.css'
import Menu from './components/Menu'
import Contact from './components/Contact'
import About from './Pages/About'
import Location from './Pages/Location'
import Home from './components/Home'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import Dashboard from './components/Dashboard'
import { ToastContainer } from 'react-toastify'
import Signup from './components/Signup'
import NewSubmit from './components/NewSubmit'
import Achievements from './Pages/Achievements'
const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>

    <Routes>
<Route path='/'element={<Home/>}/>
<Route path='/header'element={<Header/>}/>


      <Route path='/location'element={<Location/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/forgetPassword'element={<ForgotPassword/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
      <Route path='/otp'element={<NewSubmit/>}/>
      <Route path="/achievements" element={<Achievements/>}/>



      {/* <Route path='/resetPassword/:token'element={<ResetPassword/>}/> */}




      <Route path="/menu" element={<Menu/>}/>
      <Route path="/success" element={<ProtectedRoutes element={<Success/>}/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/about'element={<About/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App