import styled from "@emotion/styled";

export const PanelContainer = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: 4,
  alignItems: "center",
  borderTop: "1px solid #fff",
  borderBottom: "1px solid #fff",
  borderColor: props.theme.colors.border,
  padding: "12px 5px",
}));

export const PanelHeader = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderColor: props.theme.colors.border,
  border: "1px solid #fff",
  borderRadius: 8,
  padding: 6,
  width: "100%",
  cursor: "pointer",
}));

export const IconLeft = styled.div({
  display: "flex",
  gap: 6,
  justifyContent: "space-between",
  alignItems: "center",
});

export const Icon = styled.img({
  width: 20,
  height: 20,
});

export const Title = styled.h2({
  fontWeight: 400,
  fontSize: 12,
});

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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
  padding: 6,
  gap: 4,
  cursor: "pointer",
}));

export const RegisterIcon = styled.img({
  width: 18,
  height: 18,
});

export const RegisterText = styled.p({
  color: "#000",
  fontWeight: 400,
  fontSize: 12,
});
