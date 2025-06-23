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
        <p id="current_mood" style={{margin:"10px 0 20px 50px"}}>Select your current mood and add any relevant notes.</p>
        <div className="emojis">
          {["😊 HAPPY", "😐 LOST", "😢 CRYING", "😠 ANGRY",].map((e) => (
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
        <p id="record_activity">
          Record significant activities, habits, or behaviors from your day.
        </p>
        <h3 id="behaviour_activity_text">Behavior / Activity</h3>
        <input
          type="text"
          value={behavior}
          onChange={(e) => setBehavior(e.target.value)}
          placeholder="e.g., Studied, Worked, Walked..."
          className="text-input"
        />
        <p id="brief_description">A brief description of the behavior or activity.</p>
        <p className="optional_note" style={{margin:"10px 0 0 50px ",fontSize:"1.5rem"}}>Optional Notes</p>
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
        <ul className="toggle_change"
          style={{
            display: "flex",
            listStyle: "none",
            padding: 0,
            marginLeft: "80px",
            fontSize:"1.5rem",
            background:"white",
            color:"purple",
            width:"20%",
            padding:"8px 7px",
            border: "1px solid black"

          }}
        >
          {roles.map((role) => (
            <li
              key={role}
              onClick={() => setActiveRole(role)}
              style={{
                marginRight: "20px",
                cursor: "pointer",
                color:"black",
                background:activeRole === role ? "#6cecdf" : "",
                padding:"10px 10px"
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
