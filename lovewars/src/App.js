import Characters from './Components/Characters';
// import Card from './Components/Card';
import './style.css';

import {Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Chats from './Components/Chats'
import Header from './Components/Header';
import Gender from './Components/Gender'
import ChatScreen from './ChatScreen'

const App = () => {
  return (
    <div className="App">


      <Header />
      <Routes>
        <Route path="/" element={<Characters />} /> 
          
        <Route path='/characters' element={<Gender />}/>
                <Route path="/chatscreen" element={<ChatScreen />} /> 
          <Route path="/chats/:person" element={<Chats />} /> 
          <Route path="/chats" element={<Chats />} />  
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
