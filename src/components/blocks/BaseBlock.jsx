// src/components/blocks/BaseBlock.jsx

export default function BaseBlock({ children, color = "green" }) {
  const colorMap = {
    green: { bg: "bg-green-50", border: "border-l-4 border-green-600", text: "text-green-900" },
    gray1:  { bg: "bg-gray-50", border: "border-l-4 border-gray-400", text: "text-gray-900" },
    gray2:  { bg: "bg-gray-100", border: "border-l-4 border-gray-500", text: "text-gray-950" },
    gray3:  { bg: "bg-gray-200", border: "border-l-4 border-gray-600", text: "text-gray-950" }
  };

  const { bg, border, text } = colorMap[color] || colorMap.green;

  return (
    <div className={`${bg} ${border} p-4 rounded shadow mb-4`}>
      <div className={`${text}`}>{children}</div>
    </div>
  );
}
