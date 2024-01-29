import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from "./Components/Kids";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={< Home />}></Route> 
          <Route path='/Men' element={<Men/>}></Route> 
          <Route path='/Women' element={<Women/>}></Route> 
          <Route path='/Kids' element={<Kids/>}></Route> 
        </Routes>
        <Footer/>
      </BrowserRouter>
  
    </div>
  )
}

export default App;
