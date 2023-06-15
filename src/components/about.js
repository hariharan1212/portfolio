import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileRetro,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';

const bstyle ={
    color:"brown"
}

const aboutdiv={
    textAlign:"center",
    padding:"10px",
    background:"whitesmoke"
}
const contentstyle={
     fontSize:"17px",
     lineHeight:"25px"
}

export default function About(){
    return (
        <>
        <div class="container " style={aboutdiv}>
            <h2>About Me...!</h2>
            <h5 style={contentstyle}> Hi Iam<b style={bstyle}> Hariharan</b>. I Am a Professional <b style={bstyle}>Front-End Developer</b>.  <br/>Developing Modern And Responsive <b style={bstyle}>Web Pages </b>and <b style={bstyle}>Web Application</b>.  <br/>Let Us Work Together. ThankYou.</h5>
        
        <div >
            <h3>Contact Detail </h3>
             
                <p><FontAwesomeIcon icon={faMobileRetro} /> - 9360777261 .</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> -  www.hariharanmech1212@gmail.com .</p>
                <p><FontAwesomeIcon icon={faLocationDot} /> - Pudukkottai , pincode - 622 301 .</p>  
        </div>
        </div>
        </>
    )
}