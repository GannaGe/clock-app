const Controls = ({breakLength, setBreakLength, sessionLength, setSessionLength}) => {
    const handleBreakIncrement = () => {
      if (breakLength < 60) setBreakLength(breakLength + 1)
    }
    
    const handleBreakDecrement = () => {
      if (breakLength > 1) setBreakLength(breakLength - 1)
    }
    
    const handleSessionIncrement = () => {
      if (sessionLength < 60) setSessionLength(sessionLength + 1)
    }
    
    const handleSessionDecrement = () => {
      if (sessionLength > 1) setSessionLength(sessionLength - 1)
    }
    
    return(
    <div className="controls">
         <div className="break-controls">
           <h2 id="break-label">Break Length</h2>
           <div className="break-btns">
             <button onClick={handleBreakIncrement} className="btn btn-breakUp" id="break-increment">Up</button>
             <span id="break-length">{breakLength}</span>
             <button onClick={handleBreakDecrement} className="btn btn-breakDown" id="break-decrement">Down</button>
           </div>
         </div>
         <div className="session-controls">
           <h2 id="session-label">Session Length</h2>
           <div className="session-btns">
             <button onClick={handleSessionIncrement} className="btn btn-sessionUp" id="session-increment">Up</button>
             <span id="session-length">{sessionLength}</span>
             <button onClick={handleSessionDecrement} className="btn btn-sessionDown" id="session-decrement">Down</button>
          </div>
       </div>
     </div>
    )
  }

  export default Controls;