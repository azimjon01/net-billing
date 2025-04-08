import styled from "@emotion/styled";

const sizeMap = {
  sm: { width: 30, height: 16, circle: 12 },
  md: { width: 36, height: 20, circle: 16 },
  lg: { width: 44, height: 24, circle: 20 },
};

const variantColors = {
  primary: "#5CCD70",
  secondary: "#007AFF",
  danger: "#FF3B30",
};

export const ToggleContainer = styled.div({
  display: "flex",
  alignItems: "center",
});

export const Label = styled.label<{ disabled?: boolean }>(({ disabled }) => ({
  display: "flex",
  alignItems: "center",
  cursor: disabled ? "not-allowed" : "pointer",
  color: disabled ? "#999" : "#2E3A59",
  fontSize: 14,
  gap: 8,
}));

export const HiddenCheckbox = styled.input({
  display: "none",
});

export const Switch = styled.span<{
  checked: boolean;
  disabled: boolean;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "danger";
}>(({ checked, disabled, size, variant }) => {
  const dims = sizeMap[size];
  const color = variantColors[variant];
  return {
    position: "relative",
    width: dims.width,
    height: dims.height,
    background: disabled ? "#ccc" : checked ? color : "#ddd",
    borderRadius: "999px",
    transition: "background-color 0.3s",
  };
});

export const Slider = styled.span<{
  checked: boolean;
  size: "sm" | "md" | "lg";
}>(({ checked, size }) => {
  const dims = sizeMap[size];
  return {
    position: "absolute",
    top: 2,
    left: checked ? dims.width - dims.circle - 2 : 2,
    width: dims.circle,
    height: dims.circle,
    backgroundColor: "#fff",
    borderRadius: "50%",
    transition: "left 0.3s",
  };
});

export const SliderTitle = styled.p((props) => ({
  fontSize: 13,
  fontWeight: 500,
  color: props.theme.colors.text,
}));
