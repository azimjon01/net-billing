import { Icon } from "./ChevronIcon.styles";

interface ChevronIconProps {
  rotate?: number;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  src?: string;
  display?: string;
}

export const ChevronIcon = ({
  rotate = 0,
  size = 16,
  color = "#999",
  width = 18,
  height = 18,
  src,
  display = "inline-block",
}: ChevronIconProps) => (
  <Icon
    rotate={rotate}
    size={size}
    color={color}
    width={width}
    height={height}
    display={display}
  >
    {src ? <img src={src} alt="chevron" /> : "⌄"}
  </Icon>
);
