import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DASHBOARD_PATH, SIGN_IN_PATH } from '@/shared/constants';
import { SignInPage, DashboardPage } from '@/pages';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={DASHBOARD_PATH} element={<DashboardPage />} />
      <Route path={SIGN_IN_PATH} element={<SignInPage />} />
    </Routes>
  </BrowserRouter>
);
