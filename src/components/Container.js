import React from "react";
import { Link, Route, BrowserRouter as Router, Routes   } from "react-router-dom";
import About from "./about.js";
import Experience from "./experience.js";
import Education from "./education.js";
import Skills_And_Achivements from "./skills_and_achivements";
import Projects from "./Projects.js";

export default function Container(){
    return (
        <>
           {/* hole container div ----start  */}
        <div className="container grid_container">
          {/* left side div (images and about myself router) ---- start*/}
        <div className="lhs">
             {/* for image div  ---- start*/}
          <div className="imgdiv">
            <img src="./images/MyPhoto.jpg" width={"230px"} height={"230px"}/>
          </div>
            {/* for image div  ---- end*/}
              {/* for about myself router  ---- start*/}
          <div className="lists">
               <Router>
                <p>
                <Link to={"/about"} className="link"  style={{color:"white"} }>About</Link>
                </p>
                <p>
                <Link to={"/experience"} style={{color:"white"}}>Experience</Link> 
                </p>
                <p>
                <Link to={"/education"} style={{color:"white"}}>Education</Link> 
                </p>
                <p>
                <Link to={"/skills_and_achivements"} style={{color:"white"}}>Skills & Achivements</Link>
                </p>
                <p>
                <Link to={"/projects"} style={{color:"white"}}>Projects</Link>
                </p>
                <Routes>
                    <Route path="/about" Component={About}/>
                    <Route path="/experience" Component={Experience}/>
                    <Route path="/education" Component={Education}/>
                    <Route path="/skills_and_achivements" Component={Skills_And_Achivements}/>
                    <Route path="/projects" Component={Projects}/>
                </Routes>
               </Router>  
          </div>
           {/* for about myself router ---- end */}
        </div>
          {/* left side div (images and about myself router) ---- end*/}

          {/* right side div (images and about myself ) ---- Start*/}

          <div className="rhs">
             
          </div>
       {/* right side div (images and about myself) ---- end*/}
          </div>

           {/* hole container div ---- end  */}
        </>
    )
};