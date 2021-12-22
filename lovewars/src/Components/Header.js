import React from "react";
import "./Header.css";
import logo from "../Images/Logo.png"


export default function Header(){
    return(
    <div className="imgHead">
        <div>
            <img className="imgHeadA" src={logo} ></img>
        </div>
        <div className="imgHeadB">    
            <h1 >LoveWars</h1>
                <h2>Trouve votre étoile</h2>
        </div>
    </div>
    )
}