"use clinet"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
const Loader = () => {
  return (

    <Stack sx={{ color: 'grey.500' }} spacing={8}>
      <CircularProgress color='secondary' size={100} />
    </Stack>
  )
}

export default Loader
