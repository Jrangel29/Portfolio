import React from 'react';
import '../styles/Contacts.css';
import { Box, Container } from '@mui/system';
import { Grid } from '@mui/material';

const Contacts = () => {
    return(
        <Box className='boxStyling'>
            <Container className='containerStyles'>
                <h1 className='sectionTitle'>Contacts</h1>
                <Grid container spacing={1} justifyContent='center'>
                    <Grid item container xs={12} sm={4} spacing={1} justifyContent='center'>
                        <Grid item xs={12} sm={4}>
                            <h2>You can email me at:</h2>
                            <p>Jrangel925@gmail.com</p>
                        </Grid>
                        <Grid item xs={12}>
                            <h2>Or find me on:</h2>
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
            </Container>
        </Box>
    )
}


export default Contacts;