import { getUser } from "../utils/storage.js";
import { getUnlockedDays } from "../utils/unlockLogic.js";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function Day2() {
  const user = getUser();
  const unlocked = getUnlockedDays(localStorage.getItem("startDate"));

  if (unlocked < 2) return <Navigate to="/locked" replace />;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">2. päev – Raha ja väärtused</h1>
        <p>Siin tuleb sinu tänane sisu...</p>
      </div>
    </div>
  );
}