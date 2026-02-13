import { useState } from "react";
import BaseBlock from "./BaseBlock";

export default function QuizSingleChoice({ title, description, questions, feedback, color = "green" }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, optionKey) => {
    if (!submitted) {
      setAnswers({ ...answers, [qIndex]: optionKey });
    }
  };

  const handleSubmit = () => setSubmitted(true);

  return (
    <BaseBlock color={color}>
      {title && <h3 className="font-bold mb-2">{title}</h3>}
      {description && <p className="mb-4">{description}</p>}

      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold mb-2">{q.q}</p>
          <div className="flex flex-col gap-2">
            {Object.entries(q.options).map(([key, val]) => {
              let bgClass = "bg-white";
              let borderClass = "border-gray-300";
              let textClass = "text-gray-900";

              if (submitted) {
                if (key === q.correct) {
                  bgClass = "bg-green-200";
                  borderClass = "border-green-600";
                  textClass = "text-green-900";
                } else if (answers[i] === key && key !== q.correct) {
                  bgClass = "bg-red-200";
                  borderClass = "border-red-600";
                  textClass = "text-red-900";
                }
              } else if (answers[i] === key) {
                bgClass = "bg-green-100";
                borderClass = "border-green-500";
                textClass = "text-green-900";
              }

              return (
                <button
                  key={key}
                  onClick={() => handleSelect(i, key)}
                  disabled={submitted}
                  className={`flex items-center gap-2 px-3 py-3 rounded border ${borderClass} ${bgClass} ${textClass} text-left`}
                >
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      answers[i] === key ? "bg-green-700 text-white" : "bg-white border-gray-400"
                    }`}
                  >
                    {answers[i] === key && "✓"}
                  </span>
                  <span>{key}) {val}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded shadow"
        >
          Valmis
        </button>
      )}

      {submitted && feedback && (
        <div className="mt-4 p-3 bg-green-50 text-green-900 rounded border-l-4 border-green-600">
          {feedback}
        </div>
      )}
    </BaseBlock>
  );
}
