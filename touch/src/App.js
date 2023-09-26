
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
const contextdata=createContext()


function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate data fetching or initialization
    setTimeout(() => {
      setLoading(false); // Set loading to false when done
    }, 3000); // Adjust the timeout as needed
  }, []);
  return (
    <div className="App" >
    
   
  <BrowserRouter>

<Routes>
  <Route path='/' element={<Join/>}></Route>
  <Route path='/TouchTyping' element={<TouchTyping/>}></Route>
  <Route path='/Join' element={<Join/>}></Route>
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
