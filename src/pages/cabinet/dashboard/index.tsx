import React from 'react';
import { Form } from '@/features/create-board';
import { TotalTaskCount } from '@/entities/task';
import styles from './styles.module.scss';

export const DashboardPage: React.FC = () => (
  <div className={styles.root}>
    <div className={styles.topPanel}>
      <Form />
      <TotalTaskCount />
    </div>
    <main>
      <h1>todo</h1>
    </main>
  </div>
);
