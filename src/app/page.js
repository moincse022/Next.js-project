import LatestNews from '@/ui/LatestNews/LatestNews';
import SideBar from '@/ui/SideBar/SideBar';
import { Grid } from '@mui/material';
import React from 'react';

const  HomePage=() => {
  return (
    <div>
     <Grid container spacing={2}>
  <Grid item xs={8}>
   <LatestNews/>
  </Grid>
  <Grid item xs={4}>
   <SideBar/>
  </Grid>

</Grid>
    </div>
  );
};

export default HomePage;