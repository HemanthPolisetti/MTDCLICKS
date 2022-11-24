import * as React from 'react';
import logo from './Images/logo.jpg';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import './main.css'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://instagram.com/MTD_Clicks">
        MTD CLICKS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const theme = createTheme();

export default function Album({cards}) {
  
  return (
    <div className='body'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{ background: '#F9F507'}}>
        <Toolbar>
          <img src={logo} className='logo'></img>
          <Typography variant='h6'>
            <span className='header'> MTD CLICKS </span> 
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box className='box'
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
            <h4 className='heading' xs={'20px'} sm={'35px'} md={'45px'}>M T D C L I C K S</h4> 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            <p className='para'> HELLO! THIS IS RAJESH MTD I AM A PART-TIME PHOTOGRAPHER WHO TOOK PHOTOS IN MOBILE.I WILL SHOW SOME OF MY PICS IN HERE
             IF YOU LIKE THEM FEEL FREE TO FOLLOW ME IN INSTAGRAM FOR INSTANT UPDATES.</p>
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href='https://www.instagram.com/MTD_Clicks' underline='none'><Button variant="contained" style={{background:'#181816'}}>INSTAGRAM</Button></Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    src ={card.image}
                    alt="random"
                  />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This is developed by P.Hemanth Kumar
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
    </div>
  );
}
