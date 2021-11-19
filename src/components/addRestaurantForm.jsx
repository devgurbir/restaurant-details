import RestaurantInput from './restaurantInput';

function AddRestaurantForm({handleChange, formValues, onSubmit}){
    
    return (
        <div className = "addRestaurant">
        <h2>Add Restaurant</h2>
        <form onSubmit = {onSubmit}>
            <RestaurantInput value = {formValues.restaurantName} onChange = {handleChange} name="restaurantName" placeholder="Add restaurant name" />
            <RestaurantInput value = {formValues.restaurantCategories} onChange = {handleChange} name="restaurantCategories" placeholder="Add restaurant categories" />
            <RestaurantInput value = {formValues.heroImage} onChange = {handleChange} name="heroImage" placeholder="Add Image URL" />
            <RestaurantInput value = {formValues.paymentMethods} onChange = {handleChange} name="paymentMethods" placeholder="Add payment methods" />
            <input type="submit" value="Add Restaurant" />
        </form>
        </div>
    )
}

export default AddRestaurantForm