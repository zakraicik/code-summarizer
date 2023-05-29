import { CssBaseline, ThemeProvider } from "@mui/material";
import SummarizeScreen from "./screens/SummarizeScreen";
import Theme from "./styles/theme";
import BackgroundImage from "./components/BackgroundImage";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <BackgroundImage />
        <Box>
          <SummarizeScreen />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default App;
