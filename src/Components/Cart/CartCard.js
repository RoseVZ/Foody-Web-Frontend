import React from "react";
import { Grid,Card,CardContent,Typography,Button } from "@mui/material";

let n = 0;

function add(){
    n++;
}

function sub(){
    n--;
}


export default function CartCard(){
    return(
        <Grid pt={1}>
                <Card backgroundColor="yellow">
                        <CardContent>
                            <Grid container>
                                <Grid item xs={1}>
                                    <img src="http://chinabuffetatlantic.com/custom/3.jpg" alt="food" width="70px" height="70px"></img>
                                </Grid>
                                <Grid item xs={10}>                      
                                    <Typography variant="h5">Food Name</Typography>
                                    <Typography variant="body2">Description / Restuarant Name</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button onClick={add()}>+</Button>
                                    <p>{n}</p>
                                    <Button onClick={sub()}>-</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
            </Grid> 
    )
}