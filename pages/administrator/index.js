import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Listening Ear Safeguarding - Administrator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant='heading1'>Listening Ear Safeguarding - Administrator</Typography>
    </div>
  )
}
