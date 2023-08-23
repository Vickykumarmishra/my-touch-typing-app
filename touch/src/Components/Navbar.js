import React, { useContext, useState,createContext } from 'react'
import { Link } from 'react-router-dom'
import { user } from '../App'
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import { contextdata } from '../App'

export default function Navbar() {

  const users=useContext(contextdata)

  return (
    <div>
      <nav className="navbar"  style={{backgroundColor:'#ef9273'}} >
  <div className="container-fluid"  >
    <Link to='#' className="navbar-brand" >
      <img src="key.png" alt="Logo" width="70" height="50" className="d-inline-block align-text-top" style={{color:'#ef9273',border:'0.1rem solid black',borderRadius:'0.2rem'}}/>
    <motion.b animate={{opacity:1,scale:1.2}}  initial={{opacity:0}} transition={{delay:0.4,duration:5,repeat:Infinity}} style={{color:'black'}}> Typer's Friend</motion.b>
    </Link>


    <div>
    <img src='user.png' width='70' height='60' className="d-inline-block align-text-top"/>
    <b><p style={{color:'black', fontStyle:'oblique'}}>username:{users}</p></b>
    </div>
    
  </div>
</nav>


    </div>
  )
}
