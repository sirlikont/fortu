// src/components/blocks/ActivityText.jsx
export default function ActivityText({ instruction, placeholder }) {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <p className="mb-2 font-medium">{instruction}</p>
      <textarea
        className="w-full border rounded p-2"
        placeholder={placeholder}
      />
    </div>
  );
}