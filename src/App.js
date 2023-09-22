import BreakModes from './BreakModes';
import Timer from './Timer';
import Settings from './Settings';
import logo from './assets/logo.svg';
import { useState, useEffect, useRef } from 'react';

function App() {
  //States
  const [ durations /*, setDurations*/ ] = useState({
    pomodoro: 25,
    shortBreak: 1,
    longBreak: 15
  });
  const [ themeStyle ]  = useState({
    font: "'Kumbh Sans', Poppins, Monserat, 'Open Sans', Roboto, sans-serif ",
    color: "#f87070"
  });
  const [ timerType, setTimerType ] = useState(durations.pomodoro);
  const [ timerRunning, setTimerRunning ] = useState(false);
  const [ buttonStatus, setButtonStatus ] = useState('START');
  const [ remainingTime, setRemainingTime ] = useState(timerType * 60);
  const [ timeInText, setTimeInText ] = useState(formatTime(remainingTime));
  const intervalId = useRef(null);
  
  const [ circleWidth, setCircleWidth ] = useState(480);
  const radius = (31.11/100) * circleWidth;
  const circumference = (2*Math.PI) * radius;
  const [ progressRingStyle, setProgressRingStyle ] = useState({
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: `${circumference}`,
    stroke: themeStyle.color
  });
  

  useEffect((()=>{
    setRemainingTime(timerType * 60);
    setTimeInText(formatTime(timerType * 60));
    //console.log(timerType, remainingTime);

    // Set circleWidth based on window width
    if (window.innerWidth <= 375) {
      setCircleWidth(360);
    } else {
      setCircleWidth(480);
    }
  }),[timerType]);

  const updateTimerType = (event) => {
    setTimerType(event);
  }

  const handleStartStop = () => {
    if (timerRunning){
        clearInterval(intervalId.current);
        setButtonStatus("START");
        setTimerRunning(false);
    }else {
        const newIntervalId = setInterval(countdown, 1000);
        //setIntervalId(newIntervalId);
        intervalId.current = newIntervalId;
        setButtonStatus("PAUSE");
        setTimerRunning(true);
    }
  }

  //Helper functions
  function formatTime (timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60); 
    const seconds = timeInSeconds % 60; 
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  function countdown (){
    setRemainingTime((prevRemainingTime)=>{
      if (prevRemainingTime <= 0 ){
          clearInterval(intervalId.current);
          setTimerRunning(false);
          setButtonStatus('RESTART');
          return timerType * 60; //reset the timer back to initial
      }
      const newRemainingTime = prevRemainingTime-1;
      setTimeInText(formatTime(newRemainingTime));
      progress(newRemainingTime);
      return newRemainingTime;
  })}
  function progress(timeInSeconds){
    const durationInSeconds = timerType * 60;
    const percentage = circumference * (1 - timeInSeconds / durationInSeconds);
    const offset = circumference - percentage;
    setProgressRingStyle({
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: `${offset}`,
        stroke: themeStyle.color
    }); //set the stroke offset to the computed offset
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo}className='pomodoro-logo' alt="pomodoro-logo" />
      </div>
      <div className="content">
        <BreakModes themeStyle={themeStyle} updateTimerType={updateTimerType} durations={durations}/>
        <Timer buttonStatus={buttonStatus} 
          timeInText={timeInText} handleStartStop={handleStartStop} 
          themeStyle={themeStyle} progressRingStyle={progressRingStyle}
        />
        <Settings/>
      </div>
    </div>
  );
}

export default App;
