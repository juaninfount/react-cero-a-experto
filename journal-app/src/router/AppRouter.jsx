import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes }    from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='auth/*' element={<AuthRoutes />} />  {/* Login y registro */}
            <Route path='/*'     element={<JournalRoutes />} />      {/* Journal App */}
        </Routes>
    );
}