import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Profile from './components/Profile'
import Education from "./components/Education"
import Experience from './components/Experience'
import NoPage from './components/NoPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FC } from 'react';
import  './App.css'

const App: FC = () => {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>      
      <Route index path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App