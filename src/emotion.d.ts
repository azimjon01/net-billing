import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mode: string;
    colors: {
      primary: string;
      secondary: string;
      purple: string;
      red: string;
      background: string;
      text: string;
      border: string;
    };
    font: {
      base: string;
      heading: string;
    };
    spacing: {
      lg: string;
    };
    borderRadius: string;
  }
}
