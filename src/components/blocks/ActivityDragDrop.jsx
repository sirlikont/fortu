import { useState } from "react";
import BaseBlock from "./BaseBlock";

export default function ActivityDragDrop({
  title,
  instruction,
  columns = [],
  items = [],
  reflection = [],
  color = "green",
}) {
  const [state, setState] = useState(
    items.map((text, index) => ({
      id: index.toString(),
      text,
      column: "pool",
    }))
  );

  const [isFinished, setIsFinished] = useState(false);

  function onDragStart(e, id) {
    if (isFinished) return;
    e.dataTransfer.setData("text/plain", id);
  }

  function allowDrop(e) {
    if (!isFinished) e.preventDefault();
  }

  function onDrop(e, column) {
    if (isFinished) return;

    const id = e.dataTransfer.getData("text/plain");
    setState(prev =>
      prev.map(item =>
        item.id === id ? { ...item, column } : item
      )
    );
  }

  function renderItem(item) {
    return (
      <div
        key={item.id}
        draggable={!isFinished}
        onDragStart={(e) => onDragStart(e, item.id)}
        className={`p-2 mb-2 bg-white rounded shadow text-sm ${
          isFinished ? "cursor-default opacity-80" : "cursor-move"
        }`}
      >
        {item.text}
      </div>
    );
  }

  const allPlaced = state.every(item => item.column !== "pool");

  return (
    <BaseBlock color={color}>
      {title && <h3 className="font-semibold mb-3">{title}</h3>}
      {instruction && <p className="mb-4 text-sm">{instruction}</p>}

      {/* Algne ala */}
      {!isFinished && (
        <div
          className="mb-6 p-3 bg-gray-100 rounded"
          onDrop={(e) => onDrop(e, "pool")}
          onDragOver={allowDrop}
        >
          {state.filter(i => i.column === "pool").map(renderItem)}
        </div>
      )}

      {/* Tulpade ala */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {columns.map(col => (
          <div
            key={col.id}
            onDrop={(e) => onDrop(e, col.id)}
            onDragOver={allowDrop}
            className="min-h-[140px] p-3 rounded border bg-gray-50"
          >
            <h4 className="font-medium mb-2">{col.title}</h4>
            {state.filter(i => i.column === col.id).map(renderItem)}
          </div>
        ))}
      </div>

      {/* Valmis nupp */}
      {!isFinished && (
        <button
          disabled={!allPlaced}
          onClick={() => setIsFinished(true)}
          className={`button-small ${
            !allPlaced ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          Valmis
        </button>
      )}

      {/* Refleksioon */}
      {isFinished && reflection.length > 0 && (
        <div className="mt-6 text-sm space-y-2">
          <p className="font-medium">💬 Refleksioon:</p>
          {reflection.map((q, i) => (
            <p key={i}>{q}</p>
          ))}
        </div>
      )}
    </BaseBlock>
  );
}
