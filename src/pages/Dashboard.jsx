import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // dummy data (safe)
    setData([
      { name: "Jan", value: 30 },
      { name: "Feb", value: 50 },
      { name: "Mar", value: 40 },
      { name: "Apr", value: 70 }
    ]);
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Dashboard 📊</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}