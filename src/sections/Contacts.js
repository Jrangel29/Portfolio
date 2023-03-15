import React from 'react';
import '../styles/Contacts.css';
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';

const Contacts = () => {
    return(
        <Box className='boxStyling' id='ContactSection'>
            <Container className='containerStyles'>
                <h1 className='sectionTitle'>Contacts</h1>
                <Grid container spacing={1} justifyContent='center'>
                    <Grid item container xs={12} md={6} spacing={1} justifyContent='center'>
                        <Grid item xs={12} lg={6}>
                            <h3>You can email me at:</h3>
                            <p>Jrangel925@gmail.com</p>
                        </Grid>
                        <Grid item container xs={12} lg={6} justifyContent='center'>
                            <Grid item xs={12}>
                                <h3>Or find me on:</h3>
                            </Grid>
                            <Grid item xs={3} sm={2}>
                                <i class="fab fa-facebook socialMedia"></i>
                            </Grid>
                            <Grid item xs={3} sm={2}>
                                <i class="fab fa-instagram socialMedia"></i>
                            </Grid>
                            <Grid item xs={3} sm={2}>
                                <i class="fab fa-linkedin socialMedia"></i>
                            </Grid>
                            <Grid item xs={3} sm={2}>
                                <i class="fab fa-github socialMedia"></i>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}


export default Contacts;