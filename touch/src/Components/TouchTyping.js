import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import { NavLink } from 'react-router-dom';
import Newlesson from './Newlesson';
import Swal from 'sweetalert2';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TouchTyping = () => {
  
  let text='A data entry clerk is a member of staff employed to enter or update data into a computer system. Data is often entered into a computer from paper documents using a keyboard.';
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
/*textarea me keyUp  karne par isTimerRunning is set to true and on blur, i.e on going out of textarea it is set to false through function calls.
isTimerRunning is set to false by default and it is the dependency of the useEffect , so on changing it to true from default value false useeffect will start executing
and hence timer will start decreasing and on blur it is set to false again useeffect will start executing and this time it is false so timer will not decrease
it will be stop*/
      countdownInterval = setInterval(() => {
        setRemainingTime(previousTime => previousTime - 1);
      }, 1000);
    }

    if (remainingTime === 0) {
      clearInterval(countdownInterval);
/*The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.therefore it will continue its execution even after 60 sec completes
it will start showing remaining time in minus, if we will not stop the setInterval web api at remainingTime===0 in above line of code */
      //i will take my actions when the 1-minute window is completed
      alertsound()
      Swal.fire('Practice session completed.  '+'accuracy='+ accuracy+'%.'+ ' no of key pressed ='+ keyCounting + ' RESET TEST TO PRACTICE AGAIN')
    }

    return () => clearInterval(countdownInterval);
  }, [remainingTime, isTimerRunning]);

  function startTimer() {
    setIsTimerRunning(true);
  }

  function stopTimer() {//This function will call on 'onBlur' event on text input area 
    setIsTimerRunning(false);
  }

  function setter() {
    //This function get called on clicking reset button. it is resetting the every values and also t-it erasing the texts written in textarea .

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
    const  value  = event.target.value;/*the handleChange function extracts the value property from the event.target element (which is the input field) and logs 
    the current value of the input whenever the user types in it..*/
    setwrittenText(value);//whatever i have written in input field. it get stored in 'value'
    /*setWrittenText was empty by default, now onchange in input field it is getting updated */
    calculateAccuracy(text, value);//function get called and text and value passed
    /*text hamara lesson hai , whereas value is the text written inside input field */
    setkeyCounting(previousCounting => previousCounting + 1);//every time onchange event this function get called and hence key count increase by 1 everytime.
  };

  const calculateAccuracy = (originalText, writtenText) => {
    //originalText m text ka value a gaya and written text k textarea m likha hua vakue a gaya.
    const originalWords = originalText.trim().split(' ');//the split() function depends on the delimiter you provide. In this case, using a space " " as the delimiter results in the string being split at each space, producing an array of words.
    const typedWords = writtenText.trim().split(' ');//the trim() function removes the leading and trailing spaces.
    const originalLength = originalWords.length;
    /*originalWord is a array of words which has been created by performing trim and split operation on originalText*/
    let matchingWords = 0;

    for (let i = 0; i < originalLength; i++) {
      if (originalWords[i] === typedWords[i]) {
        //here we are comparing both originalWords and typedWord arrays and then executing if block
        matchingWords++;//if element or word at index i of both arrays becomes equal,then it will increase matchingWord by 1;
        originalWords[i]=' '
      }
    }
//'originalLength' matlab originalWord array me total kitne elements hai 
    const calculatedAccuracy = (matchingWords / originalLength) * 100;
    //lesson vale text ka ham ek array banaye hai  trim and split karke,  aur usi array ka length hai 'originalLength' 
    /*lets suppose matchingWord=10 and also originalLength is also 10 (it means originalWords array me 10 words the and sab ke sab match ho gaye hai)
     therefor accuracy=10/10*100=100%    */
    setAccuracy(calculatedAccuracy.toFixed(3));
  };

  return (
    <>
    <Navbar></Navbar>
    <motion.div style={{ borderRadius: '0.5rem' 
    }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }} >  
   
 
      <div
        whileHover={{ scale: 1.1 }} className="container text-center " style={{ paddingTop: '0.5rem',paddingBottom: '0.5rem',  marginTop: '2.5rem', borderRadius: '0.5rem'}}
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

      <div className="input-group" style={{color:' #ef9273'}}>
        <motion.textarea whileHover={{ scale: 1.1 }} onKeyDown={play3} className="form-control " value={writtenText} onChange={changeHandler} onKeyUp={startTimer} onBlur={stopTimer}  aria-label="With textarea" placeholder="Start typing ......." style={{ color:'#ef9273',border: '0.1rem solid #ef9273', marginLeft: '5rem', marginRight: '5rem', fontSize: 50 ,backgroundColor:"black"}} ></motion.textarea>
      </div>

      <b>
        <p style={{ color: '#ef9273', marginTop: '1rem' }}>Remaining Time: {remainingTime} seconds | Accuracy: {accuracy}% | No of keys pressed: {keyCounting} </p>
      </b>
    
      <motion.button whileHover={{ scale: 1.1 }} className="btn  btn-danger" style={{ backgroundColor: '#ef9273' ,marginLeft:"1rem"}} onClick={setter} onFocus={play2}>
       Reset the Test
      </motion.button>

      <NavLink to='/Newlesson'><motion.button whileHover={{ scale: 1.1 }} className="btn  btn-danger" style={{ backgroundColor: '#ef9273', marginLeft:'1rem'  }}  >New Lesson</motion.button></NavLink>
      <ToastContainer/>
    </motion.div>
    <Footer></Footer>
    </>
  );
};
export default TouchTyping;

/*some notes
value={writtenText} => by writing this inside text input field we are defining the default value inside the input area
The value attribute is used differently for different input types:

For "button", "reset", and "submit" - it defines the text on the button
For "text", "password", and "hidden" - it defines the initial (default) value of the input field
*/
