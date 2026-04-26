import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({
    email: "test@gmail.com",
    password: "1234"
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", form);

      login(res.data.token || "loggedin");

      alert("Login successful");

      navigate("/list");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <h2>Login</h2>

      <input
        type="email"
        value={form.email}
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <br /><br />

      <input
        type="password"
        value={form.password}
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}