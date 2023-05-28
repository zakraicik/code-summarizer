import { TextField } from '@mui/material';
import { Box } from '@mui/material';

function SummarizedText({ value }) {
    return (
        <Box sx={{
            display: 'flex',
            width: "500px",
            backgroundColor: "rgba(255, 255, 255, 0.10)",

        }}>
            <TextField
                label="Summary"
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
                    flex: 1
                }}
            />
        </Box>
    );
}

export default SummarizedText;