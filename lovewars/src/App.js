import {Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Chats from './Components/Chats'
import ChatScreen from './ChatScreen'
// import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        {/* <Header /> */}

    
        <Routes>          
          <Route path="/chatscreen" element={<ChatScreen />} /> 
          <Route path="/chats/:person" element={<Chats />} /> 
          <Route path="/chats" element={<Chats />} />      
           
           
        </Routes>
        <Navbar />
    
    </div>
   
  );
}

export default App;
