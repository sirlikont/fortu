import React from "react";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedRoute({ userEmail, children }) {
  const { dayNumber } = useParams();

  if (!userEmail) return <Navigate to="/login" replace />;

  const startDate = localStorage.getItem("startDate");
  if (!startDate) return <Navigate to="/login" replace />;

  // --- ARVUTAME PÄEVAD SÜDAÖÖ JÄRGI ---
  const start = new Date(startDate + "T00:00:00");
  //const today = new Date();
  //arenduse jaoks, et saaks kindla päeva järgi testida:
  const today = new Date("2025-12-03T00:00:00");


  // Eemaldame tänaselt kellaaja (et südaöö loogika toimiks)
  today.setHours(0, 0, 0, 0);

  const msDiff = today - start;
  const daysPassed = Math.floor(msDiff / (1000 * 60 * 60 * 24)) + 1;

  const requestedDay = Number(dayNumber);

  // Kas kasutaja üritab tuleviku päeva?
  if (requestedDay > daysPassed) {
    return <Navigate to="/locked" replace />;
  }

  return children;
}
