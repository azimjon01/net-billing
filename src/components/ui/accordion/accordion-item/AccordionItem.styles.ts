import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ContainerScroll = styled.div({});

export const AcoordionContainer = styled.div({
  padding: "8px 5px",
});

export const AccordionHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  cursor: "pointer",
});

export const AcordionName = styled.div<{ open: boolean }>((props) => ({
  width: "100%",
  display: "flex",
  justifyContent: props.open ? "start" : "center",
  alignItems: "center",
  gap: 4,
}));

export const AccordionTitle = styled.h2<{ open: boolean }>((props) => ({
  display: props.open ? "block" : "none",
  color: props.theme.colors.tertiary,
  fontSize: 14,
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
  fontSize: 14,
  gap: 4,
  color: "#aaa",
  padding: "6px 0",
  textDecoration: "none",
  "&:hover": { color: "#fff" },
});
