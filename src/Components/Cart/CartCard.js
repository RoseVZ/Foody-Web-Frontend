import React from "react";
import { Grid,Card,CardContent,Typography,Button } from "@mui/material";

export default function CartCard(){
    return(
        <Grid pt={1} pl={1} pr={1}>
                <Card>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={1}>
                                    <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="65px" height="65px"></img>
                                </Grid>
                                <Grid item xs={9}>                      
                                    <Typography variant="h6">Food Name</Typography>
                                    <Typography variant="body3">Description / Restuarant Name</Typography>
                                </Grid>
                                <Grid item xs={1} pt={3} pl={13}>
                                    1   
                                </Grid>
                                <Grid item xs={1}>
                                    <Button onClick=''>+</Button>
                                    <Button onClick=''>-</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
            </Grid> 
    )
}