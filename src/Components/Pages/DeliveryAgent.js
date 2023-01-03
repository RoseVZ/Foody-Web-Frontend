import React from "react";
import DeliveryCard from "../DeliveryAgent/deliverycards";
import Top from "../DeliveryAgent/top";

export default function DeliveryAgent(){
    return(
        <div>
            <Top/>
            <DeliveryCard/>
            <DeliveryCard/>
        </div>
    )
}