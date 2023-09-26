
import './App.css';
import { useState,useEffect } from 'react';
import TouchTyping from './Components/TouchTyping';
import Join from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoadingSpinner from './Components/LoadingSpinner';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Newlesson from './Components/Newlesson';
import { createContext } from 'react';
import LandingPage from './Components/LandingPage';
const contextdata=createContext()


function App() {
  
  
  return (

   
    <div className="App" >
 <BrowserRouter>
<Routes>
  <Route path='/' element={<LandingPage/>}></Route>
  <Route path='/TouchTyping' element={<TouchTyping/>}></Route>
  
  <Route path='/Newlesson' element={<Newlesson/>}></Route>
  <Route path='/Navbar' element={<Navbar/>}></Route>
  <Route path="/LoadingSpinner" element={<LoadingSpinner/>}></Route>
</Routes>

</BrowserRouter> 



    </div>
  );
}

export default App;
export {contextdata}
