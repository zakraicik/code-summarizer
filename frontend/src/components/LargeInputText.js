import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function LargeInputText() {
    return (
        <Box sx={{
            display: 'flex',
            width: "500px",
            backgroundColor: "rgba(255, 255, 255, 0.10)",

        }}>
            <TextField
                id="outlined-multiline-static"
                label="Code"
                multiline
                rows={10}
                defaultValue="Default Value"
                variant="outlined"
                fullWidth
                sx={{ flex: 1, }}
            />
        </Box>
    );
}


