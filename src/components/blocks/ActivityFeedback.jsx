// src/components/blocks/ActivityFeedback.jsx
import BaseBlock from "./BaseBlock";

export default function ActivityFeedback({ text }) {
  if (!text) return null;

  return (
    <div className="p-4 bg-gray-50 border-l-4 border-gray-600 rounded shadow mb-4">
      <p>{text}</p>
    </div>
  );
}
