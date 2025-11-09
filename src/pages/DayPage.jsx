import { useParams } from "react-router-dom";
import { useState } from "react";

import day1 from "../data/day1.json";
import day2 from "../data/day2.json";
import day3 from "../data/day3.json";

// plokikomponendid
import IntroBlock from "../components/blocks/IntroBlock";
import TheoryBlock from "../components/blocks/TheoryBlock";
import QuizABCD from "../components/blocks/QuizABCD";
import QuizTrueFalse from "../components/blocks/QuizTrueFalse";
import QuizDragDrop from "../components/blocks/QuizDragDrop";
import QuizFeedback from "../components/blocks/QuizFeedback";
import ActivityText from "../components/blocks/ActivityText";
import ActivityDragDrop from "../components/blocks/ActivityDragDrop";
import ActivityFeedback from "../components/blocks/ActivityFeedback";
import SummaryBlock from "../components/blocks/SummaryBlock";
import TeaserBlock from "../components/blocks/TeaserBlock";

const dayData = { 1: day1, 2: day2, 3: day3 };

export default function DayPage() {
  const { dayNumber } = useParams();
  const data = dayData[dayNumber];

  if (!data) return <div>Sellist päeva pole (veel) 🕒</div>;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentBlock = data.blocks[currentIndex];

  const goNext = () => setCurrentIndex((i) => Math.min(i + 1, data.blocks.length - 1));
  const goPrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));

  const renderBlock = () => {
    switch (currentBlock.type) {
      case "intro": return <IntroBlock {...currentBlock} />;
      case "theory": return <TheoryBlock {...currentBlock} />;
      case "quiz_abcd": return <QuizABCD {...currentBlock} />;
      case "quiz_dragdrop": return <QuizDragDrop {...currentBlock} />;
      case "quiz_truefalse": return <QuizTrueFalse {...currentBlock} />;
      case "quiz_feedback": return <QuizFeedback {...currentBlock} />;
      case "activity_text": return <ActivityText {...currentBlock} />;
      case "activity_dragdrop": return <ActivityDragDrop {...currentBlock} />;
      case "activity_feedback": return <ActivityFeedback {...currentBlock} />;
      case "summary": return <SummaryBlock {...currentBlock} />;
      case "teaser": return <TeaserBlock {...currentBlock} />;
      default: return <div>❓ Tundmatu plokk: {currentBlock.type}</div>;
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="font-bold text-xl mb-6">{data.title}</h1>

      {renderBlock()}

      <div className="flex justify-between mt-10">
        <button onClick={goPrev} disabled={currentIndex === 0}>← Tagasi</button>
        <button onClick={goNext} disabled={currentIndex === data.blocks.length - 1}>Edasi →</button>
      </div>
    </div>
  );
}