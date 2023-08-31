import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import useSound from 'use-sound';
import Swal from 'sweetalert2';


let emails;
let user;//is variable ko agar function k andar rakhenge to ye export nahi ho payega
export default function Join() {
     const [name,setName]=useState("");
     const [email,setEmail]=useState("")
    function sendUser(e){
      user=document.getElementById('joinInput').value
      emails=document.getElementById('email').value
        
      if(name==''||email==''){
        e.preventDefault()
        play();

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Some detais are missing. please fill it!',
          footer: '<a href="">Why do I have this issue?</a>'
        })

      }

  
    }
    const [play] = useSound('error.mp3');
     
  return (
   <div  >
<center >



<motion.div className="container" animate={{ opacity:1 }} initial={{opacity:0}} transition={{duration:4}}
     style={{rotate: 0 ,backgroundColor:'black',height:'25rem',width:'20rem',marginTop:'4rem', borderRadius:'1rem', border:'0.1rem solid #ef9273', backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")` ,boxShadow:'1px 1px 2px black, 0 0 25px white, 0 0 5px white'}}>

<div className="container" >

    <motion.img whileHover={{scale:1.1}} src='user.png' alt="" style={{width:'10rem',height:"7rem",marginTop:'1rem'}}/><br></br><br></br>
    <h1 style={{color:'#ef9273',borderBottom:'0.2rem solid white'}}>Typer's Friend</h1>
    <br></br>
 
    <motion.input  whileHover={{scale:1.1}} type='text' id='joinInput' onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' style={{borderRadius:'0.5rem',marginBottom:'1rem',border:'0.1rem solid #ef9273'}}></motion.input>
    <motion.input  whileHover={{scale:1.1}} type='text' id='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email-id' style={{borderRadius:'0.5rem',marginBottom:'1rem',border:'0.1rem solid #ef9273 '}}></motion.input>

  <Link  to='/TouchTyping'><motion.button whileHover={{scale:1.2}}  className="btn btn-danger" style={{marginTop:'0.5rem',width:'10rem',backgroundColor:'#ef9273'}} onClick={sendUser}  >LogIn</motion.button></Link>
  {/**!name means  name khali hai,name k andar koi value nahi hai */}
</div>
  
</motion.div></center>

 
   </div>
  )
}
export {user}

