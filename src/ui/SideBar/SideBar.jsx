import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardActionArea, Grid } from '@mui/material';
import sideBar from "@/assets/top-news2.png";
import Image from 'next/image';
export default function SideBar() {
  const message=`Truncation should be conditionally applicable on this long line`;
  return (
    <Box sx={{ marginTop: "40px" }}>
<Card >
      <CardActionArea>
      <CardMedia>
            <Image
              src={sideBar}
              width={800}
              height={500}
              alt="top news"
            />
          </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Grid container wrap="nowrap" spacing={2} sx={{marginTop:"40px"}}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
    <Grid container wrap="nowrap" spacing={2} sx={{marginTop:"40px"}}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
          </Grid>
        </Grid>
    </Box>
    
  );
}
