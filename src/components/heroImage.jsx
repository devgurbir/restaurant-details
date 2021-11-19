import React from "react";

function HeroImage({imageURL}){
    return (
        <div className = "heroImage">
            <img src={imageURL} alt="image"  width="300px" height="180px" />
        </div>
    )
}

export default HeroImage