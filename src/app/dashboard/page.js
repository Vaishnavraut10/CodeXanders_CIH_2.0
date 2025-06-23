"use client";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy weekly data (Mon–Sun)
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
    <div class="dashboard_main_cont">
      <p className="sub-heading" style={{margin:"40px 0 0 100px"}}>
          Track your game and task performance over the week
        </p>
    
      <div className="dashboard-container">
        
        

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
  );
}
