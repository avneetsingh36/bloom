// Graph.jsx
import React from "react";
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
import "./Graph.css";

// Sample data for a 24-hour period with 3-hour intervals
const dayHealthData = Array.from({ length: 8 }, (_, i) => ({
  name: `${i * 3}:00`,
  uv: Math.random() * 100,
}));
const heartRateData = Array.from({ length: 8 }, (_, i) => ({
  name: `${i * 3}:00`,
  uv: 60 + Math.random() * 30,
}));

export default function Graph() {
  return (
    <div className="graph-wrapper">
      <ResponsiveContainer width="48%" aspect={1}>
        <LineChart
          data={dayHealthData}
          margin={{ top: 20, right: 50, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ top: 10, left: 25 }} />
          <Line
            type="monotone"
            dataKey="uv"
            name="Health Index"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="48%" aspect={1}>
        <LineChart
          data={heartRateData}
          margin={{ top: 20, right: 50, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ top: 10, left: 25 }} />
          <Line
            type="monotone"
            dataKey="uv"
            name="Beats Per Minute"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
