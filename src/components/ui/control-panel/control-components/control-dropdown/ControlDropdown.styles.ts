import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  padding: "8px 5px",
  gap: 12,
});

export const ItemContainer = styled(Link)<{ open: boolean }>((props) => ({
  width: "100%",
  display: "flex",
  justifyContent: props.open ? "start" : "center",
  alignItems: "center",
  gap: 4,
}));

export const DropdownItem = styled.p<{ open: boolean }>((props) => ({
  display: props.open ? "block" : "none",
  width: "100%",
  fontSize: 14,
  fontWeight: 400,
  color: "#fff",
}));
