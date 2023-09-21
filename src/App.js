import './App.css';
import React, {useEffect, useState} from "react";
import {Application, Graphics, Text} from "pixi.js";
import VisualizerBox from "./Components/VisualizerBox";
import {Box, Typography} from "@mui/material";
import Header from "./Components/Header";
import {Folder} from "@mui/icons-material";
import Footer from "./Components/Footer";
import DataCard from "./Components/DataCard";

function App() {
    const [hovered, setHovered] = useState(false);
    const [tooltipContent, setTooltipContent] = useState('');




    return (
        <>
            <Box
                sx={{
                    padding: '0 10%',
                    display: 'flex',
                    height: "100%", // "100vh
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginBottom: '10%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                    }}
                >
                    <Header/>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '10%',
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                fontFamily: 'acumin-pro, sans-serif',
                                '@media (max-width: 450px)': {
                                    fontSize: '37px',
                                    textAlign: 'center',
                                },
                            }}
                        >
                            Your Solar Health
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontFamily: 'acumin-pro, sans-serif',
                                '@media (max-width: 450px)': {
                                    fontSize: '18px',
                                    textAlign: 'center',
                                },
                                marginBottom: '5%',
                            }}
                        >
                            Check out your PV Conversion Efficiency of your solar panels for&nbsp;
                            <span className='green'>
                             2966 Pilar Ridge Drive, Bay Point, CA
                        </span>
                        </Typography>


                        <DataCard/>
                    </Box>

                </Box>

            </Box>

            <Footer/>
        </>

    );
}

export default App;
