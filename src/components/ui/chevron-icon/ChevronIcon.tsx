import { Icon } from "./ChevronIcon.styles";

interface ChevronIconProps {
  rotate?: number;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  src?: string;
}

export const ChevronIcon = ({
  rotate = 0,
  size = 16,
  color = "#999",
  width,
  height,
  src,
}: ChevronIconProps) => (
  <Icon
    rotate={rotate}
    size={size}
    color={color}
    width={width ?? size}
    height={height ?? size}
  >
    {src ? <img src={src} alt="chevron" /> : "⌄"}
  </Icon>
);
