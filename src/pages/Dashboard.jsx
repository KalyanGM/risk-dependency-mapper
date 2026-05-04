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

  // Loading state
  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="dashboard">
      
      {/* Tasks Section */}
      {tasks.map(task => (
        <div key={task.id} className="card">
          <h3>{task.title}</h3>
          <p>Status: {task.status}</p>
          <p>Date: {task.date}</p>
        </div>
      ))}

      {/* AI Panel */}
      <div className="card">
        <h3>AI Suggestion</h3>
        <p>{aiMessage}</p>
      </div>

    </div>
  );
}

export default Dashboard;