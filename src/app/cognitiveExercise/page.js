'use client';
import React, { useState, useEffect,useRef } from 'react';
import './page.css';
 

export default function CognitiveExercise() {
  const [observationShown, setObservationShown] = useState(false);
  const [obsAnswer, setObsAnswer] = useState('');
  const [timerActive, setTimerActive] = useState(false);
  const [count, setCount] = useState(30);

  const handleStartObservation = () => {
    setObservationShown(true);
    setTimeout(() => {
      setObservationShown(false);
    }, 3000); // show for 3 seconds
  };

  const handleStartTimer = () => {
    setTimerActive(true);
    setCount(30);
  };

  useEffect(() => {
    if (timerActive && count > 0) {
      const timer = setInterval(() => setCount(c => c - 1), 1000);
      return () => clearInterval(timer);
    }
    if (count === 0) {
      setTimerActive(false);
    }
  }, [timerActive, count]);

  const handleSubmit = () => {
    if (obsAnswer.toLowerCase() === 'blue') {
      alert('✅ Correct! The color was Blue.');
      <div className="container" style={{background:"black",}}>       
      </div>
    } else {
      alert('❌ Incorrect. The color was Blue.');
    }
  };
  const videoRef = useRef(null)
  const handlePlay = ()=>{
       videoRef.current.play();
  }
  const handlepause =()=>{
    videoRef.current.pause();
  }
  return (
    <div className="exercise-container">
      <h1>🧠 Cognitive Exercises</h1>

      {/* Observation Challenge */}
      <div className="task">
        
        <h3>👁️ Observation Challenge</h3>
        {!observationShown ? (
          <>
            <button className="show-btn" onClick={handleStartObservation}>
              Show Color Briefly
            </button>
            <p className="hint">(Remember the color that appears)</p>
          </>
        ) : (
          <div className="color-box">BLUE</div>
        )}
        <input
          type="text"
          value={obsAnswer}
          onChange={(e) => setObsAnswer(e.target.value)}
          placeholder="What color was shown?"
        />
        <button className="submit-btn" onClick={handleSubmit}>Submit Answer</button>
      </div>

      {/* Daily Timer */}
      <div className="task">
        <h3>⏱️ 30-Second Focus Timer</h3>
        <div className="video_task">
          
          <video className='video' autoPlay loop muted ref={videoRef}>
            <source src='/assets/video1.mp4'   type="video/mp4"/> 
          </video>
                    <button onClick={handlePlay}>▶ Play</button>
          <button onClick={handlepause}>⏸ Pause</button>
        </div>
        {!timerActive ? (
          <button className="timer-btn" onClick={handleStartTimer}>
            Start Timer
          </button>
        ) : (
          <p className="timer">🧘 Stay focused... {count}s</p>
          
        )}
      </div>
    </div>
  );
}