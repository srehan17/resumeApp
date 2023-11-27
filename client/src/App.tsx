import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Profile from './pages/Profile'
import Education from "./pages/Education"
import Experience from './pages/Experience'
import InvalidPage from './pages/InvalidPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FC } from 'react';
import  './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { register, reset } from './features/auth/authSlice'

const App: FC = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>      
      <Route index path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<InvalidPage />} />
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  )
}

export default App