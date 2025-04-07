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
  position: "relative",
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

export const InputLabel = styled.label({
  display: "inline-block",
  padding: "10px 16px",
  backgroundColor: "#fff",
  border: "1px solid #000",
  color: "#000",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "14px",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: "#4338ca",
  },
});

export const HiddenInput = styled.input({
  display: "none",
});

export const FileName = styled.div({
  fontSize: 12,
  coloro: "#333",
});

export const Actions = styled.div({
  display: "flex",
  justifyContent: "space-between",
});

export const Exit = styled.button({
  position: "absolute",
  top: 10,
  right: 5,
  background: "red",
  border: "none",
  padding: "3px 5px",
  borderRadius: 5,
  cursor: "pointer",
});

export const Send = styled.button({
  width: "100%",
  border: "none",
  display: "inline-block",
  padding: "10px 16px",
  backgroundColor: "#4f46e5",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "14px",
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: "#4338ca",
  },
});
