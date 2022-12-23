import LogoSign from '../FirstPage/logoSign';
import Money from '../FirstPage/Middle';
import Footer from '../FirstPage/Footer';
import React from 'react';

export default function FirstPage(){
    return(
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
    )
}