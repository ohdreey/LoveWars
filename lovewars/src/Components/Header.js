import React from "react";
import {Link} from 'react-router-dom'
import "./Header.css";
import logo from "../Images/Logo.png"



export default function Header(){
    return(
    <div className="imgHead">
        <div>
            <Link to='/'>
                <img className="imgHeadA" src={logo} ></img>
            </Link>
        </div>
        {/* <div >   
            <img className="imgHeadB" src={logoB}></img> 
        </div> */}
    </div>
    )
}