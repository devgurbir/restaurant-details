import React from "react";
import RestaurantName from "./restaurantName";
import Categories from "./categories";
import PaymentMethods from "./paymentMethods";

function RestaurantInfo({name, categoryArray, paymentMethods}){
    return (
        <div className = "restaurantInfo">
            <RestaurantName name = {name} />
            <Categories categoryArray = {categoryArray} />
            <PaymentMethods paymentMethods = {paymentMethods} />
        </div>
    )
}

export default RestaurantInfo