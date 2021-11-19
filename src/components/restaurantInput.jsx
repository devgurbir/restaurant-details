import {useState} from 'react'

function RestaurantInput({name, placeholder, onChange, value}){
    // const [inputValue, setInputValue] = useState("");
    return(
        <input name={name} placeholder={placeholder} value={value} onChange = {onChange}/>
    )
}

export default RestaurantInput