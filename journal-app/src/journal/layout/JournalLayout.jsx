import React from 'react'
import { Box } from '@mui/material' 
import { NavBar, SideBar } from '../components';

const drawer = 240;
export const JournalLayout = ({children}) => {

    return (
        <Box sx={{display:'flex'}}  >

            <NavBar drawerWidth={drawer}></NavBar>
            <SideBar drawerWidth={drawer}></SideBar>
            <Box component='main' sx={{flexGrow: 1, p:3 }}>
                {children}
            </Box>
        </Box>
    );
}
