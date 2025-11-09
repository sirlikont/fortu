// src/components/blocks/ActivityFeedback.jsx
export default function ActivityFeedback({ text }) {
  return (
    <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded shadow mb-4">
      <p className="text-gray-900">{text}</p>
    </div>
  );
}