import React from 'react';
import '../styles/Header.css';
import { Box, Container } from '@mui/system';
import { Typography } from '@mui/material';

const Header = () => {
    return(
        <Box sx={{width: '100vw', backgroundColor: 'aqua', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' ,overflow: 'hidden'}}>
            <Container className='contentAlignment'>
                <p className='welcomeText'>Welcome!</p>
                <p className='nameText'>I'm João.</p>
                <p className='bottomExplainer'>I'm a web developer with experience creating web applications. Most of my experience comes working as a front-end developer, although I've also worked with back-end development on various ocasions.</p>
            </Container>
        </Box>
    )
}


export default Header;