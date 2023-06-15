import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import About from "./about";
import Education from "./education";


export default function Routertest(){

    
    // const [count,setcount]=useState(
    //     <Router>
    //          <Link to={"/"}> About</Link>
    //             <Link to={"/education"}>Education</Link>
    //             <Routes>
    //                 <Route exact path="/about" Component={About}/>
    //                 <Route  exact path="/education" Component={Education}/>
    //             </Routes>
    //         </Router>
    // )

     
     return (
        <>
        <div style={{border:"1px solid black"}}>
        <Router>
                <Link to={"/"}> About</Link>
                <Link to={"/education"}>Education</Link>
                <Routes>
                    <Route exact path="/" Component={About} />
                    <Route  exact path="/education" Component={Education}/>
                </Routes>
            </Router>
        </div>
        <div style={{height:"300px",width:"100%",border:"1px solid black"}}>
              
        </div>
        </>
     )
}
