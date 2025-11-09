// src/utils/unlockLogic.js
import dayjs from "dayjs";

export function getUnlockedDays(startDate) {
  if (!startDate) return 0;

  const start = dayjs(startDate).startOf("day");
  const today = dayjs().startOf("day");

  const diff = today.diff(start, "day");
  return diff + 1; // esimene päev kohe avatud
}