import Characters from './Components/Characters';
// import Card from './Components/Card';
import './style.css';

import {Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Chats from './Components/Chats'
import Header from './Components/Header';
import Gender from './Components/Gender'


const App = () => {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Characters />} /> 
        <Route path="/chats" element={<Chats />} />   
        <Route path='/characters' element={<Gender />}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
