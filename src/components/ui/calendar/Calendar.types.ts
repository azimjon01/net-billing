export type EventType = "responsible" | "outgoing" | "internal";

export interface CalendarDay {
  date: number;
  month: number;
  year: number;
  isToday: boolean;
  isCurrentMonth: boolean;
  events: { type: EventType }[];
}
