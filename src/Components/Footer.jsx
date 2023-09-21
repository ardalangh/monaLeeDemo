import React from 'react';
import {Box} from "@mui/material";

function Footer(props) {
    return (
        <Box
            sx={{
                alignItems: 'flex-end',
                padding: '1% 5%',
                backgroundColor: '#373844',
            }}
        >
            <img src="https://monalee.co/wp-content/themes/monalee-new/images/logo-color.svg" alt=""/>
        </Box>
    );
}

export default Footer;