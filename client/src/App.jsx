import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Education from "./components/Education"
import Experience from './components/Experience'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App