import React from "react";
import { Grid,Card,CardContent,Typography,Button } from "@mui/material";

export default function DeliveryCard(){
    return(
        <Grid pt={1} pl={1} pr={1} component="main">
                <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={1}>
                                    <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                                </Grid>
                                <Grid item xs={10}>                      
                                    <Typography variant="h6">Item Name</Typography>
                                    <Typography variant="body3">Restuarant Name & address</Typography>
                                    <Typography variant="body2">Customer Name & Pickup address</Typography>
                                </Grid>
                                <Grid item justifyContent="center" pt={3}>
                                    <Button variant="contained" color="success">Delivered</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
            </Grid> 
    )
}