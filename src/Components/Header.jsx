import React from 'react';
import {Box, IconButton} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
function Header(props) {
    return (
        <Box
            sx={{
                padding: '2%',
                backgroundColor: '#FFF2E8',
                maxHeight: '100px',
                display: 'flex',
                justifyContent: 'space-between',

            }}
        >
            <img src="https://monalee.co/wp-content/themes/monalee-new/images/monalee-gray.svg" alt="Mona Lee Solar"/>

            <IconButton aria-label="delete" size="large">
                <HomeIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
}

export default Header;