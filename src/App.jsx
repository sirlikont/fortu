import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import DayPage from "./pages/DayPage.jsx"; // universaalne päev
import LockedPage from "./pages/LockedPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import BottomNav from "./components/BottomNav.jsx";

import getCurrentDay from "./utils/getCurrentDay.js";

export default function App() {
  // Init state directly from localStorage, et ProtectedRoute ei redirectiks valesti
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("userEmail"));

  const handleLogin = (email) => {
    localStorage.setItem("userEmail", email);
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("startDate", today);
    setUserEmail(email); // navbar ilmub kohe
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("startDate");
    setUserEmail(null); // navbar kaob kohe
  };

  return (
    <BrowserRouter>
      {/* Navbar ainult kui logitud */}
      {userEmail && <Navbar onLogout={handleLogout} />}

      <Routes>
        {/* Login */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Päevad */}
        <Route
          path="/day/:dayNumber"
          element={
            <ProtectedRoute userEmail={userEmail}>
              <DayPage />
            </ProtectedRoute>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute userEmail={userEmail}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Tänane päev */}
        <Route
          path="/today"
          element={<Navigate to={`/day/${getCurrentDay()}`} replace />}
        />

        {/* Lukustatud päevad */}
        <Route path="/locked" element={<LockedPage />} />

        {/* Kõik ülejäänud viivad login lehele */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>

      {/* Alumine nav ainult kui logitud */}
      {userEmail && <BottomNav />}
    </BrowserRouter>
  );
}
