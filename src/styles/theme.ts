export const lightTheme = {
  mode: "light",
  colors: {
    primary: "#191E36",
    secondary: "#5CCD70",
    purple: "#9747FF",
    red: "#FF4B55",
    background: "#FFFFFF",
    text: "#000000",
    border: "#E5E7E7",
  },
  font: {
    base: "'Inter', sans-serif",
    heading: "'Poppins',sans-serif",
  },
  spacing: {
    lg: "4px",
  },
  borderRadius: "50%",
};

export const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#191E36",
    secondary: "#5CCD70",
    purple: "#9747FF",
    red: "#FF4B55",
    background: "#000000",
    text: "#FFFFFF",
    border: "#fff",
  },
  font: {
    base: "'Inter', sans-serif",
    heading: "'Poppins',sans-serif",
  },
  spacing: {
    lg: "4px",
  },
  borderRadius: "50%",
};

export type ThemeType = typeof lightTheme;
