import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import Swal from 'sweetalert2';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { user } from './LandingPage';
export default function Newlesson(){

    let text='India, a diverse nation of rich heritage, mesmerizes with its vibrant cultures, breathtaking landscapes, and historical wonders like the Taj Mahal. From bustling cities to serene Himalayan peaks, it is a tapestry of traditions and modernity. Experience its spicy cuisine, intricate traditions, and warm hospitality that leave an indelible mark on every traveler.'
    const [keyCounting, setkeyCounting] = useState(0);
    const [writtenText, setwrittenText] = useState('');
    const [accuracy, setAccuracy] = useState(0);
    const [remainingTime, setRemainingTime] = useState(1 * 60); // 1 minutes in seconds
    const [isTimerRunning, setIsTimerRunning] = useState(false);
  
  const [play] = useSound('click2.mp3');
  const [play2] =useSound('loginsound.mp3');
  const [play3] =useSound('click sound.mp3')
  const [alertsound]=useSound('alert.mp3')
  
    useEffect(() => {
      let countdownInterval;
  
      if (isTimerRunning) {
        countdownInterval = setInterval(() => {
          setRemainingTime(previousTime => previousTime - 1);
        }, 1000);
      }
  
      if (remainingTime === 0) {
        clearInterval(countdownInterval);
      
        // take your actions when the 5-minute window is completed
        alertsound()
        Swal.fire('Practice session completed.  '+'accuracy='+ accuracy+'%.'+ ' no of key pressed ='+ keyCounting + ' RESET TEST TO PRACTICE AGAIN');
      }
  
      return () => clearInterval(countdownInterval);
    }, [remainingTime, isTimerRunning]);
  
    function startTimer() {
      setIsTimerRunning(true);
    }
  
    function stopTimer() {
      setIsTimerRunning(false);
    }
   
  
    function setter() {
      
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reset it!'
      }).then((result) => {
        if (result.isConfirmed) {
          //on clicking 'yes reset it' button , result.isConfirmed set to true.
          Swal.fire(
            'Reset done!',
            'Your file has been reset.',
            'success',
      setAccuracy(0),
      setkeyCounting(0),
      setRemainingTime(60),
      setwrittenText(''),
          )
        }
      })

    }
  
    const changeHandler = event => {
      //this function get called whenever we will do any changes in textarea i.e onchange event.
      const { value } = event.target;
      setwrittenText(value);//whatever i have written in text field. it get stored in 'value'
      calculateAccuracy(text, value);//function get called and text and value passed
      setkeyCounting(previousCounting => previousCounting + 1);
    };
  
    const calculateAccuracy = (originalText, writtenText) => {
      //originalText m text ka value a gaya and written text k textarea m likha hua vakue a gaya.
      const originalWords = originalText.trim().split(' ');//the split() function depends on the delimiter you provide. In this case, using a space " " as the delimiter results in the string being split at each space, producing an array of words.
      const typedWords = writtenText.trim().split(' ');//the trim() function removes the leading and trailing spaces.
      const originalLength = originalWords.length;
      let matchingWords = 0;
  
      for (let i = 0; i < originalLength; i++) {
        if (originalWords[i] === typedWords[i]) {
          matchingWords++;
          originalWords[i]=' '
        }
      }
  
      const calculatedAccuracy = (matchingWords / originalLength) * 100;
      setAccuracy(calculatedAccuracy.toFixed(3));
    };

    
    return(

      <>
      <Navbar></Navbar>
        <motion.div style={{ borderRadius: '0.5rem' 
    }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }} onLoad={ toast("Lesson changed successfully", 
    { toastId: 'success1',}, 
      // we need to give id to each toast, otherwise same toast will execute multiple times
   {position: "top-center",autoClose: 9014,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",})}>
   

      <div
        whileHover={{ scale: 1.1 }} className="container text-center " style={{ backgroundImage:
          'url("https://images.unsplash.com/photo-1537147347432-676815edd56c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTc3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")',paddingTop: '0.5rem',paddingBottom: '0.5rem',  marginTop: '2.5rem', borderRadius: '0.5rem'}}
      >
        <div class="row">
          <div class="col">

            <motion.p style={{ color: '#ef9273'}}>
              [instruction to type:-Please Look carefully the spaces given between two letters or words, type accordingly for better accuracy]
            </motion.p>

            <motion.h4 style={{ color: '#ef9273',fontSize:'bold',textShadow: '1px 1px 2px black, 0 0 25px yellow, 0 0 5px yellow'}} id="lesson">
              Lesson  :-{text}
            </motion.h4>

          </div>
        </div>
      </div>
      <br />

      <div class="input-group" style={{color:' #ef9273'}}>
        <motion.textarea whileHover={{ scale: 1.1 }} onKeyDown={play3} className="form-control " value={writtenText} onChange={changeHandler} onKeyUp={startTimer} onBlur={stopTimer}  aria-label="With textarea" placeholder="Start typing ......." style={{ color:'#ef9273',border: '0.1rem solid #ef9273', marginLeft: '5rem', marginRight: '5rem', fontSize: 50 ,backgroundColor:"black"}} ></motion.textarea>
      </div>

      <b>
        <p style={{ color: '#ef9273', marginTop: '1rem' }}>Remaining Time: {remainingTime} seconds | Accuracy: {accuracy}% | No of keys pressed: {keyCounting} </p>
      </b>
    

      <motion.button whileHover={{ scale: 1.1 }} className="btn  btn-danger" style={{ backgroundColor: '#ef9273' }} onClick={setter} onFocus={play2}>
       Reset the Test
      </motion.button>
      <ToastContainer position="top-center"
autoClose={9014}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"/>

    </motion.div>
    <Footer></Footer>
    </>
    )
}