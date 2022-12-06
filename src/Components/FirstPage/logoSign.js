import React from "react";
import { Grid } from "@mui/material";
import SearchBar from './SearchBar';
import SignUp from './SignUp';
import Login from './Login';

export default function LogoSign(){
    return(
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='red'>
        <Grid item xs={6} backgroundColor='white' rowSpacing={10}>
          <img src='https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/611e17ebf252adff5480aef3_DMSlDQUuTZetljlTjKw6NfmtfDbOlaS08FUI42EQJYGrP0sb_Mnhck8S3KmhI9PoQkEsFAqFf21M13WaZ089jerVNTNSz9rTNKfDsareelasXbJ9Z9KkTfVzAZOIB8V0MBwWvavy.jpeg' width='100px' height='50px' alt='30'></img> 
          <a><SignUp/></a> <a><Login/></a>
          <div class="search">
            <SearchBar />
      </div>
          <p>Random delivery locations</p> 
        </Grid>
        <Grid item xs={6} rowSpacing={10}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WDZIWyYhBONdPWmkoF07NQHaEo%26pid%3DApi&f=1&ipt=15051794bede57b59c86ad5e81c97a0f00313c1fd8d6e11b9c8dab8868aab95b&ipo=images" alt = "some random food pic" width='100%' height='100%'></img>
        </Grid>
      </Grid>
    )
}