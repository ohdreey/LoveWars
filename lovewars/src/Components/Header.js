import React from "react";
import "./Header.css";
import logo from "../Images/Logo.png"
import logoB from "../Images/Logo2-Lovewars-Transparent.png"


export default function Header(){
    return(
    <div className="imgHead">
        <div>
            <img className="imgHeadA" src={logo} ></img>
        </div>
        {/* <div >   
            <img className="imgHeadB" src={logoB}></img> 
        </div> */}
    </div>
    )
}