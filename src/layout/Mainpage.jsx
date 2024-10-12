import React from 'react'
import Home from '../components/Home/Home'
import Navbar from './Shared/Navigation/Navbar'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from './Shared/Footer/Footer'




const Mainpage = () => {
  return (
    <>
    <div className='overflow-y-hidden bg-gradient-to-r from-slate-50 to-slate-100 mx-auto'>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   
    
   
    </div>
   
    </>
  )
}

export default Mainpage