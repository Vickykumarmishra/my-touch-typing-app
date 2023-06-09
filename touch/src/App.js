
import './App.css';
import TouchTyping from './Components/TouchTyping';
import Join from './Components/Join';

import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {

 
  return (
    <div className="App" >
  
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Join/>}></Route>
  <Route path='/TouchTyping' element={<TouchTyping/>}></Route>
  <Route path='/Join' element={<Join/>}></Route>
</Routes></BrowserRouter> 
    </div>
  );
}

export default App;
