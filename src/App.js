import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Pnf from './component/Pnf'
import Portfolio from './component/Portfolio'
import Profile from './component/Profile'
import Footer from './Header/Footer'
import Menu from './Header/Menu'



function App() {
  return (
      <BrowserRouter>
          <Menu/>

          <Routes>
              <Route path={`/`} element={<Home/>} />
              <Route path={`/home`} element={<Home/>} />
              <Route path={`/about`} element={<About/>} />
              <Route path={`/profile`} element={<Profile/>} />
              <Route path={`/portfolio`} element={<Portfolio/>} />
              <Route path={`/contact`} element={<Contact/>} />
              <Route path={`/*`} element={<Pnf/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
  )
}

export default App