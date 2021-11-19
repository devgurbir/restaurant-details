import React from "react";

function Categories({categoryArray}){
    // console.log(categoryArray)
    return (
        <div className = "categories">
            <h4>Categories:</h4>
            <p>{categoryArray.map( (el, index) => index !== categoryArray.length - 1 ? <span>{el}, </span> : <span> {el}</span>) }</p>
            {/* <p>{categoryArray}</p> */}
        </div>
    )
}

export default Categories