
import './App.css';
import TouchTyping from './Components/TouchTyping';
import Join from './Components/Join';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { user } from './Components/Join';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Newlesson from './Components/Newlesson';
import { createContext } from 'react';
const contextdata=createContext()
function App() {
let data=user
 
  return (
    <div className="App" >
    
  <BrowserRouter>
<contextdata.Provider value={data}>
  <Navbar/>
  </contextdata.Provider>
<Routes>
  <Route path='/' element={<Join/>}></Route>
  <Route path='/TouchTyping' element={<TouchTyping/>}></Route>
  <Route path='/Join' element={<Join/>}></Route>
  <Route path='/Newlesson' element={<Newlesson/>}></Route>
  <Route path='/Navbar' element={<Navbar/>}></Route>
</Routes>
<Footer />
</BrowserRouter> 
    </div>
  );
}

export default App;
export {contextdata}
