import { useState } from "react";
import { setUser } from "../utils/storage.js";

export default function LoginForm({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, signupDate: new Date().toISOString() };
    setUser(user);
    onLogin(user);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold text-center">Tere tulemast!</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Sisesta oma nimi"
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Alusta</button>
    </form>
  );
}
