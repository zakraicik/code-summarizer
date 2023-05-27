import LargeInputText from "../components/LargeInputText";
import SummarizedText from "../components/SummarizedText"
import { Box, Typography } from "@mui/material";
import ShimmerButton from "../components/ShimmerButton";

function SummarizeScreen() {
    return (
        <Box display="flex" alignItems="flex-start">
            <Box mr={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <LargeInputText />
                <Box mt={1}>
                    <ShimmerButton>
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.primary.contrastText,
                            }}
                        >
                            Summarize
                        </Typography>
                    </ShimmerButton>
                </Box>
            </Box>
            <Box flexGrow={1} >
                <SummarizedText />
            </Box>
        </Box>
    );
}

export default SummarizeScreen;