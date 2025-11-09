// src/components/blocks/TeaserBlock.jsx
export default function TeaserBlock({ text }) {
  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded shadow mb-4">
      <p className="text-orange-900 italic">{text}</p>
    </div>
  );
}