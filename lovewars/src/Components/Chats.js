import React from "react";
import './Chats.css';
import Chat from "./Chat";


export default function Chats(){
    return (  
    <div className="chats">
      
     <Chat
       name="Mark"
       message="Yo whats up!"
       profilPic="..."
       />
       <Chat
       name="Ellen"
       message="Hey guys!"
       profilPic="..."
       />
       <Chat
       name="Shella"
       message="Baby!"
       profilPic="..."
       />
       <Chat
       name="Alma"
       message="Hi!"
       profilPic="..."
       />
       <Chat
       name="Kara"
       message="Hello!"
       profilPic="..."
       />
    </div>
    )
}

