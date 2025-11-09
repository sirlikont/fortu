// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Kontrollime, kas localStorage'is on userEmail (see on see, mida LoginPage hetkel salvestab)
  const loggedIn = localStorage.getItem("userEmail") !== null;

  return loggedIn ? children : <Navigate to="/login" replace />;
}
