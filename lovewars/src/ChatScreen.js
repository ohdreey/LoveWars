import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

import "./ChatScreen.css";

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name:"Padmé",
            message:"Yo ",
        },

        {
            name:"Padmé",
            message:"Whats up!",
        },
        {
           
            message:"Give my money !",
        },
    ])
    return (

            <div className="chatScreen">poulet
                {messages.map((message) =>
                message.name ? (
                <div className="chatScreenMessage">
                   <Link to="/chatscreen" ><Avatar
                    className="chatScreenImage"
                    alt={message.message}
                    src={message.image}
                    /></Link>
                    <p className="chatScreenText">{message.message}</p>
                </div>
                ) :(
                    <div className="chatScreenMessage">
                        <p className="chatScreenTextUser">{message.message}</p>
                    </div>
                )
                )}
            </div>

    
    );
}

export default ChatScreen