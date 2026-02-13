function getCurrentDay() {
  const startDate = localStorage.getItem("startDate");
  if (!startDate) return 1;

  const start = new Date(startDate + "T00:00:00");
  const today = new Date();
  today.setHours(0,0,0,0);

  const diff = today - start;
  return Math.floor(diff / (1000*60*60*24)) + 1;
}
export default getCurrentDay;