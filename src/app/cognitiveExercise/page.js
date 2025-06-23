'use client';
import React, { useState, useEffect,useRef } from 'react';
import './page.css';
 

export default function CognitiveExercise() {

  const videoRef = useRef(null)
  const handlePlay = ()=>{
       videoRef.current.play();
  }
  const handlepause =()=>{
    videoRef.current.pause();
  }
  return (
    <div className="exercise-container">
      

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
        
      </div>
    </div>
  );
}