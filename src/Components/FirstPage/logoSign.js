import React from "react";
import { Grid } from "@mui/material";
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import Login from './Login';

export default function LogoSign(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='#786578'>
        <Grid item xs={6} backgroundColor='white' rowSpacing={10}>
          <Grid container>
            <Grid item xs={9}>
              <img src= "" width='100px' height='50px' alt='logo'></img> 
            </Grid>
            <Grid>
              <SignUp/>
            </Grid>
            <Grid>  
              <Login/>
            </Grid>
          </Grid>
          <div class="search">
            <SearchBar />
      </div>
          <p>Random delivery locations</p> 
        </Grid>
        <Grid item xs={6} rowSpacing={10}>
          <img src= "" alt = "food pic" width='100%' height='100%'></img>
        </Grid>
      </Grid>
    )
}