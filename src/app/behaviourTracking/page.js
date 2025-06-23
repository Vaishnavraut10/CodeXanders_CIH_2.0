"use client";
import React, { useState } from "react";
import "./page.css";

export default function MoodPage() {
  const [mood, setMood] = useState("");
  const [behavior, setBehavior] = useState("");
  const [quote, setQuote] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);
  const [behaviorHistory, setBehaviorHistory] = useState([]);

  const handleMoodClick = (emoji) => {
    const time = new Date().toLocaleString();
    setMood(emoji);
    setMoodHistory([...moodHistory, { emoji, time }]);
  };

  const handleLogBehavior = () => {
    if (behavior.trim()) {
      const time = new Date().toLocaleString();
      setBehaviorHistory([...behaviorHistory, { activity: behavior, time }]);
      setBehavior("");
    }
  };
  const [activeRole, setActiveRole] = useState("Logmood");

  const roles = ["Logmood", "LogBehaviour"];

  const roleContent = {
    Logmood: (
      <div className="section">
        <h3 id="how_are_you_felling">How are you feeling now?</h3>
        <p id="current_mood">Select your current mood and add any relevant notes.</p>
        <div className="emojis">
          {["😊", "😐", "😢", "😠","😊", "😐", "😢", "😠",].map((e) => (
            <button
              key={e}
              className="emoji-btn"
              onClick={() => handleMoodClick(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <h3 id="quote">Write a Quote or Thought for Today</h3>
        <textarea
          placeholder="e.g., Be yourself; everyone else is already taken."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          className="textarea"
        />

        <div className="history_box">
          <h3>🕒 Mood History</h3>
          <ul>
            {moodHistory.map((entry, idx) => (
              <li key={idx}>
                {entry.emoji} — <span className="time">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    ),
    LogBehaviour: (
      <div className="section">
        <p id="log_behaviour">Log a Behavior or Activity</p>
        <p>
          Record significant activities, habits, or behaviors from your day.
        </p>
        <h3>Behavior / Activity</h3>
        <input
          type="text"
          value={behavior}
          onChange={(e) => setBehavior(e.target.value)}
          placeholder="e.g., Studied, Worked, Walked..."
          className="text-input"
        />
        <p>A brief description of the behavior or activity.</p>
        <p>Optional Notes</p>
        <textarea name="Optional" id="optional"></textarea>
        <button className="log-btn" onClick={handleLogBehavior}>
          Log Behavior
        </button>
        <div class="history_box">
          <h3>📝 Behavior History</h3>
          <ul>
            {behaviorHistory.map((entry, idx) => (
              <li key={idx}>
                {entry.activity} — <span className="time">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="behavior_container">
      <h1 id="heading">Mood & Behavior Tracker</h1>
      <div className="section_container"></div>

      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            marginLeft: "80px",
          }}
        >
          {roles.map((role) => (
            <li
              key={role}
              onClick={() => setActiveRole(role)}
              style={{
                marginRight: "20px",
                cursor: "pointer",
                fontWeight: activeRole === role ? "bold" : "normal",
              }}
            >
              {role}
            </li>
          ))}
        </ul>
      </nav>
      <div className="role_wrapper" style={{ marginTop: "20px" }}>
        {roleContent[activeRole]}
      </div>
      {/* Quote of the Day */}

      {/* History Section */}
      <div className="history"></div>
    </div>
  );
}
