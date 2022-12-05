import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function App() {
  return (
    <div>
      <box>
        <Grid container columnSpacing={0} rowSpacing={0} backgroundColor='red'>
          <Grid item xs={6} backgroundColor='white' rowSpacing={10}>
            <p><img src='https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/611e17ebf252adff5480aef3_DMSlDQUuTZetljlTjKw6NfmtfDbOlaS08FUI42EQJYGrP0sb_Mnhck8S3KmhI9PoQkEsFAqFf21M13WaZ089jerVNTNSz9rTNKfDsareelasXbJ9Z9KkTfVzAZOIB8V0MBwWvavy.jpeg' width='100px' height='50px' alt='30'></img> <a href='https://www.w3schools.com'>Sign-Up</a> <a href='www.w3schools.com'>Login</a></p>
            <div class="search">
            
            <p id="abc"></p>
        </div>
            <p>Random delivery locations</p> 
          </Grid>
          <Grid item xs={6} rowSpacing={10}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.WDZIWyYhBONdPWmkoF07NQHaEo%26pid%3DApi&f=1&ipt=15051794bede57b59c86ad5e81c97a0f00313c1fd8d6e11b9c8dab8868aab95b&ipo=images" alt = "some random food pic" width='100%' height='100%'></img>
          </Grid>
        </Grid>
      </box>
      <box>
       <Grid container columnSpacing={0} rowSpacing={0} backgroundColor="brown">
       <Grid item xs={4}>
        <p>Give us Money</p>
       </Grid> 
       <Grid item xs={4}>
        <p>Give us your hard earned money</p>
       </Grid>
       <Grid item xs={4}>
        <p>Give us more money</p>
       </Grid>
       </Grid>
      </box>
      <box>
        {/* <Footer \> */}
      </box>
    </div>
  );
}

