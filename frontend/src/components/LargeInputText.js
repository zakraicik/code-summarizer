import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function LargeInputText({ value, onChange }) {
    return (
        <Box sx={{
            display: 'flex',
            width: "500px",
            backgroundColor: "rgba(255, 255, 255, .1)",
        }}>
            <TextField
                id="outlined-multiline-static"
                label="Code"
                multiline
                rows={10}
                value={value}
                variant="outlined"
                fullWidth
                onChange={onChange}
                sx={{
                    flex: 1,
                }}
            />
        </Box>
    );
}


