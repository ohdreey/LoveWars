import React from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.css";
import messLogo from "../Images/messLogo.png"
import messSearch from "../Images/icons8-recherche-de-l'amour-64.png"



export default function NavBar(){
    return (
      <div className="nav">
          <div className="liste">
            <NavLink to="/characters"><img className="items" src={messSearch} alt=""/><button/></NavLink>
            <NavLink to="/Chats"><img className="items" src={messLogo} alt=""/><button/></NavLink>
          </div>
      </div>
    )
  }

