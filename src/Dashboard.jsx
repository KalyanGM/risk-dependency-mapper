import { useEffect, useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [aiMessage, setAiMessage] = useState("");

  // Fetch tasks
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Fetch AI message
  useEffect(() => {
    fetch("http://localhost:5000/ai")
      .then(res => res.json())
      .then(data => setAiMessage(data.message));
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className="dashboard">
      {tasks.map(task => (
        <div key={task.id} className="card">
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
          <p>Date: {task.date}</p>
        </div>
      ))}

      <div className="card">
        <h3>AI Suggestion</h3>
        <p>{aiMessage}</p>
      </div>
    </div>
  );
}

export default Dashboard;