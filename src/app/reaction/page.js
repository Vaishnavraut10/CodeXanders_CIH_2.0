'use client';
import React, { useState, useEffect } from 'react';
import './page.css'; // 👈 Import CSS

export default function ReactionGame() {
  const [waiting, setWaiting] = useState(true);
  const [startTime, setStartTime] = useState(null);

  const startTest = () => {
    setWaiting(true);
    const delay = Math.random() * 2000 + 2000;
    const timer = setTimeout(() => {
      setWaiting(false);
      setStartTime(Date.now());
    }, delay);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    startTest();
  }, []);

  const handleClick = () => {
    if (waiting) {
      alert("⛔ Too soon!");
    } else {
      const time = Date.now() - startTime;
      alert(`⚡ Reaction Time: ${time} ms`);
    }
  };

  return (
    <div className="reaction-container">
      <h2 className="reaction-title">⚡ Reaction Speed Test</h2>
      <p className="reaction-status">
        {waiting ? "Wait for green..." : "Click now!"}
      </p>
      <button
        onClick={handleClick}
        className={`reaction-circle ${waiting ? 'waiting' : 'active'}`}
      >
        {waiting ? "WAIT" : "CLICK"}
      </button>
      <br />
      <button onClick={startTest} className="reaction-btn">Restart Game</button>
    </div>
  );
}