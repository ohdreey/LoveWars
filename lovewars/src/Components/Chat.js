import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";

function Chat({name, message, profilePic}) {
    return (  
    <div className="chat">
    <Avatar className="chat_image" alt={name} src={profilePic} />
    <div className="chatDetails">
     <h2 className="colorChat">{name}</h2>
     <p className="colorChat">{message}</p>
     </div>
    
    </div>
    );
}

export default Chat 