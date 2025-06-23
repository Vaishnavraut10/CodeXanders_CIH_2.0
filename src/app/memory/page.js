'use client';
import React, { useState, useEffect } from 'react';
import './page.css';
const page = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const shuffleCards = () => {
    const symbols = ['A', 'B', 'C','D','E','F'];
    const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      setTimeout(() => {
        const [i1, i2] = flipped;
        if (cards[i1] === cards[i2]) {
          setMatched((m) => [...m, i1, i2]);
        }
        setFlipped([]);
        setMoves((m) => m + 1);
      }, 1000);
    }
  }, [flipped]);
  return (
    <div>
       <div className="memory-container">
      <h2 className="memory-title">🧠 Memory Recall Game</h2>
      <button onClick={shuffleCards} className="memory-btn">Restart Game</button>
      <div className="memory-grid">
        {cards.map((card, idx) => {
          const isVisible = flipped.includes(idx) || matched.includes(idx);
          return (
            <button
              key={idx}
              onClick={() =>
                !flipped.includes(idx) &&
                !matched.includes(idx) &&
                flipped.length < 2 &&
                setFlipped([...flipped, idx])
              }
              className="memory-card"
            >
              {isVisible ? card : '❓'}
            </button>
          );
        })}
      </div>
      {matched.length === cards.length && (
        <p className="memory-result">🎉Congrates Completed in {moves} moves!</p>
      )}
      </div>
    </div>
  )
}

export default page
