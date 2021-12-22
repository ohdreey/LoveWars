import React from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.css";
import messLogo from "../Images/messLogo.png"
import messSearch from "../Images/icons8-recherche-de-l'amour-64.png"



export default function NavBar(){
    return (
      <div className="nav">
          <div className="liste">
<<<<<<< HEAD
            <NavLink to="/characters"><img className="items" src={messSearch} alt=""/><button/></NavLink>
            <NavLink to="/Chats"><img className="items" src={messLogo} alt=""/><button/></NavLink>
=======
              
            <li className="items">Swipez</li>
            <NavLink to="/App"><li className="items">Logo</li></NavLink>
            <NavLink to= "/Chats"><li className="items">Messages</li></NavLink>
            
>>>>>>> d2aac418380788c8d7a891c9101e1be9384c586d
          </div>
      </div>
    )
  }

