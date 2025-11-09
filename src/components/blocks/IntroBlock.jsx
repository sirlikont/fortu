// src/components/blocks/IntroBlock.jsx
export default function IntroBlock({ text }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow mb-4">
      <p className="text-blue-900">{text}</p>
    </div>
  );
}