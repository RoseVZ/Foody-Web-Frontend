import React from "react";
import { Grid,Avatar,Typography } from "@mui/material";

export default function CartTop(){
    return(
        <div>
            <Grid container>
            <Grid pl={1}>
                <img src="https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" alt='logo' height="50px" width="50px"></img>
            </Grid>
            <Grid item xs={11}>
                {/* <Typography variant="body2">Food Website</Typography> */}
            </Grid>
                <Grid item pt={1}>
                    <Avatar>A</Avatar>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12} pl={1} backgroundColor="#ff7e5d" pt={1} pb={1}>
                    <Typography variant="h4">My Cart</Typography>
                </Grid>
            </Grid>
        </div>
    )
}