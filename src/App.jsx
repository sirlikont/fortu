import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import DayPage from "./pages/DayPage.jsx"; // universaalne päev
import LockedPage from "./pages/LockedPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx"; // importi lisame Navbar


export default function App() {
  const [userEmail, setUserEmail] = useState(null);

  // Kontrolli localStorage-st, kas kasutaja on logitud
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) setUserEmail(storedEmail);
  }, []);

  const handleLogin = (email) => {
    localStorage.setItem("userEmail", email);
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("startDate", today);
    setUserEmail(email); // ⬅ nüüd navbar ilmub kohe
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("startDate");
    setUserEmail(null); // ⬅ navbar kaob kohe
  };

  return (
    <BrowserRouter>
      {userEmail && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/day/:dayNumber"
          element={
            <ProtectedRoute userEmail={userEmail}>
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
