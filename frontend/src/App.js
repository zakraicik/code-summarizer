

import { CssBaseline, ThemeProvider } from "@mui/material";
import SummarizeScreen from './screens/SummarizeScreen'
import Theme from "./themes/theme";
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BackgroundImage>
        <SummarizeScreen />
      </BackgroundImage>
    </ThemeProvider>
  );
}
export default App;
