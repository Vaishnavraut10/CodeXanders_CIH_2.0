"use client";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useRouter } from 'next/navigation';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CognitiveTrendsDashboard() {
  const router = useRouter();
  const [taskStarted, setTaskStarted] = useState(false);
  const [mood, setMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Safe localStorage access
    if (typeof window !== "undefined") {
      const storedMood = localStorage.getItem("mood");
      const moodHistoryData = localStorage.getItem("moodHistory");

      if (storedMood) setMood(storedMood);
      if (moodHistoryData) setMoodHistory(JSON.parse(moodHistoryData));
    }

    // Dummy weekly data
    const dummyData = [
      { day: "Mon", games: 2, tasks: 1 },
      { day: "Tue", games: 1, tasks: 2 },
      { day: "Wed", games: 3, tasks: 2 },
      { day: "Thu", games: 2, tasks: 3 },
      { day: "Fri", games: 3, tasks: 2 },
      { day: "Sat", games: 1, tasks: 1 },
      { day: "Sun", games: 2, tasks: 3 },
    ];
    setData(dummyData);
  }, []);

  return (
    <div className="dashboard_main_cont">
      <p className="sub-heading">
        Track your game and task performance over the week
      </p>

      <div className="new_dashbaord_cont">
        <div className="dashboard-container">
          <div className="upper_dashboard">
            <div className="card hover-card">
              <h2 className="card-title">Today's Brain Task</h2>
              <p className="card-text">
                Complete a short task to keep your brain sharp.
              </p>
              <button
                className="button"
                onClick={() => router.push("/brainTask")}
                disabled={taskStarted}
              >
                {taskStarted ? "Running..." : "Start Task"}
              </button>
            </div>

            <div className="card hover-card">
              <h2 className="card-title">Mood Tracker</h2>
              <p className="card-text">Current Mood</p>

              {moodHistory.length > 0 && (
                <div className="mood-history">
                  <img
                    src="/assets/happiness.png"
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      marginLeft: "50px",
                      marginBottom: "10px",
                    }}
                  />
                  <ul>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        color: "#003349",
                        marginLeft: "50px",
                      }}
                    >
                      {mood}
                    </p>
                  </ul>
                </div>
              )}
            </div>

            <div className="card hover-card">
              <h2 className="card-title">Cognitive Alerts</h2>
              <p className="alert">
                ⚠️ Slight dip in cognitive performance this week.
              </p>
            </div>
          </div>

          <div className="card">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="games"
                  stroke="#3498db"
                  name="Cognitive Games"
                />
                <Line
                  type="monotone"
                  dataKey="tasks"
                  stroke="#2ecc71"
                  name="Brain Tasks"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}