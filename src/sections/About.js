import React from 'react';
import '../styles/About.css';
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';
import profile from '../images/picture.jpg';

const About = () => {
    return(
        <Box sx={{width: '100vw'}}>
            <Container>
                <h1>About Me</h1>
                <Grid container>
                    <Grid item container xs={12} md={6}>
                        <Grid item xs={12}>
                            <p>Who am I</p>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={profile} className='profilePicture'/>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Hi</p>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} md={6}>
                        <Grid item xs={12}>
                            <p>Some of the technologies I've worked with</p>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            HTML5
                        </Grid>
                        <Grid item xs={6} md={4}>
                            CSS3
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Bootstrap
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Javascript
                        </Grid>
                        <Grid item xs={6} md={4}>
                            React.JS
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Redux
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Express.JS
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Firebase
                        </Grid>
                        <Grid item xs={6} md={4}>
                            MySQL
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


export default About;