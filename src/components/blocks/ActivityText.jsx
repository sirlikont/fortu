// src/components/blocks/ActivityText.jsx
import BaseBlock from "./BaseBlock";
import { useState } from "react";

export default function ActivityText({ instruction, feedback, color = "green" }) {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleNext = () => setShowFeedback(true);

  return (
    <BaseBlock color={color}>
      <p className="mb-2">{instruction}</p>
      <textarea className="w-full border rounded p-2 mb-2" rows={3} />

      {!showFeedback && (
        <button className="button-small mb-2" onClick={handleNext}>
          Valmis!
        </button>
      )}

      {showFeedback && (
        <BaseBlock color="gray1">
          <p className="mt-2">{feedback}</p>
        </BaseBlock>
      )}
    </BaseBlock>
  );
}
