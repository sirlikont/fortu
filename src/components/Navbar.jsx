export default function Navbar({ onLogout }) {
  return (
    <nav className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
      <span className="font-bold text-lg">🦝 FORTU</span>
      <button
        onClick={onLogout}
        className="text-sm text-red-600 hover:underline"
      >
        Logi välja
      </button>
    </nav>
  );
}