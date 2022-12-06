import * as React from 'react';
import Grid from '@mui/material/Grid';
import LogoSign from './Components/FirstPage/logoSign';
import Money from './Components/FirstPage/Money';
import Footer from './Components/FirstPage/Footer';

export default function App() {
  return (
    <div>
      <box>
        <LogoSign/>
      </box>
      <box>
        <Money/>
      </box>
      <box>
        <Footer /> 
      </box>
    </div>
  );
}

