import React from 'react';
import '../styles/About.css';
import { Box, Container } from '@mui/system';
import About_Info from '../components/About_Info';

const About = () => {
    return(
        <Box className='boxStyling' id='aboutSection'>
            <Container className='containerStyles'>
                <h1 className='sectionTitle'>About Me</h1>
                <About_Info/>
            </Container>
        </Box>
    )
}


export default About;