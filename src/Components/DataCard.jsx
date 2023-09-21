import React from 'react';
import {Box, Card, Chip, Grid, Typography} from "@mui/material";
import home from '../home.png'
import VisualizerBox from "./VisualizerBox";
import BusinessIcon from '@mui/icons-material/Business';
import PowerInputIcon from '@mui/icons-material/PowerInput';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
function DataCard(props) {
    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <Card
                    className="dataCard"
                    sx={{
                        height: '70%',
                        borderRadius: '15px',
                        padding: '3%',
                        display: 'flex',
                        flexDirection: 'column',
                        '@media (min-width: 850px)': {
                            flexDirection: 'row', // Row direction for medium and large screens
                            justifyContent: 'center',
                            height: '500px',
                        },
                        alignItems: 'center',
                        gap: '2%',
                    }}
                    variant="outlined"
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                alignItems: 'start',
                            }}
                        >
                            <Chip icon={<BusinessIcon />} label="2966 Pilar Ridge Drive, Bay Point, CA" />
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                }}
                            >
                                <Chip icon={<SolarPowerIcon />} label="Hanwha QCell" variant="outlined" />
                                <Chip icon={<PowerInputIcon />} label="Enphase IQA" variant="outlined" />
                            </Box>
                            <img src={home} alt="Home" style={{ maxWidth: '100%', height: 'auto' }} />

                        </Box>

                    </Box>


                    <VisualizerBox />
                </Card>
            </Grid>
        </Grid>
    );
}

export default DataCard;