import { CalendarDay, EventType } from "./Calendar.types";

export const getCalendarWeeks = (
  year: number,
  month: number,
): CalendarDay[][] => {
  const weeks: CalendarDay[][] = [];
  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1);
  const current = new Date(firstDayOfMonth);
  current.setDate(current.getDate() - ((current.getDay() + 6) % 7));

  const endDate = new Date(year, month + 1, 1);

  while (current < endDate || current.getDay() !== 1) {
    const week: CalendarDay[] = [];

    for (let i = 0; i < 7; i++) {
      week.push({
        date: current.getDate(),
        month: current.getMonth(),
        year: current.getFullYear(),
        isToday:
          current.getDate() === today.getDate() &&
          current.getMonth() === today.getMonth() &&
          current.getFullYear() === today.getFullYear(),
        isCurrentMonth: current.getMonth() === month,
        events: generateFakeEvents(current),
      });
      current.setDate(current.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
};

const generateFakeEvents = (date: Date): { type: EventType }[] => {
  const day = date.getDate();
  const result: { type: EventType }[] = [];
  if (day % 5 === 0) result.push({ type: "responsible" });
  if (day % 3 === 0) result.push({ type: "outgoing" });
  if (day % 7 === 0) result.push({ type: "responsible" });
  if (day % 2 === 0) result.push({ type: "responsible" });
  if (day % 4 === 0) result.push({ type: "outgoing" });
  if (day % 6 === 0) result.push({ type: "outgoing" });
  return result;
};
