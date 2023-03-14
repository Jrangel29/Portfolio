import React from 'react';
import '../styles/Projects.css';
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';
import Project_List from '../components/Project_List';

const Projects = () => {
    return(
        <Box className='boxStyling' sx={{backgroundColor: 'lightgray'}}>
            <Container className='containerStyles'>
                <h1 className='sectionTitle'>Projects</h1>
                <Project_List/>
            </Container>
        </Box>
    )
}


export default Projects;