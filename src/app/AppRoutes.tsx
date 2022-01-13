import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignInPage, DashboardPage } from '@/pages';
import { ROUTES_PATHS } from '@/shared/config';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES_PATHS.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES_PATHS.SIGN_IN} element={<SignInPage />} />
    </Routes>
  </BrowserRouter>
);
