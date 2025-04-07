import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const AcoordionContainer = styled.div({});

export const AccordionHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
});

export const AccordionTitle = styled.h2({
  fontSize: 12,
});

export const ItemList = styled.div({
  paddingLeft: 20,
  display: "flex",
  flexDirection: "column",
});

export const StyledLink = styled(Link)({
  color: "#aaa",
  padding: "6px 0",
  textDecoration: "none",
  "&:hover": { color: "#fff" },
});
