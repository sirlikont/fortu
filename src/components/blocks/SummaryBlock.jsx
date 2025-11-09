// src/components/blocks/SummaryBlock.jsx
export default function SummaryBlock({ text }) {
  return (
    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded shadow mb-4">
      <p className="text-indigo-900 font-semibold">{text}</p>
    </div>
  );
}