import { createTheme } from "@mui/material/styles";


const Theme = createTheme({

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
        // MuiBox: { // define styles for the Box component here
        //     styleOverrides: {
        //         root: { // styles applied to the root element
        //             background: "#000000",
        //         },
        //     },
        // },
    }
});

export default Theme;
