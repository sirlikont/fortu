import Navbar from "../components/Navbar";

export default function LockedPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <div className="pt-20 px-4 max-w-md mx-auto text-center">

        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-emerald-800 mb-4">🔒 Päev on veel lukus</h1>
          <p className="text-gray-800 mb-4">
            Selle päeva sisu avaneb homme. Tule tagasi siis, et jätkata oma rahatarkuse teekonda!
          </p>

          <button
            className="button"
            onClick={() => window.history.back()}
          >
            Tagasi
          </button>
        </div>

      </div>
    </div>
  );
}
