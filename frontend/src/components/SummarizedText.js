import { TextField } from "@mui/material";
import { Box } from "@mui/material";

function SummarizedText({ value }) {
    return (
        <Box
            sx={{
                display: "flex",
                width: "500px",
                backgroundColor: "rgba(255, 255, 255, 0.40)",
                boxShadow: "0px 0px 20px 5px rgba(51, 25, 79, .30)",
            }}
        >
            <TextField
                multiline
                rows={10}
                fullWidth
                focused
                variant="outlined"
                value={value}
                InputProps={{
                    readOnly: true,
                }}
                sx={{
                    flex: 1,
                }}
            />
        </Box>
    );
}

export default SummarizedText;
