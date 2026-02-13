import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getDaysPassed } from "../utils/unlockLogic";

export default function ProtectedRoute({ userEmail, children }) {
  const { dayNumber } = useParams();

  if (!userEmail) return <Navigate to="/login" replace />;

  const daysPassed = getDaysPassed();
  const requestedDay = Number(dayNumber);

  if (requestedDay > daysPassed) return <Navigate to="/locked" replace />;

  return children;
}
