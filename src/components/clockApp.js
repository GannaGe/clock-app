import { useState, useEffect } from 'react';
import Controls from './controls';
import Timer from './timer';

const ClockApp = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState("Session");
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    setTimeLeft(sessionLength * 60)
   }, [sessionLength]
  )
  
   const handleStartStop = () => {
     setIsRunning(!isRunning)
   }
  
  const handleReset = () => {
    setBreakLength(5)
    setSessionLength(25)
    setTimerLabel("Session")
    setTimeLeft(25 * 60)
    setIsRunning(false)
    const beep = document.getElementById("beep")
    beep.pause()
    beep.currentTime = 0
  }
  
  const decrementTimeLeft = () => {
    setTimeLeft(prev => prev - 1)
  }
  
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setTimeout(decrementTimeLeft, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      document.getElementById("beep").play()
      if (timerLabel === "Session") {
        setTimerLabel("Break")
        setTimeLeft(breakLength * 60)
      } else {
        setTimerLabel("Session")
        setTimeLeft(sessionLength * 60)
      }
    }
  }, [timeLeft, isRunning, breakLength, sessionLength, timerLabel])
  
  return(
  <div className="app-container">
      <h1 className="title">25 + 5 Clock</h1>
      <Controls
        breakLength={breakLength}
        sessionLength={sessionLength}
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
      />
      <Timer
        timerLabel={timerLabel}
        timeLeft={timeLeft}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
       />
      <audio id="beep" preload="auto" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
  </div>
  )
}

export default ClockApp;