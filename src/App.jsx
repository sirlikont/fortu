import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import DayPage from "./pages/DayPage.jsx"; // universaalne päev
import LockedPage from "./pages/LockedPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx"; // importi lisame Navbar

export default function App() {
  const userEmail = localStorage.getItem("userEmail"); // kontrollime, kas user on logitud

  return (
    <BrowserRouter>
      {/* visual test: should be a red box if Tailwind is working */}
      <div className="bg-red-500 text-white p-4">Tailwind test — if this is red, Tailwind is active</div>

      {/* Kui user on logitud, näita Navbar */}
      {userEmail && <Navbar />}

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Universaalne päevade route */}
        <Route
          path="/day/:dayNumber"
          element={
            <ProtectedRoute>
              <DayPage />
            </ProtectedRoute>
          }
        />

        <Route path="/locked" element={<LockedPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
