import React from 'react';
import {Box, Grid, Tooltip, Typography} from "@mui/material";
import chroma from 'chroma-js';

function VisualizerBox(props) {

    const mapping = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 5, 34, 16, 0, 0, 0, 0, 0],
        [0, 0, 0, 35, 25, 45, 34, 0, 0, 0],
        [0, 0, 0, 34, 48, 50, 21, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]


    // Create an array to represent the grid of boxes
    const gridItems = Array.from({length: 10}, (_, row) =>
        Array.from({length: 10}, (_, col) => ({row, col}))
    ).flat();
    const f = chroma.scale(['red', 'yellow', 'green']);
    return (
        <Box
            sx={{
                width: '320px',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    fontWeight: 'bold',
                    }}
            >
                PV Conversion Efficiency %
            </Typography>
            <Grid container spacing={0}>
                {gridItems.map(({row, col}, index) => (
                    <Grid item key={index}>
                        {
                            (mapping[row][col] > 0) ? (
                                    <Tooltip title={`${mapping[row][col]}%`} arrow>
                                        <Box
                                            width={30}
                                            height={30}
                                            border={1}
                                            borderColor="grey.100"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            bgcolor="background.paper"
                                            sx={{
                                                cursor: 'pointer',
                                                backgroundColor: mapping[row][col] > 0 ? f(mapping[row][col] / 50).toString() : 'white',
                                            }}
                                        >
                                        </Box>
                                    </Tooltip>
                                ) :
                                <Box
                                    width={30}
                                    height={30}
                                    border={1}
                                    borderColor="grey.100"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    bgcolor="background.paper"
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: mapping[row][col] > 0 ? f(mapping[row][col] / 50).toString() : 'white',
                                    }}
                                >
                                </Box>

                        }

                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default VisualizerBox;