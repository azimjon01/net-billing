import styled from "@emotion/styled";

export const RegisterContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
});

export const RegisterModal = styled.form({
  background: "#fff",
  borderRadius: 10,
  padding: 20,
  minWidth: 320,
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const RegisterTitle = styled.h3({
  margin: 0,
  fontSize: 18,
});

export const FileName = styled.div({
  fontSize: 12,
  coloro: "#333",
});

export const Actions = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
