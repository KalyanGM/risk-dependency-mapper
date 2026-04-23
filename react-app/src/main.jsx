import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AuditLogList() {
  return <h1>Audit Page Works 🎉</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/audit-logs" element={<AuditLogList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);