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

export const DropdownItem = styled(Link)({
  fontSize: 14,
  fontWeight: 400,
  color: "#fff",
});
