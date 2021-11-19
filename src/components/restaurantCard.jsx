import React from "react";
import RestaurantInfo from './restaurantInfo';
import HeroImage from './heroImage';
import RatingBox from "./ratingBox";

function RestaurantCard({restaurantData}){
    return (
        
        <div className = "restaurantCard">            
            <HeroImage imageURL = {restaurantData.heroImage} />
            <RestaurantInfo name = {restaurantData.name} categoryArray = {restaurantData.categories} paymentMethods = {restaurantData.paymentMethods} />
            <RatingBox rating = {restaurantData.rating} numberOfReviews = {restaurantData.numberOfReviews} />
        </div>
    )
}

export default RestaurantCard