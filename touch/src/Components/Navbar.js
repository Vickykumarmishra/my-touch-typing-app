import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { user } from './Join'
import { motion } from 'framer-motion'
import useSound from 'use-sound'

export default function Navbar() {

 
  const [play]=useSound('loginsound.mp3')
  return (
    <div>
      <nav className="navbar"  style={{backgroundColor:'#ef9273'}} >
  <div className="container-fluid"  >
    <Link to='#' className="navbar-brand" >
      <img src="key.png" alt="Logo" width="70" height="50" className="d-inline-block align-text-top" style={{color:'#ef9273',border:'0.1rem solid black',borderRadius:'0.2rem'}}/>
    <motion.b animate={{opacity:1,scale:1.2}}  initial={{opacity:0}} transition={{delay:0.4,duration:5,repeat:Infinity}} style={{color:'black'}}> Typer's Friend</motion.b>
    </Link>


    <div>
    <Link to='/Join'><motion.button whileHover={{scale:1.1}} className='btn btn-primary' onClick={play} style={{backgroundColor:'#ef9273',color:'black',border:'0.1rem solid black'}}><b>SignUp</b></motion.button></Link>
    </div>

    <div>
    <img src='user.png' width='70' height='60' className="d-inline-block align-text-top"/>
    <b><p style={{color:'black', fontStyle:'oblique'}}>username:-{user}</p></b>
    </div>
    
  </div>
</nav>


    </div>
  )
}
