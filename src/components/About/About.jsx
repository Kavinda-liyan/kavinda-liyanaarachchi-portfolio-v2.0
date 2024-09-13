import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabnavigation from '../Tabnavigation/Tabnavigation'
import AboutMain from './AboutMain';
import Experience from "./Experience/Experience";
import Softskills from "./Softskill/Softskills";
import Education from "./Education/Education";
import { Navigate } from "react-router-dom";

const About = () => {
 
  return (
    <Router>
        <section className=' w-full h-full float-right  ' > 
        <div className=' gap-10 h-full  '>
            <Tabnavigation />
            {/* <AboutMain /> */}
            <div className='content'>
            <Routes>
              <Route path="/" element={<AboutMain />}>
                <Route index element={<Navigate to="experience" replace />}  />
                <Route path="experience" element={<Experience />} />
                <Route path="education" element={<Education />} /> 
                <Route path="soft-skills" element={<Softskills />} />
              </Route>
            </Routes>
          </div>
        </div>
   
    
  </section>
    </Router>
    
  )
}

export default About