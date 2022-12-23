import React from "react";
import { Grid } from "@mui/material";
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import Login from './Login';

export default function LogoSign(){
    return(
        <Grid container backgroundColor='#786578'>
        <Grid item xs={6} backgroundColor='white'>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <img src= "https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" width='70px' height='70px' alt='logo'></img> 
            </Grid>
            <Grid item xs={1}>
              <p>
                <SignUp/>
              </p>
            </Grid>
            <Grid item xs={1} ml={3}>  
            <p>
              <Login/>
              </p>
            </Grid>
          </Grid>
          <div class="search">
            <SearchBar />
      </div>
          <p>Bengaluru , Mysuru , Hubli , Davangere , Dharwad</p> 
        </Grid>
        <Grid item xs={6}>
          <img src= "https://2.bp.blogspot.com/-oZ6dI1a4FI0/U2EX6jbyUfI/AAAAAAAAHz8/cQHCq_xiuPI/s1600/background_main.jpg" alt = "food pic" width='960px' height='485px'></img>
        </Grid>
      </Grid>
    )
}