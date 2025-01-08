const Timer = ({handleStartStop, handleReset, timeLeft, timerLabel}) => {
  
    const formatTimeLeft = () => {
      const minutes = Math.floor(timeLeft / 60)
      const seconds = timeLeft % 60
      return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10? '0' : ''}${seconds}`
    }
    
    return(
    <div className="timer">
       <h2 id="timer-label">{timerLabel}</h2>
       <div id="time-left">{formatTimeLeft()}</div>
       <div className="timer-btns">
         <button onClick={handleStartStop} className="btn timer-btn btn-play-pause" id="start_stop">Play/Pause</button>
         <button onClick={handleReset} className="btn timer-btn btn-reset" id="reset">Reset</button>
       </div>
     </div>
    )
  }

  export default Timer;