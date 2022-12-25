import React from "react";
import {Grid,Button,Box} from "@mui/material";
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import Login from './Login';

export default function LogoSign(){
    return(
        <Grid container>
          <Grid item xs={6} backgroundColor='white'>
            <Grid container spacing={4}>
              <Grid item xs={1}>
                {/* for initial spacing */}
              </Grid>
              <Grid item xs={7}>
                <img src= "https://scalebranding.com/wp-content/uploads/2020/03/fun-food-logo.jpg" width='80px' height='80px' alt='logo'></img> 
              </Grid>
              <Grid item xs={1}>
                <p>
                  <Button variant='text' size="small">
                    <SignUp/>
                  </Button>
                </p>
              </Grid>
              <Grid item xs={1} ml={3}>  
                <p>
                  <Button variant='outlined' size='small'>
                    <Login/>
                  </Button>
                </p>
              </Grid>
            </Grid>

          <Box>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={11}>
                <div class="search">
                  <p>
                    <SearchBar />
                  </p>
                </div>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid>
               <p> We are available at : </p>
               <p> <em>Bengaluru , Mysuru , Hubli , Davangere , Dharwad</em></p> 
               </Grid>
            </Grid>
          </Box>
        </Grid>
        
        
        <Grid item xs={6} backgroundColor='#bca792'>
          <img src= "https://2.bp.blogspot.com/-oZ6dI1a4FI0/U2EX6jbyUfI/AAAAAAAAHz8/cQHCq_xiuPI/s1600/background_main.jpg" alt = "food pic" width='759px' height='480px'></img>
        </Grid>
      </Grid>
    )
}