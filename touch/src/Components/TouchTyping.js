import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import { user } from './Join';

const TouchTyping = () => {

  
  const [keyCounting, setkeyCounting] = useState(0);
  let text='asdfjkl; ;lkjfdsa fdsajkl; asdfjlk; asdfjkl; asdfjkl; asdfjkl; asdfjk;l asdf jk;lasdfjkl; fdldska;fjfkdls;alskdfj assssddddfjfffjjjkklll;;;;lkj jkl;asdfjkl;;;lasdfjkl;asdf;;jkl lasdfjkl;asdf';
  const [writtenText, setwrittenText] = useState('');
  const [accuracy, setAccuracy] = useState(0);
  const [remainingTime, setRemainingTime] = useState(5 * 60); // 5 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  

const [play] = useSound('click2.mp3');
const [play2] =useSound('loginsound.mp3');
const [play3] =useSound('click sound.mp3')


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
      
      alert('Practice session completed.  '+'accuracy='+ accuracy+'%.'+ ' no of key pressed ='+ keyCounting + ' RESET TEST TO PRACTICE AGAIN');
    }

    return () => clearInterval(countdownInterval);
  }, [remainingTime, isTimerRunning]);

  function startTimer() {
    setIsTimerRunning(true);
  }

  function stopTimer() {
    setIsTimerRunning(false);
  }
  function resetalert(){
    alert('CONGRATULATIONS! your test has been completed'+'your accuracy is:'+accuracy+'%')
  }

  function setter() {
    setAccuracy(0);
    setkeyCounting(0);
    setRemainingTime(300);
    setwrittenText('');
  }

 
  const changeHandler = event => {
    //this function get called whenever we will do any changes in textarea i.e onchange event.
    const { value } = event.target;
    setwrittenText(value);//whatever i have written in yext field. it get stored in 'value'
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

  return (
    <motion.div style={{ borderRadius: '0.5rem' 
    }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }}>
      <Navbar />

      <div
        whileHover={{ scale: 1.1 }} className="container text-center " style={{ backgroundImage:
          'url("https://images.unsplash.com/photo-1537147347432-676815edd56c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTc3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")',paddingTop: '0.5rem',paddingBottom: '0.5rem',  marginTop: '2.5rem', borderRadius: '0.5rem'}}
      >
        <div class="row">
          <div class="col">

            <motion.p style={{ color: '#ef9273'}}>
              [instruction to type:-Please Look carefully the spaces given between two letters or words, type accordingly for better accuracy]
            </motion.p>

            <motion.h4 style={{ color: '#ef9273',fontSize:'bold'}} id="lesson">
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
    
{/*<img src='sound2.ico'/>*/}

      <motion.button whileHover={{ scale: 1.1 }} className="btn  btn-danger" style={{ backgroundColor: '#ef9273' }} onClick={setter} onFocus={play2}>
       Reset the Test
      </motion.button>

      <Footer />
    </motion.div>
  );
};

export default TouchTyping;
