import React from "react";
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
        <div className="last">
         <h3 className="connect">
             Connect With Me ~ 
         </h3>
       <div className="social">
       <div className="ig"><FontAwesomeIcon icon={faInstagram} /></div>
            <div className="lk"> <FontAwesomeIcon icon={faLinkedinIn} /></div>
            <div className="wp"> <FontAwesomeIcon icon={faWhatsapp} /> </div>
            </div>
        </div>
    )
}
 

