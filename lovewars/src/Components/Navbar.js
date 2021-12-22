import React from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.css";
import messLogo from "../Images/icons8-love-message-64.png"



export default function NavBar(){
    return (
      <div className="nav">
          <div className="liste">
            <NavLink to="/App"><button className="items">Logo</button></NavLink>
            <NavLink to= "/Chats"><img className="items" src={messLogo} alt="venus"/><button/></NavLink>
          </div>
      </div>
    )
  }

