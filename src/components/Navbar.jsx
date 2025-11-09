// src/components/Navbar.jsx
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/storage.js";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("startDate");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
      <span className="font-bold text-lg">💰 Raha teekond</span>
      {user && (
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:underline"
        >
          Logi välja
        </button>
      )}
    </nav>
  );
}