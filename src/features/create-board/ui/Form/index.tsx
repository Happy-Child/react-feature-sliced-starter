import React from 'react';
import { Button, TextField } from '@mui/material';
import { Check } from '@mui/icons-material';
import styles from './styles.module.scss';

export const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<unknown>): void => {
    e.preventDefault();
    console.log('Submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField className={styles.field} size="small" />
      <Button variant="contained" type="submit"><Check /></Button>
    </form>
  );
};
