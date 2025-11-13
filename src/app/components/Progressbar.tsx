"use client"
import React from 'react'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function Progressbar() {
  return (
    <Stack sx={{ width: '100%', color: 'red.500' }} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
  );
}

