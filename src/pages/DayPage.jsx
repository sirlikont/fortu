import { useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";

import day1 from "../data/day1.json";
import day2 from "../data/day2.json";
import day3 from "../data/day3.json";

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

  const goNext = () =>
    setCurrentIndex((i) => Math.min(i + 1, data.blocks.length - 1));

  const goPrev = () =>
    setCurrentIndex((i) => Math.max(i - 1, 0));

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
  <div className="bg-gray-50 min-h-screen">
    <div className="pt-20 pb-10 px-4 max-w-md mx-auto">
      {/* Päeva pealkiri */}
      <h1 className="text-2xl font-bold text-emerald-800 mb-4 text-center">
        {dayNumber}. PÄEV: {data.title}
      </h1>

      {/* Progress bar kaardis Navbar'i all */}
      <div className="bg-white rounded-lg shadow p-2 mb-4">
        <div className="flex justify-between mb-1 text-sm text-gray-600">
          <span>Plokk {currentIndex + 1}</span>
          <span>/{data.blocks.length}</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-emerald-700 h-2 rounded"
            style={{ width: `${((currentIndex + 1) / data.blocks.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Plokk kaardis */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        {renderBlock()}
      </div>

      {/* Plokkude navigeerimine */}
      <div className="flex justify-between">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="button-small disabled:opacity-30"
        >
          ← Tagasi
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === data.blocks.length - 1}
          className="button-small disabled:opacity-30"
        >
          Edasi →
        </button>
      </div>
    </div>
  </div>
);
}