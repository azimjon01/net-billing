export const lightTheme = {
  mode: "light",
  colors: {
    primary: "#191E36",
    secondary: "#5CCD70",
    tertiary: "#F7FCFC",
    purple: "#9747FF",
    red: "#FF4B55",
    background: "#FFFFFF",
    text: "#000000",
    border: "1px solid #343F5B",
  },
  font: {
    base: "'Inter', sans-serif",
    heading: "'Poppins',sans-serif",
  },
  spacing: {
    lg: "4px",
  },
  borders: {
    border: "1px solid #E5E7E7",
  },
  borderRadius: "50%",
};

export const darkTheme = {
  mode: "dark",
  colors: {
    primary: "#191E36",
    secondary: "#5CCD70",
    tertiary: "#F7FCFC",
    purple: "#9747FF",
    red: "#FF4B55",
    background: "#191E36",
    text: "#F7FCFC",
    border: "1px solid #343F5B",
  },
  font: {
    base: "'Inter', sans-serif",
    heading: "'Poppins',sans-serif",
  },
  spacing: {
    lg: "4px",
  },
  borders: {
    border: "1px solid #343F5B",
  },
  borderRadius: "50%",
};

export type ThemeType = typeof lightTheme;
