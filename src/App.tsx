import { ThemeProvider } from "@emotion/react";
import AppRoutes from "./routes";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
