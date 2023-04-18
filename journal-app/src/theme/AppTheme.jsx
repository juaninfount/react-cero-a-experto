import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { purpleTheme } from './purpleTheme';

export const AppTheme = ({children}) => {

    return (
        <div>
            <ThemeProvider theme={purpleTheme}>
                <CssBaseline />

                {children}
            </ThemeProvider>

        </div>
    );
};
