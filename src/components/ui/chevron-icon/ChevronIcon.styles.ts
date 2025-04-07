import styled from "@emotion/styled";

interface IconProps {
  rotate?: number;
  size?: number;
  color?: string;
  width?: number;
  height?: number;
}

export const Icon = styled.span<IconProps>(
  ({ rotate, size, color, width, height }) => ({
    display: "inline-block",
    fontSize: `${size}px`,
    width,
    height,
    color,
    transform: `rotate(${rotate}deg)`,
    cursor: "pointer",
    img: {
      width: "100%",
      height: "100%",
    },
  }),
);
