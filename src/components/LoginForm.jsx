import { useState } from "react";
import { setUser } from "../utils/storage.js";
import "../index.css";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, signupDate: new Date().toISOString() };
    setUser(user);
    onLogin(user);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2 className="title">Tere tulemast!</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Sisesta oma e-mail"
        required
        className="input mb-4"
      />
      <button type="submit" className="button">
        Alusta
      </button>
    </form>
  );
}