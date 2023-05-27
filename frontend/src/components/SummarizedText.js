import { TextField } from '@mui/material';
import { Box } from '@mui/material';

function SummarizedText(props) {
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
                variant="outlined"
                value={props.text}
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