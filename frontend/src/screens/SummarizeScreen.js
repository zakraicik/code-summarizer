import LargeInputText from "../components/LargeInputText";
import SummarizedText from "../components/SummarizedText"
import { Box } from "@mui/material";

function SummarizeScreen() {
    return (
        <Box display="flex">
            <Box flexGrow={1} mr={4}>
                <LargeInputText />
            </Box>
            <SummarizedText />
        </Box>
    );
}

export default SummarizeScreen;