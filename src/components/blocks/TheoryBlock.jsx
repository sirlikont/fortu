// src/components/blocks/TheoryBlock.jsx
export default function TheoryBlock({ text }) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow mb-4">
      <p className="text-yellow-900">{text}</p>
    </div>
  );
}