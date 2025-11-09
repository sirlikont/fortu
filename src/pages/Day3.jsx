import { getUnlockedDays } from "../utils/unlockLogic.js";
import Navbar from "../components/Navbar.jsx";
import { Navigate } from "react-router-dom";

export default function Day3() {
  const unlocked = getUnlockedDays(localStorage.getItem("startDate"));

  if (unlocked < 3) return <Navigate to="/locked" replace />;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">3. päev – SMART-eesmärgid</h1>
        <p>Siin tuleb sinu tänase päeva sisu...</p>
      </div>
    </div>
  );
}