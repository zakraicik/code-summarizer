import React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function LargeInputText({ value, onChange }) {
    return (
        <Box sx={{
            display: 'flex',
            width: "500px",
            backgroundColor: "rgba(255, 255, 255, .1)",
            boxShadow: "0px 0px 20px 5px rgba(51, 25, 79, .30)",

        }}>
            <TextField
                multiline
                rows={10}
                value={value}
                variant="outlined"
                fullWidth
                focused
                onChange={onChange}
                sx={{
                    flex: 1,
                }}
            />
        </Box>
    );
}


