import { useNavigate } from "react-router-dom";

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
      {/* LOGO = DASHBOARD */}
      <span
        className="font-bold text-lg cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        🦝 FORTU
      </span>

      {/* LOGOUT */}
      <button
        onClick={onLogout}
        className="text-sm text-red-600"
      >
        Logi välja
      </button>
    </nav>
  );
}

