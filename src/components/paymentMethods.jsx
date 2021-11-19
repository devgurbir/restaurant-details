import React from "react";

function PaymentMethods({paymentMethods}){
    return (
        <div className = "paymentMethods">
            <h4>Payment Methods:</h4>
            <p>{paymentMethods.map( (el, index) => index !== paymentMethods.length - 1 ? <span>{el}, </span> : <span> {el}</span>) }</p>
            {/* <p>{categoryArray}</p> */}
        </div>
    )
}

export default PaymentMethods