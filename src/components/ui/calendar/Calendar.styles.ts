import styled from "@emotion/styled";

export const CalendarContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const CalendarHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
});

export const CalendarTitle = styled.h1((props) => ({
  fontSize: 20,
  fontWeight: 500,
  color: props.theme.colors.primary,
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
  padding: "8.3px 13px",
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
  gap: 8,
});
