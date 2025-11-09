/// src/pages/LoginPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  const storedEmail = localStorage.getItem("userEmail");
  if (storedEmail) {
    navigate("/day/1"); // nüüd vastab /day/:dayNumber route'ile
  }
}, [navigate]);

const handleLogin = (e) => {
  e.preventDefault();
  if (email.trim() === "") return alert("Palun sisesta e-mail!");

  localStorage.setItem("userEmail", email);
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  localStorage.setItem("startDate", today);

  navigate("/day/1"); // uuesti uuendatud formaadis
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Logi sisse</h1>
        <input
          type="email"
          placeholder="Sinu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700"
        >
          Logi sisse
        </button>
      </form>
    </div>
  );
}