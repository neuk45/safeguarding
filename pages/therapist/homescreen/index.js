import styles from '../../../styles/Home.module.css'
import Head from 'next/head'
import { Container, Typography,Button,CardContent,CardActions,Card, Grid,ButtonBase} from '@mui/material';
import React from 'react';


const card = (
    <React.Fragment>
      <CardContent justifyContent="center">
        <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
          Check-In
        </Typography>
      </CardContent>
    </React.Fragment>
  );

function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Listening Ear Safeguarding - Therapist</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid container direction={"column"} rowGap={10} justifyContent="center" alignItems="center"> 
            <Grid Item xs={12} sm={12} md={12}>
                <ButtonBase onClick={() => { alert("Checked in") }}>
                <Card>
                    <CardContent onClic>
                    {card}
                    </CardContent>
                </Card>
                </ButtonBase>
            </Grid>
            <Grid Item xs={12} sm={12} md={12}>
                To DO
            </Grid>
        </Grid>

        
        {/* <Item maxWidth="md">
          <Typography variant='heading1'>To DO: Map APi</Typography>
        </Container>    
        <Container maxWidth="md">
          <Typography variant='heading1'>To DO: Address of client</Typography>
        </Container> 
        <Container maxWidth="md">
          <Typography variant='heading1'>To DO: Emergency sticky</Typography>
        </Container> 
        </Grid> */}
      </div>
    );
}

  export default Home;