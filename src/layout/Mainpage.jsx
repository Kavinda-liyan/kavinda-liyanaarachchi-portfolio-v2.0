import React from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navigation/Navbar'
import About from '../components/About/About'
import Skill from '../components/Skills/Skill'
import Projects from '../components/Projects/projects'
import Clients from '../Clients/Clients'


const Mainpage = () => {
  return (
    <>
    <div className='overflow-y-hidden bg-gradient-to-r from-slate-800 to-slate-900'>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Clients/>
    
   
    </div>
   
    </>
  )
}

export default Mainpage