import React from 'react'

export default function LoadingSpinner() {

    const myStyle={
        backgroundColor:'black',
        height:'100vh',
        // marginTop:'-70px',
       
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', // This centers the image both horizontally and vertically
        
    };

  return (
    <div style={myStyle}>
      
      <div id="spinner" className="spinner-grow text-warning" style={{width: '4rem', height: '5rem', role:"status",borderRadius:'50%' ,color:'white',marginTop:"50%"}}>
  <span className="visually-hidden" style={{color:'white'}}>Loading...</span>
</div>

    </div>
  )
}
