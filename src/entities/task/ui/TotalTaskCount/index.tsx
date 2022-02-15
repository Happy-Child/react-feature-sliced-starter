import React from 'react';
import { Typography } from '@mui/material';

export const TotalTaskCount: React.FC = () => {
  const count = 14;

  return (
    <div>
      <Typography>
        Total tasks
        {'\n'}
        <strong>{count}</strong>
      </Typography>
    </div>
  );
};
