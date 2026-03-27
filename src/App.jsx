
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// //import './App.css'
// import Component from './component'
// import List from './list/List'
import Nav from './header/Nav'
import Footer from './header/footer'
import Menu from './pages/Menu'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
