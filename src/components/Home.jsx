import React from 'react';
import { Typography, Container, Card, CardMedia, Grid } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
    <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', color: 'blue', textDecoration: 'underline' }}>
  workplace motivation
</Typography>

       <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        
        </Grid> 
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            
          </Typography>
          <Typography variant="h3"  align="left" paragraph style={{ fontWeight: 'italics', color:"red"}}>
          "Empowerment lights the way to success and fulfillment in work."
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;