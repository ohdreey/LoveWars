import {Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import Chats from './Components/Chats'
// import Header from './Components/Header';

function App() {
  return (
    <div className="App">
        {/* <Header /> */}

    
        <Routes>          
               
           <Route path="/chats" element={<Chats />} /> 
           <Route path="/logo" element={<App />} />         
           
           
        </Routes>
        <Navbar />
    
    </div>
   
  );
}

export default App;
