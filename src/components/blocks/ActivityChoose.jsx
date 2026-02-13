// src/components/blocks/ActivityChoose.jsx
import { useState } from "react";

export default function ActivityChoose({ instruction, options, feedback }) {
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChange = (id) => {
    setSelected(id);
  };

  const handleSubmit = () => {
    if (selected !== null) {
      setShowFeedback(true);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow mb-4">
      <div className="mb-4">
        <p className="font-semibold">{instruction}</p>
        <div className="flex flex-col mt-2 gap-2">
          {options.map((option) => (
            <label key={option.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="choice"
                value={option.id}
                checked={selected === option.id}
                onChange={() => handleChange(option.id)}
                className="accent-green-700"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      {!showFeedback && (
        <button
          onClick={handleSubmit}
          className="button-small mb-2"
        >
          Valmis!
        </button>
      )}

      {showFeedback && selected !== null && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-700 rounded">
          <h2 className="font-bold mb-2">Tagasiside</h2>
          <p>{options.find((o) => o.id === selected)?.feedback}</p>
        </div>
      )}
    </div>
  );
}
