import React from "react";

function RatingBox({rating, numberOfReviews}){
    return (
        <div className = "ratingBox">
            <h4>Rating: {rating}</h4>
            <h4>Reviews: {numberOfReviews}</h4>
        </div>
    )
}

export default RatingBox