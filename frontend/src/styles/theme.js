import { createTheme } from "@mui/material/styles";


const Theme = createTheme({
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            color: "#492078",
            fontSize: "100px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: "5000", // Change to string value
        },
        h3: {
            color: "#492078",
            fontSize: "20px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            fontWeight: "500", // Change to string value
        },
        body: {
            color: "#000000",
            fontSize: "14px",
        }
    },
    palette: {
        primary: {
            main: "#492078",
            contrastText: "#fff"
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: "url(/background.jpeg)",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100vw',
                    backgroundAttachment: 'fixed',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: "rgba(255, 255, 255, .4)", // color when focused
                    },
                    '&.Mui-focused .MuiOutlinedInput-input': {
                        color: "#492078", // Change the color of the text when focused
                    },
                },
            },
        },
    }
});

export default Theme;
