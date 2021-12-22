import React from "react";
import { NavLink } from "react-router-dom"

import messLogo from "../Images/messLogo.png"
import messSearch from "../Images/icons8-recherche-de-l'amour-64.png"
import logoLove from "../Images/logoLove.png"

import "./Navbar.css";


export default function NavBar(){
    return (
      <div className="nav">
          <div className="liste">
          <NavLink to="/characters">  
            <img className="items" src={messSearch} alt="" />
            <button />
          </NavLink> 
          <img className='pouletimage' src={logoLove} alt='love war' />
          <NavLink to="/chats">
            <img className="items" src={messLogo} alt="" />
            <button />
          </NavLink>
          </div>
      </div>
    )
  }

