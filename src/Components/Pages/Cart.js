import React from "react";
import CartCard from "../Cart/CartCard";
import CartTop from "../Cart/CartTop";

export default function Cart(){
    return(
        <div>
        <CartTop/>
        <CartCard/>
        <CartCard/>
        </div>
    )
}