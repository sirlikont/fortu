// src/components/blocks/QuizABCD.jsx
import { useState } from "react";
import BaseBlock from "./BaseBlock";

export default function QuizABCD({ questions, feedback, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [computedFeedback, setComputedFeedback] = useState([]);

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  const handleSubmit = () => {
    const counts = { a: 0, b: 0, c: 0, d: 0 };
    Object.values(answers).forEach((v) => counts[v]++);
    const maxCount = Math.max(...Object.values(counts));
    const mostChosen = Object.keys(counts).filter((k) => counts[k] === maxCount);
    
    const fb = mostChosen.flatMap((key) => feedback[key] ? [feedback[key]] : []);
    setComputedFeedback(fb);
    setShowFeedback(true);

    if (onComplete) onComplete(answers);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-4">
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.q}</p>
          <div className="flex flex-col mt-2 gap-2">
            {Object.entries(q.options).map(([key, option]) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={key}
                  checked={answers[i] === key}
                  onChange={() => handleChange(i, key)}
                  className="accent-green-700"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      {!showFeedback && (
        <button
          onClick={handleSubmit}
          className="button-small mb-2"
        >
          Valmis!
        </button>
      )}

      {showFeedback && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-700 rounded">
          <h2 className="font-bold mb-2">Tagasiside</h2>
          <ul className="list-disc list-inside">
            {computedFeedback.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
