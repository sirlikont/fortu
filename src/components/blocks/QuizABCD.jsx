// src/components/blocks/QuizABCD.jsx
import { useState } from "react";

export default function QuizABCD({ questions }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  return (
    <div className="bg-green-50 p-4 rounded shadow mb-4">
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.q}</p>
          <div className="flex flex-col mt-2">
            {Object.entries(q.options).map(([key, option]) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={key}
                  checked={answers[i] === key}
                  onChange={() => handleChange(i, key)}
                  className="accent-green-600"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}