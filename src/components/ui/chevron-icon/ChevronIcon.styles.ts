import styled from "@emotion/styled";

interface IconProps {
  rotate: number;
  size: number;
  color: string;
  width: number;
  height: number;
  display: string;
}

export const Icon = styled.span<IconProps>(
  ({ rotate, size, color, width, height, display }) => ({
    fontSize: `${size}px`,
    width,
    height,
    color,
    display: display,
    transform: `rotate(${rotate}deg)`,
    cursor: "pointer",
    img: {
      width,
      height,
    },
  }),
);
