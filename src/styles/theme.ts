import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          maxWidth: "1440px",
          "@media (min-width: 1440px)": {
            maxWidth: "1440px",
          },
          "@media (max-width: 1440px)": {
            maxWidth: "100%",
          },
        },
      },
    },
  },
});

export default theme;
