import React from "react";
import { Grid,Card,CardContent,Typography,Button } from "@mui/material";

export default function MenuCard(){
    return(
        <Grid pt={1} pl={1} pr={1} component="main">
                <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={1}>
                                    <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                                </Grid>
                                <Grid item xs={7}>                      
                                    <Typography variant="h6">Food Name</Typography>
                                    <Typography variant="body3">Description / Restuarant Name</Typography>
                                </Grid>
                                <Grid item xs={1} pt={3} pl={15}>
                                    1   
                                </Grid>
                                <Grid item xs={1} pl={3}>
                                    <Button variant="outlined" onClick=''>+</Button>
                                    <Button onClick=''>-</Button>
                                </Grid>
                                <Grid item pt={2} pl={4}>
                                    <Button variant="contained" color="success">Add to cart</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
            </Grid> 
    )
}