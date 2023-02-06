import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   palette: {
      primary: {
         main: "#474E68",
         light: "#474E68",
         dark: "#000",
         contrastText: "#fff",
      },
      bg: {
         main: "#BDCDD6",
         contrastText: "#fff",
      },
   },
});
export default theme;
