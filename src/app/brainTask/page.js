'use client';
import React, { useState, useEffect } from 'react';
import './page.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

const tasks = {
  math: [
    { q: 'If 5 + 3 × 2 = ?', answer: '11' },
    { q: 'What is (4 × 2) + 1?', answer: '9' },
    { q: 'Solve: 10 - (2 + 3)', answer: '5' },
  ],
  word: [
    { q: 'Which is the odd one out: Dog, Cat, Banana, Cow?', answer: 'Banana' },
    { q: 'Find the odd one: Apple, Mango, Car, Orange', answer: 'Car' },
    { q: 'Choose odd: Red, Blue, Circle, Green', answer: 'Circle' },
  ],
  riddle: [
    { q: 'I speak without a mouth and hear without ears. What am I?', answer: 'Echo' },
    { q: 'What has to be broken before you can use it?', answer: 'Egg' },
    { q: 'What has hands but can’t clap?', answer: 'Clock' },
  ],
};

export default function BrainTask() {
  const [mathTask, setMathTask] = useState({});
  const [wordTask, setWordTask] = useState({});
  const [riddleTask, setRiddleTask] = useState({});

  const [mathAnswer, setMathAnswer] = useState('');
  const [wordAnswer, setWordAnswer] = useState('');
  const [riddleAnswer, setRiddleAnswer] = useState('');

  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const loadRandomTasks = () => {
    setMathTask(tasks.math[Math.floor(Math.random() * tasks.math.length)]);
    setWordTask(tasks.word[Math.floor(Math.random() * tasks.word.length)]);
    setRiddleTask(tasks.riddle[Math.floor(Math.random() * tasks.riddle.length)]);

    // Reset input fields
    setMathAnswer('');
    setWordAnswer('');
    setRiddleAnswer('');
  };

  useEffect(() => {
    loadRandomTasks();
  }, []);

  const handleSubmit = () => {
    let localScore = 0;
    let results = [];

    if (mathAnswer.trim() === mathTask.answer) {
      localScore++;
      results.push('✅ Math: Correct');
    } else {
      results.push(`❌ Math: ${mathTask.answer}`);
    }

    if (wordAnswer.trim().toLowerCase() === wordTask.answer.toLowerCase()) {
      localScore++;
      results.push('✅ Word: Correct');
    } else {
      results.push(`❌ Word: ${wordTask.answer}`);
    }

    if (riddleAnswer.trim().toLowerCase() === riddleTask.answer.toLowerCase()) {
      localScore++;
      results.push('✅ Riddle: Correct');
    } else {
      results.push(`❌ Riddle: ${riddleTask.answer}`);
    }

    setScore(score + localScore);
    setHistory([...history, { date: new Date().toLocaleString(), result: results.join(' | '), points: localScore }]);
    alert(results.join('\n'));
  };

  const handleRetry = () => {
    loadRandomTasks();
  };

  return (
    <div className="task-container fade-in" >
      <h1 id='brain_task_challenge'>🧠 Brain Task Challenge</h1>

      <div className="task">
        <h2>🔢 Math Task</h2>
        <p>{mathTask.q}</p>
        <input
          type="text"
          value={mathAnswer}
          onChange={(e) => setMathAnswer(e.target.value)}
          placeholder="Your answer"
        />
      </div>

      <div className="task">
        <h2>🔤 Word Task</h2>
        <p>{wordTask.q}</p>
        <input
          type="text"
          value={wordAnswer}
          onChange={(e) => setWordAnswer(e.target.value)}
          placeholder="Your answer"
        />
      </div>

      <div className="task">
        <h2>🧩 Riddle Task</h2>
        <p>{riddleTask.q}</p>
        <input
          type="text"
          value={riddleAnswer}
          onChange={(e) => setRiddleAnswer(e.target.value)}
          placeholder="Your answer"
        />
      </div>

      <div className="buttons">
        <button className="submit-btn" onClick={handleSubmit}>Submit Answers</button>
         <FontAwesomeIcon icon={faRotateRight}  onClick={handleRetry} color="black" style={{width:"40px" ,cursor: "pointer",marginTop:"5px" , height:"40px"}}/>
        
      </div>

      <div className="score-section">
        <h3>Total Score: {score}</h3>
        <h4>🕓 Attempt History</h4>
        <ul>
          {history.map((item, i) => (
            <li key={i}>
              <strong>{item.date}</strong> — {item.result} — <span>{item.points} points</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}