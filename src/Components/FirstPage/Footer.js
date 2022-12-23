import React from 'react';
import Grid from '@mui/material/Grid';

export default function Footer(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='black' color='white'>
            <Grid item xs={4}>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
                <p>Company</p>
            </Grid>
            <Grid item xs={4}>
                <p>Contact Us</p>
                <p>Contact Us</p>
                <p>Contact Us</p>
                <p>Contact Us</p>
            </Grid>
            <Grid item xs={4}>
                <p>Legal</p>
                <p>Legal</p>
                <p>Legal</p>
                <p>Legal</p>
            </Grid>
        </Grid>
    )
}