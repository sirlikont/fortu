// src/components/blocks/ActivityDragDrop.jsx
export default function ActivityDragDrop({ instruction }) {
  return (
    <div className="bg-pink-50 p-4 rounded shadow mb-4">
      <p className="text-pink-900">{instruction || "Drag & Drop Activity placeholder"}</p>
    </div>
  );
}