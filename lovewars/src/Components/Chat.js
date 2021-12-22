import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({name, message, profilePic}) {
    return (  
    <Link to="/chatscreen">
    <div className="chat">
    <Avatar className="chatImage" alt={name} src={profilePic} />
    <div className="chatDetails">
     <h2 className="colorChat">{name}</h2>
     <p className="colorChat">{message}</p>
     </div>
    
    </div>
    </Link>
    );
}

export default Chat 