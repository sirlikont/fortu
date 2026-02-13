// src/components/DayCard.jsx
import BaseBlock from "./blocks/BaseBlock.jsx";

export default function DayCard({ dayNumber, day, isOpen, onClick }) {
  const teaser = day.blocks?.find(b => b.type === "teaser")?.text;

  return (
    <div onClick={onClick} className="cursor-pointer">
      <BaseBlock color={isOpen ? "green" : "gray1"}>
        <h2 className="font-semibold text-lg">
          {dayNumber}. {day.title}
        </h2>

        {isOpen && teaser && <p className="mt-2 text-sm">{teaser}</p>}
        {!isOpen && <p className="mt-2 text-sm">Päev on veel lukus 🔒</p>}
      </BaseBlock>
    </div>
  );
}
