import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2">
      <button
        onClick={() => navigate("/dashboard")}
        className={`text-xl ${isActive("/dashboard") ? "text-green-700" : "text-gray-400"}`}
      >
        🏠
      </button>

      <button
        onClick={() => navigate("/today")}
        className={`text-xl ${isActive("/day") ? "text-green-700" : "text-gray-400"}`}
      >
        📅
      </button>

      <button
        onClick={() => navigate("/profile")}
        className="text-xl text-gray-400"
      >
        👤
      </button>
    </nav>
  );
}