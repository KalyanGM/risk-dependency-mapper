import axios from "axios";

// This is your backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000",
});

// This function calls backend API
export const getAuditLogs = () => {
  return API.get("/audit-logs");
};