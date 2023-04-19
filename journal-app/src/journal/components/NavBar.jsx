import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Grid } from '@mui/material'
import React from 'react';

export const NavBar = ({ drawer = 240 }) => {

    return (
        <AppBar position='fixed' sx={{
            width: { sm: `calc(100%-${drawer})px` },
            ml: { sm: `${drawer}px` }
        }}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6' noWrap component='div'>Journal App</Typography>
                    <IconButton color='error'>
                        <LogoutOutlined></LogoutOutlined>
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}