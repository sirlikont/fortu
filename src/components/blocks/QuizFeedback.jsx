// src/components/blocks/QuizFeedback.jsx
export default function QuizFeedback({ feedback }) {
  // feedback on object {a, b, c, d}
  return (
    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
      <h2 className="font-bold mb-2">Tagasiside</h2>
      <ul className="list-disc list-inside">
        {Object.entries(feedback).map(([key, text]) => (
          <li key={key} className="mb-1">{text}</li>
        ))}
      </ul>
    </div>
  );
}
