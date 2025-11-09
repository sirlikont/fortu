import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      navigate("/day/1"); // kui juba logitud, suuna esimese päeva lehele
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "") return alert("Palun sisesta e-mail!");

    localStorage.setItem("userEmail", email);
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    localStorage.setItem("startDate", today);

    navigate("/day/1");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <img src="/src/assets/fortu_login.png" alt="Fortu Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="title">Logi sisse</h1>
        <input
          type="email"
          placeholder="Sinu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input mb-4"
        />
        <button type="submit" className="button">Logi sisse</button>
      </form>
    </div>
  );
}