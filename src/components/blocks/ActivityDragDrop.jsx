// src/components/blocks/ActivityDragDrop.jsx
import BaseBlock from "./BaseBlock";

export default function ActivityDragDrop({ instruction, color = "green" }) {
  return (
    <BaseBlock color={color}>
      <p>{instruction || "Drag & Drop Activity placeholder"}</p>
    </BaseBlock>
  );
}