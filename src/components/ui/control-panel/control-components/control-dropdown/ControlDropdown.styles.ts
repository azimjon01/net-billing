import styled from "@emotion/styled";

export const DropdownContainer = styled.div((props) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  border: "1px solid #fff",
  borderColor: props.theme.colors.border,
  borderRadius: 8,
  padding: 6,
  gap: 4,
}));

export const DropdownItem = styled.h3({
  fontSize: 12,
});
