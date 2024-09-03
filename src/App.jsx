import React from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Project from './pages/Project'
import './App.css'

function App() {

  return (
    <>
    <div className='min-h-screen '>

    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    </div>
    </>
  )
}

export default App
