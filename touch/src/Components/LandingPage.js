import React from 'react'
import { BrowserRouter, NavLink,Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from 'framer-motion';
import TouchTyping from './TouchTyping';
export default function LandingPage() {
 
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {isAuthenticated}=useAuth0();
  const {user}=useAuth0();
  const navigate=useNavigate();

  const myStyle={
    backgroundImage: "url(/back1.jpg)",
    height:'100vh',
    // marginTop:'-70px',
   
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', // This centers the image both horizontally and vertically
    
};

  return (
    
    <div style={myStyle} className='container-fluid'>
      {/* <div className="container text-center"   style={{color:'#39395f',fontSize:'2rem',fontFamily:'tahoma',marginTop:'4rem'}}  >

<div className='row'>
  <div className='col' >


<b ><p><Typewriter 
      options={{
        strings: ['Typers Friend'],
        autoStart: true,
        loop: true,
      }}
     
    /></p></b>
    </div>
    </div>
  <div className="row">
    <div className="col"   style={{}}>
     
    </div>
  </div>

  <div className='container'>
<p></p>

  </div>
  
</div>
{isAuthenticated?<motion.button style={{marginTop:'25rem'}} whileHover={{scale:1.1}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }> <b>Log Out</b></motion.button>: <motion.button  whileHover={{scale:1.1}}  className="btn btn-light" style={{marginTop:'25rem',backgroundColor:"#ef9273"}} onClick={() =>loginWithRedirect() }><b>SignUp/LogIn</b></motion.button>}  

{isAuthenticated && navigate('/TouchTyping')}  */}

<div className='container-fluid' style={{color:'#39395f',fontSize:'2rem',fontFamily:'tahoma'}}>

<b ><p><Typewriter 
      options={{
        strings: ['Typers Friend'],
        autoStart: true,
        loop: true,
      }}
     
    /></p></b>
    {isAuthenticated?<motion.button style={{marginTop:'25rem'}} whileHover={{scale:1.1}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }> <b>Log Out</b></motion.button>: <motion.button  whileHover={{scale:1.1}}  className="btn btn-light" style={{marginTop:'20rem',backgroundColor:"#ef9273"}} onClick={() =>loginWithRedirect() }><b>SignUp/LogIn</b></motion.button>}  

{isAuthenticated && navigate('/TouchTyping')} 

</div>
</div>
  )
}
