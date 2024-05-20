import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";

import Image from 'next/image';
export default function LatestNews() {
  return (
    <Box sx={{ marginTop: "40px" }}>
         <Card >
      <CardActionArea>
      <CardMedia>
            <Image
              src={topNews}
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card >
      <CardActionArea>
      <CardMedia>
            <Image
              src={topNews}
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
  </Grid>
  <Grid item xs={6}>
  <Card >
      <CardActionArea>
      <CardMedia>
            <Image
              src={topNews2}
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
  </Grid>
  <Grid item xs={6}>
  <Card >
      <CardActionArea>
      <CardMedia>
            <Image
              src={topNews}
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
  </Grid>
  <Grid item xs={6}>
  <Card >
      <CardActionArea>
      <CardMedia>
            <Image
              src={topNews}
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
  </Grid>
</Grid>
    </Box>
  );
}

