import { Container } from '@mui/material'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Container maxWidth="md">
      <Head>
        <link rel="stylesheet" href="https://atlas.microsoft.com/sdk/javascript/mapcontrol/3/atlas.min.css" type="text/css" />
      </Head>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
