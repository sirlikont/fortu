// src/components/blocks/QuizTrueFalse.jsx
import { useState } from "react";

export default function QuizTrueFalse({ questions }) {
  const [answers, setAnswers] = useState({});

  const handleChange = (qIndex, value) => {
    setAnswers({ ...answers, [qIndex]: value });
  };

  return (
    <div className="bg-purple-50 p-4 rounded shadow mb-4">
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.q}</p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => handleChange(i, true)}
              className={`px-3 py-1 rounded ${
                answers[i] === true ? "bg-purple-600 text-white" : "bg-white border"
              }`}
            >
              True
            </button>
            <button
              onClick={() => handleChange(i, false)}
              className={`px-3 py-1 rounded ${
                answers[i] === false ? "bg-purple-600 text-white" : "bg-white border"
              }`}
            >
              False
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}