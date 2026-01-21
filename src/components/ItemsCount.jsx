import React from "react";
import "./ItemsCount.css";

export const ItemsCount = ({ products })=>{
    

    return(
    <div className="items-count">
        <p>Results found: {products.length}</p>
    </div>
    );
};