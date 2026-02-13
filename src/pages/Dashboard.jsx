import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import day1 from "../data/day1.json";
import day2 from "../data/day2.json";
import day3 from "../data/day3.json";
import day4 from "../data/day4.json";

import BaseBlock from "../components/blocks/BaseBlock.jsx";
import DayCard from "../components/DayCard.jsx"; // uus komponent

const allDays = { 1: day1, 2: day2, 3: day3, 4: day4 };

export default function Dashboard() {
  const navigate = useNavigate();
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    const startDate = localStorage.getItem("startDate");
    if (!startDate) return;

    const start = new Date(startDate + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const msDiff = today - start;
    setDaysPassed(Math.floor(msDiff / (1000 * 60 * 60 * 24)) + 1);
  }, []);

  const handleClickDay = (dayNumber) => {
    if (dayNumber <= daysPassed) navigate(`/day/${dayNumber}`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <BaseBlock color="green">
        <h1 className="text-2xl font-bold text-center">
          Minu rahatarkuse teekond
        </h1>
      </BaseBlock>

      {Object.keys(allDays).map(key => {
        const dayNumber = Number(key);
        const day = allDays[dayNumber];
        if (!day) return null;

        const isOpen = dayNumber <= daysPassed;

        return (
          <DayCard
            key={dayNumber}
            dayNumber={dayNumber}
            day={day}
            isOpen={isOpen}
            onClick={() => handleClickDay(dayNumber)}
          />
        );
      })}
    </div>
  );
}
