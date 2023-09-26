import React, { useContext, useState,createContext } from 'react'
import { Link } from 'react-router-dom'
import { user } from '../App'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import { contextdata } from '../App'
import TouchTyping from './TouchTyping';
export default function Navbar() {
   
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {isAuthenticated}=useAuth0();
  const {user}=useAuth0();
  const navigate=useNavigate();

  const users=useContext(contextdata)

  return (
    <div>
      <nav className="navbar "  style={{backgroundColor:'#ef9273'}} >
  <div className="container-fluid"  >
    <Link to='#' className="navbar-brand" >
      <img src="key.png" alt="Logo" width="70" height="50" className="d-inline-block align-text-top" style={{color:'#ef9273',border:'0.1rem solid black',borderRadius:'0.2rem'}}/>
    <motion.b animate={{opacity:1,scale:1.2}}  initial={{opacity:0}} transition={{delay:0.4,duration:5,repeat:Infinity}} style={{color:'black'}}> Typer's Friend</motion.b>
    </Link>

    <div style={{float:'left',marginRight:'1rem'}}> {isAuthenticated?<motion.button style={{marginTop:'0.6rem'}} whileHover={{scale:1.1}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }> <b>Log Out</b></motion.button>: <motion.button  whileHover={{scale:1.1}}  className="btn btn-light" style={{marginTop:'0.6rem'}} onClick={() =>loginWithRedirect() }><b>Log In</b></motion.button>}</div>
          

     

    <div>
      
    {isAuthenticated && <p style={{color:'white',marginRight:'1rem',float:'right',marginTop:"0.9rem"}}><img style={{borderRadius:'50%',height:'2rem',marginRight:'0.3rem'}} src={user.picture} alt={user.name} />{user.name}</p> }
    
    </div>
    {isAuthenticated && navigate('/TouchTyping')} 
  </div>
</nav>


    </div>
  )
}
