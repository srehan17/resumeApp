import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Education from "./components/Education"
import Experience from './components/Experience'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FC } from 'react';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route index path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App