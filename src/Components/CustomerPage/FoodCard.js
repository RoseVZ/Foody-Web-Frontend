import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://www.sagephotographystudio.com/img/s/v-10/p1875786421-4.jpg"
          alt="kokre"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ABC
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsam eligendi non mollitia illo minus velit quibusdam odio adipisci ea explicabo distinctio quos, fuga, voluptate iusto maiores recusandae ab beatae.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}