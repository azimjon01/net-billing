import styled from "@emotion/styled";

export const HeaderContainer = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px",
  background: props.theme.colors.primary,
}));

export const HeaderIconsContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
});

export const HeaderIconWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 4,
});

export const HeaderIcon = styled.img({
  width: 30,
  height: 30,
  borderRadius: 7,
});

export const ChevronContainer = styled.div({});

export const HeaderDownIcon = styled.img({
  width: 16,
  height: 16,
});

// Modal

export const ModalOverlay = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const ModalContent = styled.div((props) => ({
  position: "absolute",
  top: 60,
  right: 10,
  background: props.theme.colors.primary,
  color: props.theme.colors.tertiary,
  padding: "20px",
  borderRadius: 8,
  width: "250px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  zIndex: 100,
}));

export const CloseButton = styled.button({
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#ff4d4f",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": { backgroundColor: "#e41e1e" },
});
