import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route }  from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import FetchApiData from './components/FetchApiData'
function App() {
  
  return (
    <>
    <FetchApiData/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          {/* <Route to={"/"}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
