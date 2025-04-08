import { useState } from "react";
import { ChevronIcon } from "../chevron-icon/ChevronIcon";
import ResponsibleToggle from "../responsible-toggle/ResponsibleToggle";
import {
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
  ChevronButton,
  DataContainer,
  DayCell,
  DayName,
  FilterContainer,
  Grid,
  WeekdayCell,
  WeekdayRow,
  WeekRow,
  Year,
  YearContainer,
  YearText,
} from "./Calendar.styles";
import { getCalendarWeeks } from "./Calendar.utils";
import EventDot from "./EventDot";
import { WEEKDAYS } from "./Calendar.constanta";

const Calendar = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const weeks = getCalendarWeeks(year, month);

  const prevMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((prev) => prev - 1);
  };

  const nextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear((prev) => prev + 1);
  };

  return (
    <>
      <CalendarContainer>
        <CalendarHeader>
          <CalendarTitle>Календарь</CalendarTitle>
          <FilterContainer>
            <YearContainer>
              <ChevronButton onClick={prevMonth} rotate={0}>
                <ChevronIcon
                  rotate={0}
                  src="/assets/logos/calendar/chevron-left.svg"
                />
              </ChevronButton>
              <Year>
                <YearText>
                  {new Date(year, month).toLocaleString("ru-Ru", {
                    month: "long",
                    year: "numeric",
                  })}
                </YearText>
              </Year>
              <ChevronButton onClick={nextMonth} rotate={180}>
                <ChevronIcon
                  rotate={0}
                  src="/assets/logos/calendar/chevron-left.svg"
                />
              </ChevronButton>
            </YearContainer>
            <ResponsibleToggle />
            <ResponsibleToggle label="Входящие" />
            <ResponsibleToggle label="Внутренние" />
          </FilterContainer>
        </CalendarHeader>
        <Grid>
          <WeekdayRow>
            {WEEKDAYS.map((day, idx) => (
              <WeekdayCell key={idx}>{day}</WeekdayCell>
            ))}
          </WeekdayRow>

          {weeks.map((week, wIdx) => (
            <WeekRow key={wIdx}>
              {week.map((day, dIdx) => (
                <DayCell
                  key={dIdx}
                  isToday={day.isToday}
                  dim={!day.isCurrentMonth}
                >
                  <DataContainer>
                    <div>{day.date}</div>
                    {day.isToday && <DayName>Сегодня</DayName>}
                  </DataContainer>
                  <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                    {day.events.map((ev, i) => (
                      <EventDot key={i} type={ev.type} />
                    ))}
                  </div>
                </DayCell>
              ))}
            </WeekRow>
          ))}
        </Grid>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
