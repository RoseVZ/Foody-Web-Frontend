import React from "react";
import { Grid,Avatar } from "@mui/material";

export default function CartTop(){
    return(
        <Grid container backgroundColor="grey">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Computer.jpg" alt='abc' height="30px" width="30px"></img>
        <Grid item xs={11}>Food website</Grid>
            <Grid item>
                <Avatar>A</Avatar>
            </Grid>
        </Grid>
    )
}