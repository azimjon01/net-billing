import styled from "@emotion/styled";

export const CalendarContainer = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const CalendarHeader = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  border: props.theme.borders.border,
}));

export const CalendarTitle = styled.h1((props) => ({
  fontSize: 20,
  fontWeight: 700,
  color: props.theme.colors.text,
}));

export const FilterContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
});

export const YearContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
});

interface CevronButtonProps {
  rotate?: number;
}

export const ChevronButton = styled.button(({ rotate }: CevronButtonProps) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "7px 10px",
  border: "none",
  transform: `rotate(${rotate}deg)`,
  borderRadius: "8px 0 0 8px",
}));

export const Year = styled.div({
  padding: "8.3px 8px",
  background: "#EDF1F4",
});

export const YearText = styled.p((props) => ({
  color: props.theme.colors.primary,
  fontWeight: 400,
  fontSize: 13,
}));

export const Grid = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  overflow: "hidden",
});

export const WeekdayRow = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
  gridTemplateRows: "1fr",
});

export const WeekdayCell = styled.div((props) => ({
  border: props.theme.borders.border,
  color: props.theme.colors.text,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontSize: 14,
  textAlign: "center",
}));

export const WeekRow = styled.div({
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
  gridTemplateRows: "1fr",
});

export const DayCell = styled.div<{ isToday: boolean; dim: boolean }>(
  (props) => ({
    backgroundColor: props.isToday ? "#F7FCFC" : props.theme.colors.background,
    opacity: props.dim ? 0.5 : 1,
    border: props.theme.borders.border,
    color: props.isToday ? "#9747FF" : props.theme.colors.text,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 14,
    textAlign: "left",
  }),
);

export const DataContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "start",
  gap: 4,
});

export const DayName = styled.p({
  fontSize: 10,
  fontWeight: 500,
});
