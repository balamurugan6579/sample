
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// //import './App.css'
// import Component from './component'
// import List from './list/List'
import Nav from './header/Nav'
import Menu from './pages/Menu'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Foot from './header/Foot'
function App() {

  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
      </Routes>
      <Foot/>
      </BrowserRouter>
    </>
  )
}

export default App
