import React from "react";
import { Grid,Button,Typography,Card,CardContent } from "@mui/material";

export default function OrderCard(){
    return(
        <div>
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={2}>
                            <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                        </Grid>
                        <Grid item xs={7}>                      
                            <Typography variant="h6">Item Name</Typography>
                            <Typography variant="body3">Quantity</Typography>
                        </Grid>
                        <Grid item justifyContent="center" pt={2}>
                            <Button variant="contained" color="success">Completed</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}