import React from "react";
import { Grid,Typography,Button } from "@mui/material";
import EditMenuCard from "./editmenucard";

export default function EditMenu(){
    return(
        <Grid pt={1} pl={1} pr={1} component="main">
            <Grid mb={1} backgroundColor="#">
            <Typography variant="h5">Edit Menu</Typography>
            </Grid>
                <EditMenuCard/>
            <Grid container>
                <Grid item xs={10}></Grid>
                <Grid item xs={2} pt={1}>
                    <Button variant="contained" color="success">Add Item</Button>
                </Grid>
            </Grid>
        </Grid> 
            
    )
}