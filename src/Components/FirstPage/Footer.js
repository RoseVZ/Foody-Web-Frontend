import * as react from react;
import Grid from '@mui/material/Grid';

export default function Footer(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='black' color='white'>
            <Grid item xs={4}>Company</Grid>
            <Grid item xs={4}>Contact Us</Grid>
            <Grid item xs={4}>Legal</Grid>
        </Grid>
    )
}