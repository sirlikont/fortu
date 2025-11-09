// src/components/blocks/QuizDragDrop.jsx
export default function QuizDragDrop({ text }) {
  return (
    <div className="bg-pink-50 p-4 rounded shadow mb-4">
      <p className="text-pink-900">{text || "Drag & Drop Quiz placeholder"}</p>
    </div>
  );
}