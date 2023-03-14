import React, {useState} from 'react';
import { Box, Container } from '@mui/system';
import { AppBar, Toolbar, Typography, Menu, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleCloseNavMenu = () => {
        setOpenMenu(false);
    };


    return(
        <AppBar sx={{position: 'fixed'}}>
            <Container>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center'}}>
                        <Typography sx={{mx: 2}}>About</Typography>
                        <Typography sx={{mx: 2}}>Projects</Typography>
                        <Typography sx={{mx: 2}}>Contact</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' }, justifyContent: 'left'}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setOpenMenu(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={openMenu}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            open={openMenu}
                            onClose={handleCloseNavMenu}
                            sx={{
                              display: { xs: 'block', sm: 'none' },
                            }}
                        >
                            <Typography sx={{my: 2, mx: 2}} onClick={handleCloseNavMenu}>About</Typography>
                            <Typography sx={{my: 2, mx: 2}} onClick={handleCloseNavMenu}>Projects</Typography>
                            <Typography sx={{my: 2, mx: 2}} onClick={handleCloseNavMenu}>Contact</Typography>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Navbar;