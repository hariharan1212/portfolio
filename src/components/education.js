import React from "react";

const Education_div={
    padding:"10px",
    background:"whitesmoke",
}
const Education_contenet = {
    fontSize:"15px"
}
export default function Education(){
    return (
        <>
       <div class="container" style={Education_div}>
          <h1 style={Education_contenet}><b>2016-08 to 2020-04  - Bachelor of Engineering: Mechanical Engineering </b></h1>
         <h2 style={{marginLeft:"150px",fontSize:"15px"}}>Dhanalakshmi Srinivasan University - Perambalur .</h2>
          <h1 style={Education_contenet}><b>2015-06 to 2016-04 - High School Diploma</b></h1>
           <h2 style={{marginLeft:"150px",fontSize:"15px"}}>St. Mary's High School - Pudukkottai .</h2>
       </div>
        </>
    )
}