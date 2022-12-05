import * as react from react;
import { Grid } from "@mui/material";

export default function Money(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor="brown">
            <Grid item xs={4}>
                <p>Give us Money</p>
            </Grid> 
            <Grid item xs={4}>
                <p>Give us your hard earned money</p>
            </Grid>
            <Grid item xs={4}>
                <p>Give us more money</p>
            </Grid>
        </Grid>
    )
}