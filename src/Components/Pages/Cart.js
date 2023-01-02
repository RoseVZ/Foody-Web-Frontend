import React from "react";
import CartCard from "../Cart/CartCard";
import CartTop from "../Cart/CartTop";
import CartEnd from "../Cart/CartEnd";

export default function Cart(){
    return(
        <div>
        <CartTop/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartEnd/>
        </div>
    )
}