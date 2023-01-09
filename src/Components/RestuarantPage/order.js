import React from "react";
import { Grid,Typography} from "@mui/material";
import OrderCard from "./ordercard";

export default function Order(){
    return(
        <Grid pt={1} pl={1} pr={1} component="main">
            <Grid mb={1} backgroundColor="#">
            <Typography variant="h5">Orders To Be Processed</Typography>
            </Grid>
                <OrderCard/>
            </Grid> 
    )
}