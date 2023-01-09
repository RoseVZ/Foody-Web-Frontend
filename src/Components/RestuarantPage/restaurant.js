import React from "react";
import { Grid,Box } from "@mui/material";
import EditMenu from "./editmenu";
import Order from "./order";

export default function Restaurant(){
    return(
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <Box>
                        <Order/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <EditMenu/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}