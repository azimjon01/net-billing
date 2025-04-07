import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const AcoordionContainer = styled.div({
  padding: "4px 3px",
});

export const AccordionHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  cursor: "pointer",
});

export const AcordionName = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 4,
});

export const AccordionTitle = styled.h2((props) => ({
  color: props.theme.colors.tertiary,
  fontSize: 10,
  fontWeight: 300,
}));

export const ItemList = styled.div({
  paddingLeft: 20,
  display: "flex",
  flexDirection: "column",
});

export const StyledLink = styled(Link)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  fontSize: 10,
  gap: 4,
  color: "#aaa",
  padding: "6px 0",
  textDecoration: "none",
  "&:hover": { color: "#fff" },
});
