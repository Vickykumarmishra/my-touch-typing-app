
import './App.css';
import TouchTyping from './Components/TouchTyping';
import Join from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Newlesson from './Components/Newlesson';
import { createContext } from 'react';
const contextdata=createContext()
function App() {

 
  return (
    <div className="App" >
    
  <BrowserRouter>
<contextdata.Provider >
 
  </contextdata.Provider>
<Routes>
  <Route path='/' element={<Join/>}></Route>
  <Route path='/TouchTyping' element={<TouchTyping/>}></Route>
  <Route path='/Join' element={<Join/>}></Route>
  <Route path='/Newlesson' element={<Newlesson/>}></Route>
  <Route path='/Navbar' element={<Navbar/>}></Route>
</Routes>

</BrowserRouter> 
    </div>
  );
}

export default App;
export {contextdata}
