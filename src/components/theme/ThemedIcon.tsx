import { useTheme } from "@emotion/react";
import { ReactNode } from "react";

type ThemedIconProps = {
  light: ReactNode;
  dark: ReactNode;
};

const ThemedIcon = ({ light, dark }: ThemedIconProps) => {
  const theme = useTheme();
  return <>{theme.mode === "light" ? light : dark}</>;
};

export default ThemedIcon;
