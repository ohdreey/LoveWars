import React, {useState,useEffect} from "react";
import {NavLink} from "react-router-dom"
import "./Navbar.css";




export default function NavBar(){
    return (
      <nav>
          <div className="liste">
              
            <li className="items">Swipez</li>
            <NavLink to="/App"><li className="items">Logo</li></NavLink>
            <NavLink to= "/Chats"><li className="items">Messages</li></NavLink>
            
          </div>
      </nav>
    )
  }

