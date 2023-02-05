import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: "#0E5E6F",
         light: "#474E68",
         dark: "#000",
         contrastText: "#fff",
      },
      bg: {
         main: "#474E68",
         contrastText: "#fff",
      },
   },
});
export default theme;
