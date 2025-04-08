import styled from "@emotion/styled";

export const PanelContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 4,
  alignItems: "center",
  borderTop: props.theme.colors.border,
  borderBottom: props.theme.colors.border,
  padding: "12px 5px",
}));

export const PanelHeader = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  border: props.theme.colors.border,
  borderRadius: 8,
  padding: 6,
  width: "100%",
  cursor: "pointer",
}));

export const IconLeft = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

export const IconTop = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 6,
});

export const Icon = styled.img({
  width: 20,
  height: 20,
});

export const Title = styled.h2<{ open: boolean }>((props) => ({
  display: props.open ? "block" : "none",
  fontWeight: 400,
  fontSize: 12,
  color: props.theme.colors.tertiary,
}));

interface ChevronProps {
  rotate?: number;
}

export const Chevron = styled.img<ChevronProps>(({ rotate = 0 }) => ({
  width: 18,
  height: 18,
  transform: `rotate(${rotate}deg)`,
  cursor: "pointer",
}));

export const RegisterButton = styled.button((props) => ({
  width: "100%",
  background: props.theme.colors.secondary,
  color: props.theme.colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: props.theme.colors.border,
  borderRadius: 8,
  padding: 6,
  gap: 4,
  cursor: "pointer",
}));

export const RegisterIcon = styled.img({
  width: 18,
  height: 18,
});

export const RegisterText = styled.p<{ open: boolean }>((props) => ({
  display: props.open ? "flex" : "none",
  color: "#000",
  fontWeight: 400,
  fontSize: 12,
}));
