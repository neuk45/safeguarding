import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Typography, TextField, Box, Button} from '@mui/material'
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();

  return (
    <div className={`${styles.container} your-details`}>
      <Head>
        <title>Your Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant='h1' align="center" className={styles.heading}>Your Details</Typography>
      <Box component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch', textAlign: 'left' },}} noValidate autoComplete="on">
        <TextField label="Name" variant="outlined" disabled defaultValue="Dr. John Smith"/>
        <TextField label="Phone Number" variant="outlined" disabled defaultValue="0123456789"/>
        <TextField label="Email" variant="outlined" disabled defaultValue="email@email.com"/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="success" href="/therapist/your-details">Confirm</Button>
        <Button variant="contained" color="primary" href="/therapist/your-details">Edit</Button>
      </Box>    
    </div>
  )
}
