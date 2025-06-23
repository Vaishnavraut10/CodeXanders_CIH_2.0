'use client';
import React, { useState, useEffect } from 'react';
import './page.css'; // 👈 Import the CSS file

export default function AttentionGame() {
  const [grid, setGrid] = useState([]);
  const [target, setTarget] = useState(null);
  const [clicked, setClicked] = useState(false);

  const generateGrid = () => {
    const arr = Array(16).fill("🔸");
    const index = Math.floor(Math.random() * 16);
    arr[index] = "🔹";
    setGrid(arr);
    setTarget(index);
    setClicked(false);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  const handleClick = (i) => {
    if (clicked) return;
    setClicked(true);
    alert(i === target ? "🎯 Correct!" : "❌ Wrong!");
  };

  return (
    <div className="attention-container">
      <h2 className="attention-title">👁️ Attention Challenge</h2>
      <p className="attention-instruction">Click the 🔹 symbol</p>
      <button onClick={generateGrid} className="attention-btn">Restart Game</button>
      <div className="attention-grid">
        {grid.map((sym, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="attention-card"
          >
            {sym}
          </button>
        ))}
      </div>
    </div>
  );
}