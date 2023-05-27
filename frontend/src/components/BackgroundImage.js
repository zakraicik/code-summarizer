import React from 'react';
import { Box } from '@mui/material';

export default function BackgroundImage() {
    return (
        <Box
            sx={{
                position: 'fixed',
                backgroundImage: "url(/background.jpg)",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
            }}
        />
    );
}
