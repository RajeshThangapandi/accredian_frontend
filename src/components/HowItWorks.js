import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import styled from '@emotion/styled';

const HowItWorksBox = styled(Box)`
  text-align: center;
  padding: 50px 0;
  background-color: #f7f9fc;
`;

const Step = styled(Box)`
  padding: 20px;
`;

const HowItWorks = () => (
  <HowItWorksBox>
    <Container>
      <Typography variant="h4">How Does It Work?</Typography>
      <Grid container spacing={2} justifyContent="center" marginTop={2}>
        <Grid item xs={12} sm={4}>
          <Step>
            <Typography variant="h6">Step 1</Typography>
            <Typography>Refer a friend</Typography>
          </Step>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Step>
            <Typography variant="h6">Step 2</Typography>
            <Typography>Your friend joins</Typography>
          </Step>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Step>
            <Typography variant="h6">Step 3</Typography>
            <Typography>You earn rewards</Typography>
          </Step>
        </Grid>
      </Grid>
    </Container>
  </HowItWorksBox>
);

export default HowItWorks;
