import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0053C5", // azul escuro
    },
    secondary: {
      main: "#EFF6FF", // azul claro/ciano
    },
    error: {
      main: "#FF4C4C", // vermelho (botão limpar)
    },
    background: {
      default: "#F3F4F6", // cinza claro geral
      paper: "#FFFFFF", // fundo dos cards/forms
    },
    text: {
      primary: "#1F2937", // texto principal escuro
      secondary: "#6B7280", // texto secundário
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h6: { fontWeight: 600 },
    button: { textTransform: "none" }, // mantém texto dos botões normal
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: "#3B5CCC",
          "&:hover": {
            backgroundColor: "#2A4AA0",
          },
        },
        containedSecondary: {
          backgroundColor: "#5AA6FF",
          "&:hover": {
            backgroundColor: "#3D8EFF",
          },
        },
        containedError: {
          backgroundColor: "#FF4C4C",
          "&:hover": {
            backgroundColor: "#E03B3B",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
